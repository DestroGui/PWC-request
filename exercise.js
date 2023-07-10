let inputExerciseOne = 
let inputExerciseTwo =
let inputExerciseThree =
let inputExerciseFour =
let inputExerciseFive =    


// test 1)
function questOne(str) {
    let strComplete = '';
    const strSplitted = str.split(' ');
    let strLength = strSplitted.length;
    for (let i = strLength - 1; i >= 0; i--){
        strComplete = strComplete + ' ' + strSplitted[i];
    }
    return console.log(strComplete);
}
questOne(inputExerciseOne);

//----------------------------------------------------------------------------------

// test 2)
function questTwo(str) {
    var caracters = {}; //armazenar os caracteres já lidos
    var result = ''; //armazenar a resposta final
    for(let i = 0; i < str.length; i++){
        var caracterLower = str[i].toLowerCase() //transformando os caracteres em minuscula para comparalos
        if(caracterLower !== caracters[caracterLower]){ //vendo se o caracterLower não está dentro do caracters
            caracters[caracterLower] = caracterLower; //adicionando a nossa lista para comparação
            result = result + str[i]; //adicionando ao resultado
        }
    }
    return console.log(result);
}
questTwo(inputExerciseTwo);

//----------------------------------------------------------------------------------

// test 3)
function questThree(str) {
    for(let i = 0; i < str.length/2; i++){
        if(str[i] !== str[str.length-1-i]){
            return console.log(false)
        }
        return console.log(true)
        console.log("STR.LENGTH : ", str[str.length - 1-i]);
        console.log("STRI[", i ,"] : ", str[i]); 

    }
}
questThree(inputExerciseThree);

//----------------------------------------------------------------------------------

// test 4)
function questFour(str) {
    let result = ''
    var sentenceSplitted = str.split('');
    sentenceSplitted[0] = sentenceSplitted[0].toUpperCase()
    for(let i = 0; i < sentenceSplitted.length; i++){
        if(sentenceSplitted[i] === ' ' && (sentenceSplitted[i-1] == '?' || sentenceSplitted[i-1] == '.' || sentenceSplitted[i-1] == '!')){
            sentenceSplitted[i+1] = sentenceSplitted[i+1].toUpperCase();
        }
        result = result + sentenceSplitted[i]
    }
    return console.log(result)
}
questFour(inputExerciseFour);

//----------------------------------------------------------------------------------

// test 5)
function questFive(str) {
    let letterByLetter = str.split('');
    var caracters = {};
    for(let i = 0; i < str.length; i++){
        if(letterByLetter[i] !== caracters[str[i]]){
            caracters[letterByLetter[i]] = (caracters[letterByLetter[i]] || 0) + 1;
        }
    }
    var oddsCounter = 0;
    var keys = Object.keys(caracters);
    for (const item of keys) {
        if (caracters[item] % 2 == 1){
            oddsCounter++;
        }
    }
    if(oddsCounter > 1){
        return console.log(false)
    }
    return console.log(true)
}
questFive(inputExerciseFive);