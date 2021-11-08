import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

beforeEach(() => {
    wrapper = shallow(<Calendar />);
})

describe('Pruebas en <Calendar />', () => {

    it("Deberia mostrar <Calendar/> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

});