package com.proyecto.integrador;


import com.proyecto.integrador.controller.CategoryController;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
@WebMvcTest(CategoryController.class)
@AutoConfigureMockMvc(addFilters = false)
@TestMethodOrder(MethodOrderer.MethodName.class)
public class ICategoryServiceUnitTest {
    /*private MockMvc mockMvc;
    @Mock
    private CategoryService categoryService;

    @InjectMocks
    private CategoryController categoryController;

    private CategoryDTO category;

    @Before
    public void reset() throws Exception{
        mockMvc = MockMvcBuilders.standaloneSetup(categoryController).build();
        category = new CategoryDTO (12,"Hotel","Hotel 3 estrellas","https://unsplash.com/photos/MXbM1NrRqtI");
        configureMockito();
    }

    public void configureMockito() throws FindByIdException {
        Mockito.when(categoryService.saveCategory(category)).thenReturn(category);
        Mockito.when(categoryService.findCategoryById(12)).thenReturn(category);
        Mockito.when(categoryService.updateCategory(category)).thenReturn(category);
        Mockito.when(categoryService.findAllCategories()).thenReturn(List.of(category));
        Mockito.doNothing().when(categoryService).deleteCategoryById(12);
    }

    @Test
    public void testAgregarCategoria() {
        CategoryDTO c = categoryService.saveCategory(category);
        Assertions.assertEquals(category,c);
    }

    @Test
    public void testActualizarCategoria() throws Exception {
        category.setTitle("test 1");
        CategoryDTO c = categoryService.updateCategory(category);
        Assertions.assertEquals(category,c);
    }

    @Test
    public void testBuscarCategoria() throws Exception {
        CategoryDTO c = categoryService.findCategoryById(12);
        Assertions.assertEquals(category,c);
    }

    @Test
    public void testBuscarTodasLasCategorias() {
        List<CategoryDTO> categories = categoryService.findAllCategories();
        Assertions.assertEquals(List.of(category),categories);
    }

    @Test
    public void testEliminarCategoria() throws Exception {
        categoryService.deleteCategoryById(12);
        verify(categoryService,times(1)).deleteCategoryById(12);
    }*/
}
