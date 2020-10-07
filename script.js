function cipher(str, spaces) {
    //wrap
    if (spaces < 0) {
        return cipher(str, spaces + 26)
    }
    let newString = "";

    for (let i = 0; i < str.length; i++) { 
        let c = str[i];

        if (c.match(/[a-z]/ig)) {
            let code = str.charCodeAt(i);
            //uppercase check
            if(code >= 65 && code <= 90 ) {
                c = String.fromCharCode(((code - 65 + spaces) % 26) + 65);
            }
            //lowercase check
            else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + spaces) % 26) + 97);
            }
        }
        newString += c    
    }
    return newString
}
console.log(cipher('Hello World!', 2));
