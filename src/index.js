import './style.scss';
import { selectElem } from './utilities';

let hour_hand = selectElem('#hour_hand');
let minute_hand = selectElem('#minute_hand');
let second_hand = selectElem('#second_hand');

function getPMHour(hour) {
    return hour - 12;
}

function setHourAngle(hour, minute) {
    let perHourAngle = 360/12;
    let rotateAngle = (hour * perHourAngle) + ((minute / 60) *  perHourAngle) ;
    hour_hand.style.transform = `rotate(${rotateAngle + 90}deg) translateX(-36px)`;
}

function setMinuteAngel(minute) {
    let perMinuteAngle = 360/60;
    let rotateAngle = minute * perMinuteAngle ;
    minute_hand.style.transform = `rotate(${rotateAngle}deg) translateY(-48px)`;
}

function setSecondAngle(second) {
    let perSecondAngle = 360/60;
    let rotateAngle = second * perSecondAngle ;
    console.log('rotateAngle :', rotateAngle);
    second_hand.style.transform = `rotate(${rotateAngle + 180}deg) translateY(64px)`;
}

function tick() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    
    if(hour >= 12) hour = getPMHour(hour);
    
    setHourAngle(hour, minute);
    setMinuteAngel(minute);
    setSecondAngle(second);
    
    console.log(hour, minute, second)
}

setInterval(tick, 1000);