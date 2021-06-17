import _ from 'lodash';
import { parse } from './utils.js';
import path from 'path';

const buildTree = (first, second) => {
	const file1 = parse(path.resolve(process.cwd(), first));
	const file2 = parse(path.resolve(process.cwd(), second));
	const keys = _.orderBy(_.union(Object.keys(file1), Object.keys(file2)));

	const res = keys.map((key) => {
		if (_.has(file1, key)) {
			if (_.has(file2, key)) {
				if (file1[key] === file2[key]) {
					return `    ${key}: ${file1[key]}\n`;
				} else {
					return `  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}\n`;
				}
			} else {
				return `  - ${key}: ${file1[key]}\n`;
			}
		} else {
			return `  + ${key}: ${file2[key]}\n`;
		}
	});
	return `{\n${res.join('')}}`;
};

export default buildTree;