//Misc Helpers
function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getKeyString(x, y) {
    return `${x}x${y}`;
}

(function () {

    let playerId;
    let playerRef;

    //When Authentication State is Changed
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        if (user) {
            // logged in!
            playerId = user.uid;
            playerRef = firebase.database().ref(`players/${playerId}`);

            playerRef.set({
                id: playerId,
                name: "playerName",
                direction: "right",
                color: "blue",
                x: 3,
                y: 3,
                coins: 0,
            })

        } else {
            // logged out!
        }
    })



    //Try to Sign In, Error if Unsuccessful and Print Error to Console.
    firebase.auth().signInAnonymously().catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
      });



})();