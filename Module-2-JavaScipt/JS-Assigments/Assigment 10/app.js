//********************Chapter 31-34: ********************//

//---------------------Q1
//CLASS TASK
var ramzan2026 = new Date("2026-03-26");
var currentDate = new Date();
var Diffrence = ramzan2026 - currentDate;

var diffMonth = Math.floor(Diffrence / ((1000 * 60 * 60 * 24 )/ 30));
var diffDays = Math.floor(Diffrence / (1000 * 60 * 60 * 24));
var diffHours = Math.floor((Diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.write(`<h2>2026 ka Ramzan me abhi  ${diffMonth} mahinaa, ${diffDays} din, aurr itnaa  ${diffHours} ghantaiyein rehtee  hi.</h2>`)
