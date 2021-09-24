var currentDay = $('#currentDay');
var saveButton = $('.btn');

//show present day 
function displayTime() {
    var time = moment().format('dddd, MMM Do YYYY');
    currentDay.html(time);
}
$(document).ready(function () {
    displayTime();
})
//set time of the day 
let currentHour = new Date().getHours();
//parseInt(moment().format('H')); another way to set currentHour
//change color at past, present, future using if method
function colorChange() {
    if (currentHour > 9) {
        $('#comment9').addClass('past');
    } else if (currentHour >= 9 && currentHour < 10) {
        $('#comment9').addClass('present');
    } else if (currentHour < 9) {
        $('#comment9').addClass('future');
    }
    if (currentHour > 10) {
        $('#comment10').addClass('past');
    } else if (currentHour >= 10 && currentHour < 11) {
        $('#comment10').addClass('present');
    } else if (currentHour < 10) {
        $('#comment10').addClass('future');
    }
    if (currentHour > 11) {
        $('#comment11').addClass('past');
    } else if (currentHour >= 11 && currentHour < 12) {
        $('#comment11').addClass('present');
    } else if (currentHour < 11) {
        $('#comment11').addClass('future');
    }
    if (currentHour > 12) {
        $('#comment12').addClass('past');
    } else if (currentHour >= 12 && currentHour < 13) {
        $('#comment12').addClass('present');
    } else if (currentHour < 12) {
        $('#comment12').addClass('future');
    }
    if (currentHour > 13) {
        $('#comment13').addClass('past');
    } else if (currentHour >= 13 && currentHour < 14) {
        $('#comment13').addClass('present');
    } else if (currentHour < 13) {
        $('#comment13').addClass('future');
    }
    if (currentHour > 14) {
        $('#comment14').addClass('past');
    } else if (currentHour >= 14 && currentHour < 15) {
        $('#comment14').addClass('present');
    } else if (currentHour < 14) {
        $('#comment14').addClass('future');
    }
    if (currentHour > 15) {
        $('#comment15').addClass('past');
    } else if (currentHour >= 15 && currentHour < 16) {
        $('#comment15').addClass('present');
    } else if (currentHour < 15) {
        $('#comment15').addClass('future');
    }
    if (currentHour > 16) {
        $('#comment16').addClass('past');
    } else if (currentHour >= 16 && currentHour < 17) {
        $('#comment16').addClass('present');
    } else if (currentHour < 16) {
        $('#comment16').addClass('future');
    }
    if (currentHour > 17) {
        $('#comment17').addClass('past');
    } else if (currentHour >= 17 && currentHour < 18) {
        $('#comment17').addClass('present');
    } else if (currentHour < 17) {
        $('#comment17').addClass('future');
    }
};
colorChange();
//save the schedule text into local storage
// click button the the schedule will be save using jQuery
//9AM comment
var btn1 = document.querySelector('#save1');
var saveCm1 = document.querySelector('#comment9');
var textArea = document.querySelector('#save-text');
function savingPg1() {
    localStorage.setItem('content1', saveCm1.value);
    textArea.textContent = 'You have save an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
//savingPg1 will run after click the saving button
btn1.addEventListener('click', savingPg1)
//keep the comment after refresh the page
saveCm1.value = localStorage.getItem('content1');

//10AM comment
var btn2 = document.querySelector('#save2');
var saveCm2 = document.querySelector('#comment10');
function savingPg2() {
    localStorage.setItem('content2', saveCm2.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn2.addEventListener('click', savingPg2)
saveCm2.value = localStorage.getItem('content2');

//11AM  comment
var btn3 = document.querySelector('#save3');
var saveCm3 = document.querySelector('#comment11');
function savingPg3() {
    localStorage.setItem('content3', saveCm3.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn3.addEventListener('click', savingPg3)
saveCm3.value = localStorage.getItem('content3');

//12PM comment
var btn4 = document.querySelector('#save4');
var saveCm4 = document.querySelector('#comment12');
function savingPg4() {
    localStorage.setItem('content4', saveCm4.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn4.addEventListener('click', savingPg4)
saveCm4.value = localStorage.getItem('content4');

//1PM comment
var btn5 = document.querySelector('#save5');
var saveCm5 = document.querySelector('#comment13');
function savingPg5() {
    localStorage.setItem('content5', saveCm5.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn5.addEventListener('click', savingPg5)
saveCm5.value = localStorage.getItem('content5');

//2PM comment
var btn6 = document.querySelector('#save6');
var saveCm6 = document.querySelector('#comment14');
function savingPg6() {
    localStorage.setItem('content6', saveCm6.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn6.addEventListener('click', savingPg6)
saveCm6.value = localStorage.getItem('content6');

//3PM comment
var btn7 = document.querySelector('#save7');
var saveCm7 = document.querySelector('#comment15');
function savingPg7() {
    localStorage.setItem('content7', saveCm7.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn7.addEventListener('click', savingPg7)
saveCm7.value = localStorage.getItem('content7');

//4PM comment
var btn8 = document.querySelector('#save8');
var saveCm8 = document.querySelector('#comment16');
function savingPg8() {
    localStorage.setItem('content8', saveCm8.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn8.addEventListener('click', savingPg8)
saveCm8.value = localStorage.getItem('content8');

//5PM comment
var btn9 = document.querySelector('#save9');
var saveCm9 = document.querySelector('#comment17');
function savingPg9() {
    localStorage.setItem('content9', saveCm9.value);
    textArea.textContent = 'You have saved an event!!!';
    setTimeout(function () {
        textArea.textContent = '';
    }, 1000);
};
btn9.addEventListener('click', savingPg9)
saveCm9.value = localStorage.getItem('content9');
