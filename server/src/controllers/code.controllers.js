import { execFile } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const executeCode = async (req, res) => {
    const lang = req.params.lang;
    try {
        execFile('node',[`${__dirname}/test.js`], ((error, stdout, stderr) => {
            res.send({ error, stdout, stderr,__dirname })
        }))
        // fs.readFile(__dirname+'/test.js','utf8',(err,data)=>{
        //     res.send({data,__dirname})
        // })
    }
    catch (error) {
        res.send('error')
    }
}