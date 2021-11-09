import React from 'react';
import { shallow, mount } from 'enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
import Card from './Card';
import Cards from './index';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

let wrapper;

describe('Pruebas en Card', () => {    
let props = { image: "test", cardCategory: "test", name: "test", city: "test", country: "test", description: "test", id: 1, reference: "test", qualification: 10, features: [] }
    it('Debe de mostrarse correctamente', () => {
        wrapper = shallow(<Card {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    /* it("Deberia llamar a handleToggle cuando se hace click en el corazón", () => {
        let handleToggle = jest.fn()
        wrapper = shallow(<Card handleToggle={handleToggle} />);
        wrapper.find('div div svg.iconHeart').simulate('click', handleToggle);
        expect(handleToggle).toBeCalled()
    }) */ 

});

describe('Pruebas en Cards', () => {   
    let props = { titulo: "test", category:"test", city:"test", search:"test", clickBusqueda:"test" }
    it('Debe de mostrarse correctamente', () => {
        wrapper = shallow(<Cards {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});