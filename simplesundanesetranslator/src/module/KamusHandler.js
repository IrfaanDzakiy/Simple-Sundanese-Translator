function handleIndo(){
    const pathIndo = '../../txt/indonesia.txt'

    const fs = require('fs')
    const txtIndo = fs.readFileSync(pathIndo, 'utf8')
    const kamusIndo = txtIndo.split('\r\n')

    var mapIndo = new Map()

    kamusIndo.forEach(element => {
        const entry = element.split(' = ')
        mapIndo.set(entry[0], entry[1])
    });

    return mapIndo
}

function handleSunda(){
    const pathSunda = '../../txt/sunda.txt'

    const fs = require('fs')
    const txtSunda = fs.readFileSync(pathSunda, 'utf8')
    const kamusSunda = txtSunda.split('\r\n')

    var mapSunda = new Map()
    kamusSunda.forEach(element => {
        const entry = element.split(' = ')
        mapSunda.set(entry[0], entry[1])
    });

    return mapSunda
}

module.exports = {handleIndo, handleSunda}
