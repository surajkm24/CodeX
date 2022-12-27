import { execFile } from 'child_process';

export const executeJs = async (filepath) => {
    return new Promise((resolve, reject) => {
        execFile('node', [filepath], (error, stdout, stderr) => {
            resolve({ error, stdout, stderr });
        })
    })
}