import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con el fetch de getGifs", () => {
	test("Debe de traer 10 elementos", async () => {
		const gifs = await getGifs("Yorkie");
		expect(gifs.length).toBe(10);
	});

	test("Si se envia un string vacio debe de traer 0 elementos", async () => {
		const gifs = await getGifs("");
		expect(gifs.length).toBe(0);
	});
});
