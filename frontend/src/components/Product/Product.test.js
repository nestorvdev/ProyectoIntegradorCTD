import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CarouselModal from "./CarouselModal";
import Share from "./Share";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe("Probando el componente <CarouselModal/>", () => {
    let wrapper;
    let props={
        images:[{url:""}],
        viewerIsOpen:true,
        setCurrentImage: jest.fn(),
        setViewerIsOpen: jest.fn()
    }
   
    beforeEach(() => {
        wrapper = shallow(<CarouselModal/>)
    });

    it("Deberia mostrar <CarouselModal/> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Deberia cerrarse el carousel al hacer click en la cruz", ()=>{
        wrapper = shallow(<CarouselModal {...props}/>)
        wrapper.find("div.closeButton").simulate("close")
        expect(wrapper.prop("viewerIsOpen")).toBeFalsy()
    })
})

describe("Probando el componente <CarouselModal/>", () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Share/>)
    });

    it("Deberia mostrar <Share/> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

})
