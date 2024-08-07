function nato(s) {
    let h =  {
        "A": "Alfa",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "Xray",
        "Y": "Yankee", "Z": "Zulu", "," : ",", "." : ".", "!" : "!", "?" : "?"
    }
    let result = [...s.toUpperCase()].map(x => h[x]).join(' ')

    result=result.replace(/\s{2,}/g, ' ')
    return result
}

console.log(nato("If you can read"))
