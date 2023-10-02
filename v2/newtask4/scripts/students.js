const { LOADIPHLPAPI } = require("dns");

let avatars = new Array();
avatars.push(
    './avatars/av1.png',
    './avatars/av2.png',
    './avatars/av3.png',
    './avatars/av4.png',
    './avatars/av5.png'
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
        ${randInt(100, 31, 10)}mil
        ${randInt(10, 2, 0) == 1 ? 'fyr' : 'gdg'}${randInt(10, 2, 0) == 1 ? 'fty' : 'ggk'}${randInt(10, 2, 0) == 1 ? 'fgy' : 'gig'}${randInt(10000, 10001, 900)}@gmail.comphn
        ${randInt(10, 10, 1)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 1)}${randInt(10, 10, 0)}${randInt(10, 10, 1)}log
        ${randInt(10, 2, 0) == 1 ? 'hh' : 'ff'}${randInt(10, 2, 0) == 1 ? 'tt' : 'kk'}${randInt(10, 2, 0) == 1 ? 'mm' : 'oo'}${randInt(10000, 10001, 900)}
        `,
        last_seen: randInt(100, 32, 0) + '.'+randInt(100, 13, 0)+'.2023'
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
            <li>
            <i class="fa fa-diamond"></i>
            {{diamonds}}
            </li>
            <li>
            <i class="fa fa-circle"></i>
            {{coins}}
            </li>
            <li>
            <i class="fa fa-comment"></i>
            {{comments}}
            </li>
            <li>
            <i class="fa fa-trophy"></i>
            {{medals}}
            </li>
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
            <li>
            <i class="fa fa-meh-o"></i>
            AGE:{{age}}
            </li>
            <li>
            <i class="fa fa-envelope"></i>
            {{mail}}
            </li>
            <li>
            <i class="fa fa-phone"></i>
            {{phone_number}}
            </li>
            <li>
            <i class="fa fa-sign-in"></i>
            {{login}}
            </li>
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
    student = student.replace('{{age}}', data.info.slice(0, data.info.indexOf('mil')));
    student = student.replace('{{mail}}', data.info.slice(data.info.indexOf('mil') + 3, data.info.indexOf('phn')));    
    student = student.replace('{{phone_number}}', data.info.slice(data.info.indexOf('phn') + 3, data.info.indexOf('log')));    
    student = student.replace('{{login}}', data.info.slice(data.info.indexOf('log') + 3, data.info.length));    
    student = student.replace('{{last_seen_date}}', data.last_seen);    

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
    <link rel="stylesheet" href="./index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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