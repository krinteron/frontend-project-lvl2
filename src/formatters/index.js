import pretty from './pretty.js';
import plain from './plain.js';
import json from './json.js';

const formats = {
	pretty,
	plain,
	json,
};

export default (diff, format = 'pretty') => {
	const getFormatType = formats[format];
	return getFormatType(diff);
};