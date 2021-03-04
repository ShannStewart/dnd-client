export default{
    'races':[
        {
            'id': '0',
            'name': 'Human',
            'language': ['common'],
            'proficiencies': [],
            'feats': [],
            'ability': [{'name': 'STR', 'score': 1}, {'name': 'DEX', 'score': 1}, {'name': 'CON', 'score': 1}, {'name': 'INT', 'score': 1}, {'name': 'WIS', 'score': 1}, {'name': 'CHA', 'score': 1}]
        },
        {
            'id': '1',
            'name': 'Dwarf',
            'language': ['common', 'Dwarvish'],
            'proficiencies': [],
            'feats': ['Battleaxe Proficiency', 'Handaxe Proficiency', 'Lighthammer Proficiency', 'Warhammer Proficiency', 'Smith Tools Proficiency', 'Brewers Supplies Proficiency', "Mason's Tools Proficiency", 'Darkvision', 'Dwarven-Resilence'],
            'ability': [{'name': 'CON', 'score': 2}, {'name': 'WIS', 'score': 1}]
        },
        {
            'id': '2',
            'name': 'Elf',
            'language': ['common', 'Elvish'],
            'proficiencies': ['Perception'],
            'feats': ['Darkvision'],
            'ability': [{'name': 'DEX', 'score': 2}, {'name': 'INT', 'score': 1}]
        },
    ],

    'classes':[
        {
            'id': '0',
            'name': 'Fighter',
            'proficiencies_choice': 2,
            'proficiencies': ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
            'feat': ['All armor', 'shields', 'Darts', 'martial-weapons'],
            'savingThrow': ['Str', 'Con'],
            'hp': 10
        },
        {
            'id': '1',
            'name': 'Rogue',
            'proficiencies_choice': 4,
            'proficiencies': ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'],
            'feat': ['All armor', 'shields', 'simple-weapons', 'martial-weapons'],
            'savingThrow': ['Dex', 'Int'],
            'hp': 8
        },
        {
            'id': '2',
            'name': 'Wizard',
            'proficiencies_choice': 2,
            'proficiencies': ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'],
            'feat': ['Daggers', 'Quarterstaffs', 'Darts', 'Slings'],
            'savingThrow': ['Int', 'Wis'],
            'hp': 6
        }
    ],

    'skills': ['Acrobatics', 'Animal Handling', 'Arcana', 'Atheletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'],

}