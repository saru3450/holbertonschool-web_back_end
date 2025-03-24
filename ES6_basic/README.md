Install NodeJS 20.x.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
Install Jest, Babel, and ESLint
in your project directory:

Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
Install ESLint using: npm install --save-dev eslint
Configuration files
Please create the following 3 files (with the provided contents) in the project directory:

package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
Finally…
Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies. Do not push on your repository the folder node_modules that has been created.
