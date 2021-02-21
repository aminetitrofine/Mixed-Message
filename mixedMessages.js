// In this project we will create a program that generate different messages every time we run the program

let lyrics = {
    rock : [
        'When I find myself in times of trouble, Mother Mary comes to me , Speaking words of wisdom, let it be,',
        'And then one day you find ten years have got behind you ,No one told you when to run, you missed the starting gun,',
        'These mist covered mountains ,Are a home now for me,',
        'Forever trusting who we are And nothing else matters,',
        'And be a simple kind of man , Oh be something you love and understand,'
    ],
    hipHop : [
        'Look into my eyes if you wanna know me ,Before you hypnotized, homey, what do you see?',
        'I\'m supposed to be the soldier who never blows his composure,',
        'All I know it\'s every time I think I hit my ceiling , I go higher than I\'ve ever  been,',
        'You only get one shot, do not miss your chance to blow This opportunity comes once in a lifetime,',
        'I look at the world from a different angle, people change even Satan used to be an angel,'
    ],
    pop : [
        'Baby, I don\'t need dollar bills to have fun tonight.',
        'I\'ll do it \'til the sun goes down and all through the night time.',
        'Sometimes it lasts in love, but sometimes it hurts instead.',
        'And if we should die tonight , Then we should all die together.'
    ]
}
function randomNumber(number){
    return Math.floor(Math.random()*number);
}
const message1 = lyrics.rock[randomNumber(lyrics.rock.length)];
const message2 = lyrics.hipHop[randomNumber(lyrics.hipHop.length)];
const message3 = lyrics.pop[randomNumber(lyrics.pop.length)];

// let's gather those verses to make a mixed song 
console.log(message1);
console.log(message2);
console.log(message3);






