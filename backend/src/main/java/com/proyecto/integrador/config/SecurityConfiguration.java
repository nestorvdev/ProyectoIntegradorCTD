package com.proyecto.integrador.config;
import com.proyecto.integrador.config.jwt.JwtAuthenticationEntryPoint;
import com.proyecto.integrador.config.jwt.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private UserDetailsService jwtUserDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // configure AuthenticationManager so that it knows from where to load
        // user for matching credentials
        // Use BCryptPasswordEncoder
        auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    private static final String[] AUTH_WHITELIST = {
            // -- Swagger UI v2
            "/v2/api-docs", "/swagger-resources", "/swagger-resources/**", "/configuration/ui", "/configuration/security", "/swagger-ui.html", "/webjars/**",
            // -- Swagger UI v3 (OpenAPI)
            "/v3/api-docs/**", "/swagger-ui/**",
            // other public endpoints of your API may be appended to this array
            "/users/activate/**", "/authenticate", "/categories/**", "/products/**", "/cities/**", "/users/create", "/users/login"
    };
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {


       /* httpSecurity.csrf().disable().cors().and().authorizeRequests().anyRequest().permitAll().and().httpBasic();
*/

        // We don't need CSRF for this example
        System.err.println(httpSecurity.csrf().disable().cors()
                .and().
                // don't authenticate these requests
                        authorizeRequests()
                .antMatchers(AUTH_WHITELIST)
                    .permitAll()
                // requests need to be authenticated
                .antMatchers("/reservations/**", "/products/scores/**", "/categories/create", "/products/create", "/cities/create","/categories/update", "/products/update", "/cities/update","/categories/delete", "/products/delete", "/cities/delete").access("hasAnyAuthority('ADMIN','USER')")
                    .anyRequest().authenticated().and().
                        formLogin().loginPage("/users/login").and().
        // make sure we use stateless session; session won't be used to
                // store user's state.
                        exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().
                exceptionHandling().accessDeniedPage("/users/403"));


    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("/**");
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://3.214.98.239", "http://worldguestbooking.com.ar"));
                configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowCredentials(true);
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/*", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }

    @Bean
    public JwtRequestFilter authenticationTokenFilterBean() {
        return new JwtRequestFilter();
    }

}
