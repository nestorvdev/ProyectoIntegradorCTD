import React from "react";
import { shallow } from "enzyme";
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
import Category from "./Category";
import index from "./index";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

let wrapper;
let props = {handleCategory:jest.fn(), category: {id:1, name:"test", description:"test", image:"test", products:[]}, key:1,
title:"Hoteles", imageUrl:{url:"test"}, description:"test"};                                                                    



describe("<Category />", () => {
    beforeEach(() => {
        wrapper = shallow(<Category {...props}/>); 
    });

    it("Renderiza el componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    }); 

    it('Deberia disparar el evento handleCategory al hacer click', () => {
        wrapper = shallow(<Category {...props}/>);        
        
        wrapper.find('div.categoryCard').first().props().onClick()
        expect(props.handleCategory).toBeCalled();        
    });

    it('Debería renderizar la imagen con la url que viene por props', () => {       
        expect(wrapper.find('img').props().src).toBe(props.imageUrl);
    })

    it('Debería renderizar el componente h3 con el titulo title de props', () => {
        expect(wrapper.find('h3').text()).toBe(props.title);
    })

    it('Debería renderizar el componente p con la descripción description de props', () => {
        expect(wrapper.find('p').text()).toBe(props.description);
    })
});