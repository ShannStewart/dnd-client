export default{
    'races':[
        {
            'name': 'human',
            'language': ['common'],
            'feats': [],
            'ability': [{'name': 'STR', 'score': 1}, {'name': 'DEX', 'score': 1}, {'name': 'CON', 'score': 1}, {'name': 'INT', 'score': 1}, {'name': 'WIS', 'score': 1}, {'name': 'CHA', 'score': 1}]
        },
        {
            'name': 'Dwarf',
            'language': ['common', 'Dwarvish'],
            'feats': ['Battleaxe Proficiency', 'Handaxe Proficiency', 'Lighthammer Proficiency', 'Warhammer Proficiency', 'Smith Tools Proficiency', 'Brewers Supplies Proficiency', "Mason's Tools Proficiency", 'Darkvision', 'Dwarven-Resilence'],
            'ability': [{'name': 'CON', 'score': 2}, {'name': 'WIS', 'score': 1}]
        },
        {
            'name': 'Elf',
            'language': ['common', 'Elvish'],
            'feats': ['Skilled in Perception', 'Darkvision'],
            'ability': [{'name': 'DEX', 'score': 2}, {'name': 'INT', 'score': 1}]
        },
    ]
}