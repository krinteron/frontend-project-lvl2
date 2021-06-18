import _ from 'lodash';
import { readFile, getExt } from './utils.js';
import parse from './parsers.js';
import calcDiff from './calcDiff';

export default (file1, file2) => {
	const data1 = readFile(file1);
	const data2 = readFile(file2);
	const ext1 = getExt(file1);
	const ext2 = getExt(file2);
	const firstFileParsed = parse(data1, ext1);
	const secondFileParsed = parse(data2, ext2);
	const diff = calcDiff(firstFileParsed, secondFileParsed);
	return diff;
};