
export const findUser = (users=[], userId) =>
users.find(user => user.id === userId)

export const findCharacter = (characters=[], charaId) =>
characters.find(character => character.id === charaId)

export const getCharasForUser = (characters=[], userId) => (
    (!userId)
      ? characters
      : characters.filter(character => character.userId === userId)
  )

