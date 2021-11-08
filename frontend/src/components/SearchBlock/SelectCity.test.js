import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom'
import SelectCity from './SelectCity';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}))
let wrapper = shallow(<SelectCity />);

beforeEach(() => {
    wrapper = shallow(<SelectCity />);
})

describe('Pruebas en <SelectCity />', () => {

    it("Deberia mostrar <SelectCity/> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('<SelectCity /> se renderiza bien', () => {
        const placeholder='¿A dónde vamos?';
        const jsxSelectCity = shallow(<SelectCity />);
        expect(jsxSelectCity).toMatchSnapshot();
    })

});