import genDiff from '../src/index.js';

const fileJSON1 = './__tests__/__fixtures__/file1.json';
const fileJSON2 = './__tests__/__fixtures__/file2.json';

const fileYAML1 = './__tests__/__fixtures__/file1.yaml';
const fileYAML2 = './__tests__/__fixtures__/file2.yml';


describe("Filter function", () => {
	test('JSON files test', () => {
		expect(genDiff(fileJSON1, fileJSON2)).toMatch('hexlet');
	});
	test('YAML files test', () => {
		expect(genDiff(fileYAML1, fileYAML2)).toMatch('hexlet');
	});
	test('Mixed files test', () => {
		expect(genDiff(fileJSON1, fileYAML2)).toMatch('hexlet');
	});
});
