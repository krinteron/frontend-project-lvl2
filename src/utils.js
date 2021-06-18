import fs from 'fs';
import path from 'path';
import process from 'process';

export const readFile = (file) => {
	return fs.readFileSync(path.resolve(process.cwd(), file), 'utf-8');
}

export const getExt = (file) => path.extname(file);