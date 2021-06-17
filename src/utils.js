import fs from 'fs';
import _ from 'lodash';

export const parse = (file) => {
	return JSON.parse(fs.readFileSync(file), 'utf-8');
}

