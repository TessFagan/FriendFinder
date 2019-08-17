// Dependencies
var path = require("path");
var friends = require("../data/friends").people;


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("something is happening")
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });

    app.post("/api/friends", function (req, res) {
        console.log(friends)

        var data = {
            name: "",
            photo: "",
            minDifference: 1000
        }

        var userdata = req.body.scores

        var totalDifference = 0

        for (i = 0; i < friends.length; i++) {
            console.log("for loop start at i level")
            var currentFriend = friends[i]
            var currentFriendScoreArr = currentFriend.scores
            console.log(currentFriendScoreArr)

            for (j = 0; j < currentFriendScoreArr.length; j++) {
                var currentFriendScore = currentFriendScoreArr[j]
                var currentUserScore = userdata[j]
                var difference = Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore));
                console.log("difference" + difference)

                totalDifference = totalDifference + difference

                if (totalDifference < data.minDifference) {
                    data.minDifference = totalDifference;
                    data.name = currentFriend.name;
                    data.photo = currentFriend.photo;
                    console.log("data has been changed")
                }
                totalDifference = 0
            }

        }
        console.log("for loop finished, answer found")
        res.json((data));

    })

}



