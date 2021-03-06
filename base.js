"use strict";
// IMPORTS //////////////////
import * as FUNCS from "./usefulFuncs.js";
import * as VARS from './variables.js';

// MAIN /////////////////////
VARS.pushButton.addEventListener('click', function(){
    FUNCS.hideButton();
    FUNCS.clearPar();
    FUNCS.showCategories(123, 'search', 'advertising');
    FUNCS.updatePar(VARS.maxPrice);
    for (let letter of VARS.myForOfString){
        FUNCS.updatePar(letter);
    }
    console.log(0o10); // Octal number
    console.log(0b10); // Binary number
    FUNCS.clearPar();
    FUNCS.updatePar(`The best chocolate is ${VARS.milkChoc}, but ${VARS.whiteChoc} is also good.  And ${VARS.darkChoc} will do in a pinch.`);
    VARS.myTask.showId();
    VARS.myProject.saySomething();
    FUNCS.updatePar("VARS.EVENT_SYMBOL is of type: " + typeof VARS.EVENT_SYMBOL);
    Object.assign(VARS.target, VARS.targetVar1, VARS.targetVar2);
    FUNCS.updatePar(VARS.target.var1 + " " + VARS.target.var2);
    FUNCS.updatePar("\u{1f30a}\u{1f3c4}\u{1f40b}") // Wave, Surfer, Whale emojis
    VARS.numberPrompt = FUNCS.promptReturn("Enter an integer, fool!", "#");
    FUNCS.updatePar(VARS.myGenerator.next());
    for (let i = VARS.myGenerator.next(VARS.numberPrompt).value; i <= 100; i = VARS.myGenerator.next().value){
        VARS.genArray.push(i);
    }
    console.log(VARS.myGenerator.next().value);
    FUNCS.clearPar();
    FUNCS.updatePar(VARS.genArray);
    FUNCS.clearPar();
    FUNCS.asyncThen("Yay!", "Aww!");
});

VARS.raceButton.addEventListener("click",function(){
    FUNCS.hideButton();
    FUNCS.clearPar();
    FUNCS.letsRace(VARS.numberOfRaces);// this generates promise1 and promise2 but uses the same value every time.  So if they win the first one, they win them all
});

VARS.button3.addEventListener("click",function(){
    FUNCS.hideButton();
    FUNCS.clearPar();
    FUNCS.updatePar(VARS.myGenerator.next());
    FUNCS.fillBufferArray(VARS.bufferArray);
    FUNCS.updatePar(VARS.bufferArray.length);
    FUNCS.updatePar(VARS.bufferArray);
    FUNCS.clearPar();
    FUNCS.updatePar(FUNCS.generateNumber(FUNCS.promptReturn("Enter a max value to check (once the generator passes this, it will return):","#")));
});

VARS.button4.addEventListener("click",function(){
    FUNCS.hideButton();
    FUNCS.clearPar();
});

// Rapid ES6 > Arrays and Collections > Intro