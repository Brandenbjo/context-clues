var header = document.createElement('div');

var WEAPON_NAME = ["dick", "balls", "pistol"]
var FRIEND_NAME = ["wc", "rob", "jay", "cosmo", "nikko", "branden"]
var LOCATION_NAME = ["here", "there", "anywhere"]

for (var i = 1; i <= 100; i++) {

    var h3 = document.createElement("h3")
    var headertext = document.createTextNode('Accusation ' + i);
    h3.appendChild(headertext);
    header.appendChild(h3);
    h3.className = 'message'

    var turd = function jio() {


        var myFunc = function something() {
            var randomWeapon = WEAPON_NAME[Math.floor(Math.random() * WEAPON_NAME.length)]

            var randomFriend = FRIEND_NAME[Math.floor(Math.random() * FRIEND_NAME.length)]
            var randomLocal = LOCATION_NAME[Math.floor(Math.random() * LOCATION_NAME.length)]

            alert(`Accusation ${i}  I accuse ${randomFriend}, with the ${randomWeapon} in the ${randomLocal}!!`)

        }
       return myFunc()
    }
    h3.addEventListener('click', function () {

        turd()
        // var test = function notTest(message) {
        //     var randomWeapon = WEAPON_NAME[Math.floor(Math.random() * WEAPON_NAME.length)]
        //     var randomFriend = FRIEND_NAME[Math.floor(Math.random() * FRIEND_NAME.length)]
        //     var randomLocal = LOCATION_NAME[Math.floor(Math.random() * LOCATION_NAME.length)]

        //     alert(message)
        // };
        // test(`Accusation  I accuse ${randomFriend}, with the ${randomWeapon} in the ${randomLocal}!!`)
        // console.log(i)
    })

}



9 % 2



document.body.appendChild(header)


