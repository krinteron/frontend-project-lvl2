import _ from 'lodash';

const calcDiff = (data1, data2) => {
	const keys = _.orderBy(_.union(Object.keys(data1), Object.keys(data2)));

	const diff = keys.map((key) => {
		if (_.has(data1, key)) {
			if (_.has(data2, key)) {
				if (data1[key] === data2[key]) {
					return `    ${key}: ${data1[key]}\n`;
				} else {
					return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}\n`;
				}
			} else {
				return `  - ${key}: ${data1[key]}\n`;
			}
		} else {
			return `  + ${key}: ${data2[key]}\n`;
		}
	});
	return `{\n${diff.join('')}}`;
};

export default calcDiff;