import { generateFile } from '../generateFile.js';
import { executeJs } from '../executeJs.js';

export const executeCode = async (req, res) => {
    let { code } = req.body;
    try {
        let filepath = await generateFile('js', code);
        let logs = await executeJs(filepath);
        res.send(logs);
    }
    catch (error) {
        res.send({ message: "Something went wrong.", error })
    }
}

executeCode();