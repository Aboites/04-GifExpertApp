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

		expect( wrapper.find('p').text().trim() ).toBe( value );
	});

	test("No debe realizar nada si no se ingresa nada en el input", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe llamar el setCategories y limpiar la caja de texto', () => {
		const value = "Hola mundo";

		// Simulamos el cambio en el input y verificamos que se haya hecho
		wrapper.find("input").simulate("change", { target: { value } });
		expect( wrapper.find('input').prop("value").trim() ).toBe( value );


		// Simulamos el submit
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		// Verificamos que se haya llamado la funcion setCategories con el argumento correcto
		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

		// Verificamos que despues del submit se haya reseteado el valor del input
		expect( wrapper.find('input').prop('value') ).toBe("");

	});
	

});
