// Gets data from friend.js
var friends = require("../data/friends");

// Routing
module.exports = function(app) {
  // API GET Requests
  // When a user visits a link, they are shown a JSON of the data in the friends.js file which holds all the existing users
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // When a user submits form data (a JSON object), it is pushed to the friendArray
  // Users are also compared to one another to check for compatibility
  app.post("/api/friends", function(req, res) {
    var currentUser = JSON.parse(req.body.data);
    var smallestDifference = 100;
    var bestMatch;

    //Goes through each existing user and compares their scores to the current user's scores
    //The user with the least difference between their scores and the current's user's scores will be matched with the current user
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var n = 0; n < friends[i].scores.length; n++) {
        var difference = parseInt(currentUser.scores[n]) - parseInt(friends[i].scores[n]);
        totalDifference += Math.abs(difference);
        
      };

      if(totalDifference < smallestDifference) {
        smallestDifference = totalDifference;
        bestMatch = friends[i];
      };
    };

    // Server responds to requests by creating a new user in friends file and returning the best match of the current user
    friends.push(currentUser);
    console.log("New Friend:")
    console.log(currentUser);
    res.json(bestMatch);
  
  });
};