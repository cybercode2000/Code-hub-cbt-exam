let username = document.querySelector('#matric');
let password = document.querySelector('#password');
let btn = document.querySelector('#login');
let link = document.querySelector('#link');
let err = document.querySelector('#error');
function login(){
    let matricnuumber = ['17/7cs/081', '17/7cs/082', '17/7cs/083', '17/7cs/084'];
    let pass = ['damilare', 'koko', 'code', 'cybercode'];
    if(username.value === matricnuumber[0] && password.value === pass[0] || username.value === matricnuumber[1] && password.value === pass[1] || username.value === matricnuumber[2] && password.value === pass[2] || username.value === matricnuumber[3] && password.value === pass[3] || username.value === matricnuumber[4] && password.value === pass[4])
        link.href="instructionpage.html";
    else
    {
        error.style.display = 'block';
        username.style.border = '1px solid Red';
        password.style.border = '1px solid Red';
    }
}

link.addEventListener('click', login);

let courses = [
        ['what is your name',
        'rasheed', 'damicode', 'damilare'
        ],
        ['my name is damicode', 'rasheed', 'damicode', 'damilare'],
        ['what is your name', 'rasheed', 'damicode', 'damilare'],
        ['my name is damicode', 'rasheed', 'damicode', 'damilare'],
        ['what is your name', 'rasheed', 'damicode', 'damilare'],
        ['my name is damicode', 'rasheed', 'damicode', 'damilare'],
        ['what is your name', 'rasheed', 'damicode', 'damilare'],
        ['my name is damicode', 'rasheed', 'damicode', 'damilare'],
        ['what is your name', 'rasheed', 'damicode', 'damilare'],
        ['my name is damicode', 'rasheed', 'damicode', 'damilare']
    ];
    let damicode = Math.floor(Math.random() * (10-5)+5);
    let rasheed = courses[damicode][0];
    let option1 = courses[damicode][2];
    let option2 = courses[damicode][1];
    let option3 = courses[damicode][3];

console.log(rasheed);
console.log(option1);
console.log(option2);
console.log(option3);

