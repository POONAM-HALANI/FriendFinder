var Friend = function(name, photo) {
  this.name = name; //User's name
  this.photo = photo; //User's photo
  this.scores = []; //Array that tracks user's answers
};

//Stores submitted data
var friendList = [
  {
    name: "John Smith",
    photo:
      "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Jane Doe",
    photo:
      "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-6.jpg",
    scores: [4, 3, 2, 4, 1, 1, 2, 3, 4, 1]
  },
  {
    name: "Debbie Donner",
    photo:
      "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg",
    scores: [1, 2, 2, 1, 2, 1, 2, 2, 1, 1]
  },
  {
    name: "Igor Beaves",
    photo:
      "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-12.jpg",
    scores: [4, 4, 5, 5, 5, 4, 4, 4, 5, 5]
  }
];

module.exports = {
  Friend,
  friendList
};
