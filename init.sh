!/bin/zsh

### git
git init
touch .gitignore
ignoreScript='# vscode\n.vscode/\n# npm\npackage-lock.json\nnode_modules/'
echo $ignoreScript > .gitignore

### project
mkdir dist
mkdir -p src/js
touch src/js/index.js
mkdir -p src/css
touch src/css/index.css
mkdir -p src/assets/img
touch index.html

### npm
#npm init -y

### webpack 
npm install --save-dev webpack webpack-cli style-loader css-loader inline-source-map html-webpack-plugin 

### babel
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
npm install --save @babel/runtime

### jest
npm install --save-dev jest

### eslint & airbnb config
npm install --save-dev eslint eslint-plugin-import
npm init @eslint/config



