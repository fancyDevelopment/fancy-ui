npm run build

npm unpublish fancy-ui-core --registry http://localhost:4873/ --force
npm publish dist/packages/fancy-ui-core --registry http://localhost:4873/

npm unpublish fancy-ui-shell --registry http://localhost:4873/ --force
npm publish dist/packages/fancy-ui-shell --registry http://localhost:4873/

npm unpublish fancy-ui-content --registry http://localhost:4873/ --force
npm publish dist/packages/fancy-ui-content --registry http://localhost:4873/

npm unpublish fancy-ui-data --registry http://localhost:4873/ --force
npm publish dist/packages/fancy-ui-data --registry http://localhost:4873/

npm unpublish fancy-ui-forms --registry http://localhost:4873/ --force
npm publish dist/packages/fancy-ui-forms --registry http://localhost:4873/
