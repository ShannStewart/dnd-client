export default{
    'races':[
        {
            'id': '0',
            'name': 'Human',
            'language': ['common'],
            'feats': [],
            'ability': [{'name': 'STR', 'score': 1}, {'name': 'DEX', 'score': 1}, {'name': 'CON', 'score': 1}, {'name': 'INT', 'score': 1}, {'name': 'WIS', 'score': 1}, {'name': 'CHA', 'score': 1}]
        },
        {
            'id': '1',
            'name': 'Dwarf',
            'language': ['common', 'Dwarvish'],
            'feats': ['Battleaxe Proficiency', 'Handaxe Proficiency', 'Lighthammer Proficiency', 'Warhammer Proficiency', 'Smith Tools Proficiency', 'Brewers Supplies Proficiency', "Mason's Tools Proficiency", 'Darkvision', 'Dwarven-Resilence'],
            'ability': [{'name': 'CON', 'score': 2}, {'name': 'WIS', 'score': 1}]
        },
        {
            'id': '2',
            'name': 'Elf',
            'language': ['common', 'Elvish'],
            'feats': ['Skilled in Perception', 'Darkvision'],
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
            'saving-thorw': ['Str', 'Con']
        },
        {
            'id': '1',
            'name': 'Rogue',
            'proficiencies_choice': 4,
            'proficiencies': ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'],
            'feat': ['All armor', 'shields', 'simple-weapons', 'martial-weapons'],
            'saving-thorw': ['Dex', 'Int']
        },
        {
            'id': '2',
            'name': 'Wizard',
            'proficiencies_choice': 2,
            'proficiencies': ['Arcana', 'History', 'Insight', 'Investigaiton', 'Medicine', 'Religion'],
            'feat': ['Daggers', 'Quarterstaffs', 'Darts', 'Slings'],
            'saving-thorw': ['Int', 'Wis']
        }
    ],

    'skills': ['Acrobatics', 'Animal Handling', 'Arcana', 'Atheletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'],

}