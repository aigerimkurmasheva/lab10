let lab1=[5,5,0,0,5,0,10];
let sum1=0;
for (let i=0; i<lab1.length; i++) {
	sum1+= lab1[i];
}

let lab2=[4,5,5,2,4,5,10];
let sum2=0;
for (let i=0; i<lab2.length; i++) {
	sum2+= lab2[i];
}

let lab3=[5,0,10,10];
let sum3=0;
for (let i=0; i<lab3.length; i++) {
	sum3+= lab3[i];
}

let lab4_5=[10,5,1,5,5,5,6,10,10,10,0];
let sum4_5=0;
for (let i=0; i<lab4_5.length; i++) {
	sum4_5+= lab4_5[i];
}
let lab6=[0];
let sum6=0;
for (let i=0; i<lab6.length; i++) {
	sum6+= lab6[i];
}

let lab8=[5,1,1,10,10];
let sum8=0;
for (let i=0; i<lab8.length; i++) {
	sum8+= lab8[i];
}

let quiz1="34"

function get_sum(lab){
final_sum=0
for(let i=0; i<lab.length; i=i+1) {
	final_sum+=lab(i);
}
return final_sum
}

sum1=get_sum(lab1)
sum2=get_sum(lab2)
sum3=get_sum(lab3)
sum4_5=get_sum(lab4_5)
sum6=get_sum(lab6)
sum8=get_sum(lab8)

function main(lab1, lab2, lab3, lab4_5, lab6, lab8) {
	sum1=get_sum(lab1)
	sum2=get_sum(lab2)
	sum3=get_sum(lab3)
	sum4_5=get_sum(lab4_5)
	sum6=get_sum(lab6)
	sum8=get_sum(lab8)
	total_score=((final_sum/240)*0.6+(quiz1/40)*0.4)*100
results={
lab1:[5,5,0,0,5,0,10],
lab2:[4,5,5,2,4,5,10],
lab3:[5,0,10,10],
lab4_5:[10,5,1,5,5,5,6,10,10,10,0],
lab6:[0],
lab8:[5,1,1,10,10],
quiz1: 34,
final_sum:lab(i),
total_score:((final_sum/240)*0.6+(quiz1/40)*0.4)*100,
}
return obj;
}

obj_main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1, final_sum, total_score)
console.log(obj)
