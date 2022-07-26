//   When requiring modules, it's not necessary to include the .js file extension. Node will assume that the file is a JS file if no extension is specified.
const Player = require("../lib/Player");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion");
console.log(new Potion())





test("creates a player object", () => {
    const player = new Player("Dave");

    expect(player.name).toBe("Dave");
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

