document.querySelector('#logout').addEventListener('click', function(){
    if(confirm('are you sure you want to log out') == true)
    logoutlink.href = 'index.html';
    else
    logoutlink.href = '#';
});
let opt1 = document.querySelector('.a');
let opt2 = document.querySelector('.b');
let opt3 = document.querySelector('.c');
let question1 = document.querySelector('#introp');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let damicode = Math.floor(Math.random() * (10-5)+5);
let courses = [
        ['what is the full meaning of \'HTML\' ',
        'rasheed', 'damicode', 'damilare'
        ],
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

    let answer = courses[damicode][4];
    let question = courses[damicode][0]
    question1.textContent = question;
    option1.textContent = courses[damicode][1];
    option2.textContent = courses[damicode][2];
    option3.textContent = courses[damicode][3];
    let score = 0;
    
    let pagenumber = document.querySelector('#wole');
let koko = document.querySelector('#btn2');
koko.addEventListener('click',caculate);


function caculate(){
result.textContent = opt1.checked == true && answer == 'A' ? score +=1 : opt2.checked === true && answer == 'B' ? score +=1 : opt3.checked === true && answer == 'C' ? score +=1 : score +=0;
}




// if(pagenumber.textContent == '1'){
    //     console.log(opt1.checked == true && answer == 'A' ? score +=1 : opt2.checked === true && answer == 'B' ? score +=1 : opt3.checked === true && answer == 'C' ? score +=1 : score +=0);
    //  }
    //  else if(pagenumber.textContent == '2'){
    //     console.log(opt1.checked == true && answer == 'A' ? score +=1 : opt2.checked === true && answer == 'B' ? score +=1 : opt3.checked === true && answer == 'C' ? score +=1 : score +=0);    }
    //  else if(pagenumber.textContent == '3'){
    //     console.log(opt1.checked == true && answer == 'A' ? score +=1 : opt2.checked === true && answer == 'B' ? score +=1 : opt3.checked === true && answer == 'C' ? score +=1 : score +=0);     }
    //  else if(pagenumber.textContent == '4'){
    //     console.log(opt1.checked == true && answer == 'A' ? score +=1 : opt2.checked === true && answer == 'B' ? score +=1 : opt3.checked === true && answer == 'C' ? score +=1 : score +=0);
    //  }
    //  else if(pagenumber.textContent == '5'){
    //     console.log(opt1.checked == true && answer == 'A' ? score +=1 : opt2.checked === true && answer == 'B' ? score +=1 : opt3.checked === true && answer == 'C' ? score +=1 : score +=0);     
    //  }
    //  else 
    //  console.log('not exist');
// if(pagenumber.textContent == '1'){
//     result1();
// }
// else if(pagenumber.textContent == '2'){

//     result1();
// }
// else if(pagenumber.textContent == '3'){
//     result1();
// }
// else {
//     console.log('me');
// }


