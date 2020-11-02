class scenario {
    constructor () {
        this.actors = [];
    }
}

class actor {
    constructor (name) {
        this.name = name;
        this.traits = [];
        this.desc = '';
    }

    addTrait (trait) {
        this.traits.push(trait)
    }
    addDesc (description) {
        this.desc = description;
    }
}

// Create an example character
let thingOne = new actor("Thing 1");
thingOne.addTrait('insightful')
thingOne.addTrait('creative')
console.log(thingOne)

// Create Scenario: Prologue
let story = [];
story["prologue"] = new scenario();

// Add a character to the cast of a scenario
story.prologue.actors.push(thingOne)
console.log(story['prologue'])
