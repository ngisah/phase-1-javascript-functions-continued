function saturdayFun(activity = "roller-skate"){

    return `This Saturday, I want to ${activity}!`;

}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

const mondayWork = function(activity = "go to the office"){

    return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair= "*"){

    return function(adjective = "special"){

        return `You are ${flair}${adjective}${flair}!`

    }
}
console.log(wrapAdjective()());
console.log(wrapAdjective("||")("a dedicated programmer"));