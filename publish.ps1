$confirmation = ""
while($confirmation -ne "y")
{
    if ($confirmation -eq 'n') {exit}
    $confirmation = Read-Host "Publish to public npm registry? [y/n]"
}

npm run build

npm publish dist/packages/fancy-ui-core

npm publish dist/packages/fancy-ui-shell

npm publish dist/packages/fancy-ui-content

npm publish dist/packages/fancy-ui-data

npm publish dist/packages/fancy-ui-forms
