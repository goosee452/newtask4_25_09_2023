const http = require('http');
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const { url } = require('inspector');
const stdnt = require('./scripts/students'); //students


function writeFiles(request, response, ...file_paths) {
    let fileTypes = new Map;
    fileTypes.set('.html', 'text/html');
    fileTypes.set('.css', 'text/css');
    fileTypes.set('.png', 'image/png');
    fileTypes.set('.ico', 'image/x-icon');
    let extname = path.extname(request.url);

    if (file_paths.length != 0) {
        for (let i = 0; i < file_paths.length; i++) {
            if (file_paths[i].includes(request.url)) {
                response.writeHead(200, { 'Content-type': fileTypes.get(extname) });
                fs.readFile(file_paths[i], (err, data) => {
                    if (err) throw err
                    response.end(data);
                })
                break;
            }
        }
    }
}

function writePage_html(path, response, content) {
    response.writeHead(200, { 'Content-type': 'text/html' })
    if (typeof content == 'undefined') {
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log('error');
                throw err;
            }
            //console.log(data);
            response.end(data);
        })
    }
    else {
        response.end(content);
    }
}

let randData1 = stdnt.randStudent(stdnt.names, stdnt.surnames, stdnt.avatars);
let randData2 = stdnt.randStudent(stdnt.names, stdnt.surnames, stdnt.avatars);
let students = stdnt.writeStudentsPage(stdnt.randomStudent_html(randData1), stdnt.randomStudent_html(randData2));

const server = http.createServer((request, response) => {
    //console.log(students);


    writeFiles(request, response, randData1.avatar + '', randData2.avatar + '', 'newtask4/index.css');
    if (request.url == '/' || request.url == '/index.html') {
        writePage_html('', response, students);
    }
});

server.listen(2007);