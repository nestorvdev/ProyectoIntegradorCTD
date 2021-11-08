import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom'
import CityOption from './CityOption';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}))
let wrapper = shallow(<CityOption />);

beforeEach(() => {
    wrapper = shallow(<CityOption />);
})

describe('Pruebas en <CityOption />', () => {  
    it("Deberia mostrar <CityOption/> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('<CityOption /> should render the city in props', () => {
        const city = 'Buenos Aires';
        const jsxCityOption = shallow(<CityOption city={city}/>);
        expect(jsxCityOption).toMatchSnapshot();
    });
    it('<CityOption /> should render the country in props', () => {
        const country = 'Argentina';
        const jsxCityOption = shallow(<CityOption country={country}/>);
        expect(jsxCityOption).toMatchSnapshot();
    });
    it('should render one <CityOption>', () => {
        expect(wrapper.find('h3')).toHaveLength(2);
    });
});