import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { v4 } from 'uuid'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const codesDir = path.join(__dirname, "codes");

if (!fs.existsSync(codesDir)) {
    fs.mkdirSync(codesDir, { recursive: true });
}

export const generateFile = async (format, code) => {
    const uniqueID = v4();
    const filename = `${uniqueID}.${format}`;
    const filepath = path.join(codesDir, filename);
    fs.writeFileSync(filepath, code);
    return filepath;
}