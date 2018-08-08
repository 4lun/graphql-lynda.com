class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
};

const friendDatabase = {};

export default { 
  getFriend: ({ id }) => new Friend(id, friendDatabase[id]),
  createFriend: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex")
    friendDatabase[id] = input;
    return new Friend(id, input);
  }
};