export class Character {
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this.level = level;
    }
}

export class Team {

    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('character already exists');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        for (const character of characters) {
            this.members.add(character);
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}