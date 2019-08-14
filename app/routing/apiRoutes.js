// Dependencies
var path = require("path");

import friends from "../data/friends"

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("something is happening")
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });

    app.post("/api/friends", function (req, res) {
        console.log("posting time")

        var bestMatch = {
            name: "",
            photo: "",
            minDifference: Infinity
        }

        var userdatascores = req.body.scores

        var totalDifference = 0

        for (i = 0; i < friends.length; i++) {
            var currentFriend = friends[i]
            var friendScoreArr = friends[i].scores

            for (j = 0; j < friendScoreArr.length; j++) {
                var currentScore = friendScoreArr[j]
                var currentUserScore = userdatascores[j]
                totalDifference += Math.abs(parseInt(currentScore) - parseInt(currentUserScore))
            }

            // take difference
            if (totalDifference <= bestMatch.minDifference) {
                bestMatch.minDifference = totalDifference
                bestMatch.name = currentfriend.name
                bestMatch.photo = currentfriend.photo
            }
        }

        friends.push(userData)
        res.json.bestMatch
    });

}


// ideas for below, for loop, or .map, 

// Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.