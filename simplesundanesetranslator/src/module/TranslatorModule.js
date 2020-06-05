var kamusHandler = require('./KamusHandler.js')
const stopWord = ["teh", "mah"]

function translateBahasa(sentence, insun){
    const mapIndo = kamusHandler.handleIndo()
    const mapSunda = kamusHandler.handleSunda()
    var s = sentence

    let sym
    if (/\W/.test(s[s.length-1])){
        sym = s[s.length-1]
        s = s.substring(0, s.length-1)
    }

    s = " " + s + " "
    if (insun){
        for (var [key1, value1] of mapIndo){
            if (regExCheck(s, " " + key1 + " ")){
                s = s.replace(" " + key1 + " ", " " + value1 + " ")
            }
        }
        s = addStopWord(s)
    }
    else{
        s = removeStopWord(s)
        for (var [key2, value2] of mapSunda){
            if (regExCheck(s, " " + key2 + " ")){
                s = s.replace(" " + key2 + " ", " " + value2 + " ")
            }
        }
    }

    return sym ? s.trim() + sym : s.trim()
}

function regExCheck(sentence, keyword){
    var patt = new RegExp(keyword, "i")
    return patt.test(sentence)
}

function removeStopWord(sentence){
    var s = sentence
    for(var stop of stopWord){
        s = s.replace(" " + stop + " ", " " )
    }
    return s
}

function addStopWord(sentence){
    var s = sentence
    const subjects = ["aing", "abdi", "urang", "sia", "maneh", "anjeun"]
    for(var sub of subjects){
        s = s.replace(" " + sub + " ", " " + sub + " teh ")
    }
    return s
}

module.exports = {translateBahasa}