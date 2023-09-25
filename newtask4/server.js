const http = require('http');
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const { url } = require('inspector');

function writeFiles(request, response, ...file_paths){
    let fileTypes = new Map;
    fileTypes.set('.html', 'text/html');
    fileTypes.set('.css', 'text/css');
    fileTypes.set('.png', 'image/png');
    fileTypes.set('.ico', 'image/x-icon');
    let extname = path.extname(request.url);

    if(file_paths.length != 0){
        for(let i = 0; i < file_paths.length; i++){
            let fileName = file_paths[i].slice(file_paths[i].lastIndexOf('/'));
            if(fileName == request.url){
                response.writeHead(200, {'Content-type': fileTypes.get(extname) });
                fs.readFile(file_paths[i], (err, data) => {
                    if (err) throw err
                    response.end(data);
                })
                break;
            }
        }
    }
}

let avatars = new Array();
avatars.push(
    'newtask4/avatars/av1',
    'newtask4/avatars/av2',
    'newtask4/avatars/av3',
    'newtask4/avatars/av4',
    'newtask4/avatars/av5'
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

function randStudent(names, surnames, avatars){
    function randInt(coeff, max, min){
        return (Math.floor(Math.random() * coeff) % max + min);
    }
    let student = {
        avatar: avatars[randInt(10, 5, 0)],
        name: names[randInt(10, 5, 0)],
        surname: surnames[randInt(10, 5, 0)],
        group: `P-${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}`,
        achievments: `${randInt(10, 100, 0)} ${randInt(10, 100, 0)} ${randInt(10, 100, 0)} ${randInt(10, 100, 0)}`,
        grade: randInt(100, 101, 0) / 10,
        visit: `${randInt(100, 101, 0)}%`,
        info: `
        ${randInt(100, 31, 10)} 
        ${randInt(10, 2, 0) == 1? 'fyr':'gdg'}${randInt(10, 2, 0) == 1? 'fty':'ggk'}${randInt(10, 2, 0) == 1? 'fgy':'gig'}${randInt(10000, 10001, 900)}@gmail.com 
        ${randInt(10, 10, 1)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 0)}${randInt(10, 10, 1)}${randInt(10, 10, 0)}${randInt(10, 10, 1)} 
        wtf
        `,
        last_seen: 'sususussuus'
    }
    return student;
}

function writePage_html(path, response){
    response.writeHead(200, { 'Content-type': 'text/html' })
    fs.readFile(path, (err, data) => {
        if (err){
            console.log('error');
            throw err;
        }
        //console.log(data);
        response.end(data);
    })
}


const server = http.createServer((request, response) => {
    //console.log(request.url);
    console.log(randStudent(names, surnames, avatars));
    writeFiles(request, response, 'newtask4/av_placeholder.png', 'newtask4/index.css');
    if(request.url == '/'){
        writePage_html('newtask4/template.html', response);
    }
});

server.listen(2007);
//this is terrible