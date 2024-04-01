class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }

  updateUsername(newUsername) {
    this.username = newUsername;
    console.log(`Username updated to ${this.username}`);
  }

  updateEmail(newEmail) {
    if (User.validateEmail(newEmail)) {
      this.email = newEmail;
      console.log(`Email updated to ${this.email}`);
    } else {
      console.log('Invalid email format.');
    }
  }

  static validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static generateUser(username, email) {
    const id = Math.floor(Math.random() * 10000);
    if (!User.validateEmail(email)) {
      console.log('Invalid email format. User not created.');
      return null;
    }
    return new User(id, username, email);
  }
}

module.exports = User;
