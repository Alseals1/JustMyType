$(document).ready(function() {

    let upperKeys = ("#keyboard-upper-container");
    let lowerKeys = ("#keyboard-lower-container");

    $(upperKeys).hide()

    $(document).keydown(function(e) {
        if (e.which === 16) {
            $(upperKeys).show()
            $(lowerKeys).hide()
                // console.log("It worked")
        }

    })
    $(document).keyup(function(e) {
        let asciiCode = e.key.charCodeAt(0);

        if (e.which == 16) {
            $(upperKeys).hide()
            $(lowerKeys).show()
                // console.log("It worked")
        }
        $(`#${asciiCode}`).css("background-color", "blue");
        $(`#${e.keyCode}`).css("background-color", "blue")
    })

    $(document).keypress(function(e) {
        let asciiCode = e.key.charCodeAt(0);
        $(`#${e.keyCode}`).css("background-color", "pink");
        $(`#${asciiCode}`).css("background-color", "pink")
    })
    let sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate"
    ]

    let currentLetter = 0;
    $('#sentence').append(sentences[currentLetter])

})