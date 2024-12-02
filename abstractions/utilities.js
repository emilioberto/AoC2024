import fs from 'fs';

export const readFileLinesSync = (path) => {
    return fs.readFileSync(path, 'utf8').split('\n');
};