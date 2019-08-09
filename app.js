document.querySelector('#logout').addEventListener('click', function(){
    if(confirm('are you sure you want to log out') == true)
    logoutlink.href = 'index.html';
    else
    logoutlink.href = '#';
});
let opt1 = document.querySelector('.a');
let opt2 = document.querySelector('.b');
let opt3 = document.querySelector('.c');
let opt4 = document.querySelector('.d');
let opt5 = document.querySelector('.e');
let opt6 = document.querySelector('.f');
let opt7 = document.querySelector('.g');
let opt8 = document.querySelector('.h');
let opt9 = document.querySelector('.i');
let opt10 = document.querySelector('.j');
let opt11 = document.querySelector('.k');
let opt12 = document.querySelector('.l');
let opt13 = document.querySelector('.m');
let opt14 = document.querySelector('.n');
let opt15 = document.querySelector('.o');


let question1 = document.querySelector('#introp');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');

let question2 = document.querySelector('.introp');
let option4 = document.querySelector('#option4');
let option5 = document.querySelector('#option5');
let option6 = document.querySelector('#option6');



let question3 = document.querySelector('.intro1');
let option7 = document.querySelector('#option7');
let option8 = document.querySelector('#option8');
let option9 = document.querySelector('#option9');


let question4 = document.querySelector('.intro2');
let option10 = document.querySelector('#option10');
let option11 = document.querySelector('#option11');
let option12 = document.querySelector('#option12');


let question5 = document.querySelector('.intro3');
let option13 = document.querySelector('#option13');
let option14 = document.querySelector('#option14');
let option15 = document.querySelector('#option15');


let damicode = Math.floor(Math.random() * (10-5)+5);
let damicode1 = Math.floor(Math.random() * (10-5)+5);
let damicode2 = Math.floor(Math.random() * (10-5)+5);
let damicode3 = Math.floor(Math.random() * (10-5)+5);
let damicode4 = Math.floor(Math.random() * (10-5)+5);
let courses = [
        ['what is the full meaning of \'JSON\' ','javascript object notation', 'javascript notation model', 'javascript node notation model', 'A'],
        ['What is the Full meaning of \"HTML\" ', 'Hypertext Markup Language', 'Hyberbola toy language', 'Hyper Markup Language', 'C'],
        ['What is the full meaning of \"Css\" ', 'Cholera Style Sheet', 'Cascading Style Sheet', 'Kolawole Style Sheet', 'B'],
        ['What is the full meaning of \"JS\" ', 'Javascript', 'Jango', 'Jolayemi Aremu', 'A'],
        ['What is the name of your School ', 'KWASU', 'Cancel', 'Shit Hole', 'A'],
        ['What is the full meaning of \"PHP\" ', 'Personal Home page', 'Hypertext Preprocessor', 'Pause Hole People', 'B'],
        ['What is the full meaning of \"KWASU\" ', 'Kwara State University', 'Kolawole State University', 'Khadija State University', 'A'],
        ['What is the Name of Kwasu Vice  Chancellor ', 'Abdul-Rahman Nallah', 'Abdul-Rasheed Na-Allah', 'Abolade kunle', 'B'],
        ['What is the Name of my  best Lecturer ', 'Dr. Mrs Babatunde', 'Mrs. Shakirat', 'Dr. Mrs Ajao', 'A'],
        ['What is the name of the Guy that build Me ', 'Damilare', 'waliyillahi', 'fawaz', 'A']
    ];

     
    let question = courses[damicode][0]
    question1.textContent = question;
    question2.textContent = courses[damicode1][0];
    question3.textContent = courses[damicode2][0];
    question4.textContent = courses[damicode3][0];
    question5.textContent = courses[damicode4][0];
    option1.textContent = courses[damicode][1];
    option2.textContent = courses[damicode][2];
    option3.textContent = courses[damicode][3];
    option4.textContent = courses[damicode1][1];
    option5.textContent = courses[damicode1][2];
    option6.textContent = courses[damicode1][3];
    option7.textContent = courses[damicode2][1];
    option8.textContent = courses[damicode2][2];
    option9.textContent = courses[damicode2][3];
    option10.textContent = courses[damicode3][1];
    option11.textContent = courses[damicode3][2];
    option12.textContent = courses[damicode3][3];
    option13.textContent = courses[damicode4][1];
    option14.textContent = courses[damicode4][2];
    option15.textContent = courses[damicode4][3];
    let score = 0;
    let result = document.querySelector('#result');
    let questiontage = document.querySelector('#intro');

let koko = document.querySelector('#btn2');
koko.addEventListener('click', function(){
    if(confirm('are you sure you want to Submit') == true){
        let finalresult;
        let heading = document.querySelector('.heading');
 let answer = courses[damicode][4];
 let answer1 = courses[damicode1][4];
 let answer2 = courses[damicode2][4];
 let answer3 = courses[damicode3][4];
 let answer4 = courses[damicode4][4];
 finalresult1 = opt1.checked == true && opt2.checked == true && opt3.checked == true ? score = 0 : opt1.checked == true && opt2.checked == true ? score = 0 : opt1.checked == true && opt3.checked == true ? score = 0  :  opt2.checked == true && opt3.checked == true ? score = 0: opt1.checked == true && answer == 'A' ? score = 1 : opt2.checked == true && answer == 'B' ? score = 1 : opt3.checked == true && answer == 'C' ? score = 1 : score = 0;
 finalresult2 = opt4.checked == true && opt5.checked == true && opt6.checked == true ? score = 0 : opt6.checked == true && opt5.checked == true ? score = 0  : opt6.checked == true && opt4.checked == true ? score = 0 :  opt5.checked == true && opt4.checked == true ? score = 0  : opt4.checked == true && answer1 == 'A' ? score = 1 : opt5.checked == true && answer1 == 'B' ? score = 1 : opt6.checked == true && answer1 == 'C' ? score = 1 : score = 0;
 finalresult3 = opt7.checked == true && opt8.checked == true && opt9.checked == true ? score = 0 : opt9.checked == true && opt2.checked == true ? score = 0 : opt8.checked == true && opt8.checked == true ? score = 0  :  opt9.checked == true && opt7.checked == true ? score = 0 :opt7.checked == true && answer2 == 'A' ? score = 1 : opt8.checked == true && answer2 == 'B' ? score = 1 : opt9.checked == true && answer2 == 'C' ? score = 1 : score = 0;
 finalresult4 = opt10.checked == true && opt11.checked == true && opt12.checked == true ? score = 0 : opt11.checked == true && opt12.checked == true ? score = 0  : opt11.checked == true && opt13.checked == true ? score = 0 :  opt12.checked == true && opt13.checked == true ? score = 0  :  opt10.checked == true && answer3 == 'A' ? score = 1 : opt11.checked == true && answer3 == 'B' ? score = 1 : opt12.checked == true && answer3 == 'C' ? score = 1 : score = 0;
 finalresult5 = opt13.checked == true && opt14.checked == true && opt15.checked == true ? score = 0 : opt13.checked == true && opt15.checked == true ? score = 0  : opt13.checked == true && opt14.checked == true ? score = 0 :  opt14.checked == true && opt15.checked == true ? score = 0 : opt13.checked == true && answer4 == 'A' ? score = 1 : opt14.checked == true && answer4 == 'B' ? score = 1 : opt15.checked == true && answer4 == 'C' ? score = 1 : score = 0;
let mygrade =   finalresult1 + finalresult2 + finalresult3 + finalresult4 + finalresult5;
let heading4 = document.querySelector('.heading4');
heading4.style.display = 'none';
heading.style.display = 'none';
let word = document.querySelector('#word');
let grade = document.querySelector('#grade');
const message2 = `Your Score is ${mygrade}`
function message3() {
if(mygrade === 1)
    return 'E'
else if(mygrade === 2)
        return 'D'
else if(mygrade === 3)
        return 'C'
else if(mygrade === 4)
        return 'B'
else if(mygrade === 5)
        return 'A';
else 
    return 'F'
}


let grading = document.querySelector('#grading');

const message4 = 
` Your Grade is ${message3()}`
const message = 
`Dear user we are so glad to tell you that 
 you did a very great Job for trying this exercise out`
let damilare = document.querySelector('.damilare');
damilare.style.display = 'block';

word.textContent = message;
grade.textContent = message2;
grading.textContent = message4;
}
else 
return false

});

