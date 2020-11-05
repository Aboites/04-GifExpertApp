import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test("Debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe cambiar la caja de texto", () => {
		const input = wrapper.find("input");
		const value = "Hola mundo";
		input.simulate("change", { target: { value } });
	});

	test("No debe realizar nada si no se ingresa nada en el input", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		expect(setCategories).not.toHaveBeenCalled();
	});
});
