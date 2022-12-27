import path from 'path';
import fs from 'fs';
import { v4 } from 'uuid'

export const generateFile = async (format, code) => {
    const uniqueID = v4();
    const filename = `${uniqueID}.${format}`;
    const filepath = path.join('/tmp', filename);
    fs.writeFileSync(filepath, code);
    return filepath;
}