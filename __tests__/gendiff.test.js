import buildTree from '../src/index.js';

const file1 = '__fixtures__/file1.json';
const file2 = '__fixtures__/file2.json';


describe("Filter function", () => {
	test('My first test', () => {
		expect(buildTree(file1, file2)).toMatch('hexlet');
	});
});
