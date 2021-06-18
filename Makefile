install:
	npm install
publish:
	npm publish --dry-run
gendiff:
	bin/gendiff.js
lint:
	npm run pretest
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8