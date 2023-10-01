const { LOADIPHLPAPI } = require("dns");

let avatars = new Array();
avatars.push(
    'newtask4/avatars/av1.png',
    'newtask4/avatars/av2.png',
    'newtask4/avatars/av3.png',
    'newtask4/avatars/av4.png',
    'newtask4/avatars/av5.png'
);

let names = new Array();
names.push(
    'Beb',
    'Ahmed',
    'Sus',
    'Pepe',
    'Ivan'
)

let surnames = new Array();
surnames.push(
    'The Frog',
    'Drobovik',
    'Amogus',
    'Geohnsbeenzworth',
    'The III king of Normandia'
)

function randStudent(names, surnames, avatars) {
    function randInt(coeff, max, min) {
        return (Math.floor(Math.random() * coeff) % max + min);
    }
    let student = {
        avatar: avatars[randInt(10, 5, 0)],
        name: names[randInt(10, 5, 0)],
        surname: surnames[randInt(10, 5, 0)],
        group: `P${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}`,
        achievments: `${randInt(100, 100, 0)}co${randInt(100, 100, 0)}cm${randInt(100, 100, 0)}me${randInt(100, 100, 0)}`,
        grade: randInt(100, 101, 0) / 10,
        visit: `${randInt(100, 101, 0)}%`,
        info: `
        ${randInt(100, 31, 10)} 
        ${randInt(10, 2, 0) == 1 ? 'fyr' : 'gdg'}${randInt(10, 2, 0) == 1 ? 'fty' : 'ggk'}${randInt(10, 2, 0) == 1 ? 'fgy' : 'gig'}${randInt(10000, 10001, 900)}@gmail.com 
        ${randInt(10, 10, 1)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 1)}${randInt(10, 10, 0)}${randInt(10, 10, 1)} 
        wtf
        `,
        last_seen: 'sususussuus'
    }
    return student;
}

function randomStudent_html(data) {
    let template = `
    <div class="student">
    <img class="avatar" src="{{avatar}}" alt="avatar_not_found">
    <div class="name">{{name1}}</div>
    <div class="group">Group:{{group}}</div>
    <div class='achievments'>
        <ul>
            <li>{{diamonds}}</li>
            <li>{{coins}}</li>
            <li>{{comments}}</li>
            <li>{{medals}}</li>
        </ul>
    </div>
    <div class="grade">
        <div>{{grade}}</div>    
        Average grade
    </div>
    <div class="visit">
        <div>{{visit}}</div>
        Visit
    </div>
    <div class="info">
        <ul>
            <li>AGE:{{age}}</li>
            <li>{{mail}}</li>
            <li>{{phone_number}}</li>
            <li>{{login}}</li>
        </ul>
    </div>
    <div class="last_seen">Last seen in MyStat: {{last_seen_date}}</div>
    </div>
    `;

    let student = template;
    student = student.replace('{{name1}}', data.name + ' ' + data.surname);
    student = student.replace('{{group}}', data.group + '');
    student = student.replace('{{grade}}', data.grade);
    student = student.replace('{{visit}}', data.visit);
    student = student.replace('{{avatar}}', data.avatar);
    student = student.replace('newtask4/', '');
    student = student.replace('{{diamonds}}', data.achievments.slice(0, data.achievments.indexOf('co')));
    student = student.replace('{{coins}}', data.achievments.slice(data.achievments.indexOf('co') + 2, data.achievments.indexOf('cm')));    
    student = student.replace('{{comments}}', data.achievments.slice(data.achievments.indexOf('cm') + 2, data.achievments.indexOf('me')));    
    student = student.replace('{{medals}}', data.achievments.slice(data.achievments.indexOf('me') + 2, data.achievments.length));    

    // let str = '';
    // str.indexOf()
    return student;
}

function writeStudentsPage(...students) {
    let page;
    page = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
    </head>
    <body>
    `;
    students.forEach((val, i, students) => {
        page += val;
    });
    page += `</body>
    </html>`;
    return page;
}

function foo(){
    console.log('aboba');
}

module.exports = {avatars, names, surnames, randStudent, randomStudent_html, writeStudentsPage};