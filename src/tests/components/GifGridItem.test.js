import React from "react";
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem.js";

describe("Prueba realizada al componente <GifGridItem />", () => {
	const titulo = "Titulo";
	const url = "https://localhost/unaDireccion.jpg";
	const wrapper = shallow(<GifGridItem title={titulo} url={url} />);

	test("Debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de tener un parrafo con el titulo", () => {
		const p = wrapper.find("p");
		expect(p.text().trim()).toBe(titulo);
	});

	test("Debe de obtener una imagen con url y alt enviados", () => {
		const img = wrapper.find("img");
		expect(img.prop("src")).toBe(url);
		expect(img.prop("alt")).toBe(titulo);
	});

	test("Debe tener un <div> con argumento animate__flipInX", () => {
		const div = wrapper.find("div");

		expect(div.prop("className").includes("animate__flipInX")).toBe(true);
	});
});
