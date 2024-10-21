import {Team, Character} from '../app.js';


describe('Team', () => {
    test('add', () => {
        const team = new Team();
        const character1 = new Character('John', 100, 1);
        const character2 = new Character('Jane', 100, 1);
        team.add(character1);
        expect(team.members.size).toBe(1);
        team.add(character2)
        expect(team.members.size).toBe(2);
        expect(() => team.add(character1)).toThrow('character already exists');
    });

    test('addAll', () => {
        const team = new Team();
        const character1 = new Character('John', 100, 1);
        const character2 = new Character('Jane', 100, 1);
        team.addAll(character1, character2, character2, character1);
        expect(team.members.size).toBe(2);
    });

    test('toArray', () => {
        const team = new Team();
        const character1 = new Character('John', 100, 1);
        const character2 = new Character('Jane', 100, 1);
        team.addAll(character1, character2, character2, character1);
        expect(team.toArray()).toEqual([character1, character2]);
    });
});


describe('Character', () => {
    test('name', () => {
        const character = new Character('John', 100, 1);
        expect(character.name).toEqual('John');
        expect(character.health).toEqual(100);
        expect(character.level).toEqual(1);
    });
});


