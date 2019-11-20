var friends = require("../data/friends");  

var friendList = friends.friendList; 

var APIRoutes = function (app) {

    app.get("/api/friends", function (request, response) {
        return response.json(friendList);
    });

    app.post("/api/friend", function (request, response) {
        const friend = request.body;

        let matchFriend; 
        let leastDifference = 40;         

        for (person of friendList) {
            let totalDifference = 0; 

            for (let i = 0; i < person.scores.length; i++) {
                totalDifference += Math.abs(friend.scores[i] - person.scores[i]);
            }

            if (totalDifference < leastDifference) {
                matchFriend = person;
                leastDifference = totalDifference;
            }
        }

        friendList.push(friend);

        if (matchFriend) response.status(200).json(matchFriend);
        else response.status(200).end(); 
    });
}

module.exports = APIRoutes;