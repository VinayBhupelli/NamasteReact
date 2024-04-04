# Git pushing
git init
git branch -M main
git add .
git commit -m "message"
git remote..............
git push origin main

the previous lecture 1 code cant be used for production as it is not optimal
like consolelogs and comments are not used in production

react alone cant make the production faster
it requires a lot packages 

npm is not node packet manager
npm is not defined it everything other than node packet manager
npm manages packages
npm is a repository for all the packages

# npm installation
npm init (add -y if required)

package.json is a configuration file for our npm
sometimes these packages are also known as dependencies
npm controls things & keep track things like version of package

# What is bundler
our whole code need to be bundled, minified, cached, cleaned, compressed before sending into production
webpack, parcel, vite are examples of bundler
role of bundler: packages your code properly 
There are two types of packages/dependencies one is dev dependency and other is normal dependecy
dev dependency is required in development phase and other is used when production


"parcel": "^2.12.0"
^ is called caret and used for auto upgradation on minor update
~ is called tilde and used for auto upgradation on major update

package-lock.json is used to know exact version of each package and more info of that package
node-modules folder will get created and its like a database of those packages that we need 
we installed parcel we should only need to have one folder but parcel also need other 
dependencies to work known as "Transitive dependencies"

Each package has its own package.json file consisting of its dependencies

Should we put all the nodemodules to production/git: The answer is NO
if you have package.json & package-lock.json file you can recreate the node_modules folder 
using "npm install" command
whatever you can regenerate dont put in on git

Building our project using parcel
"npx parcel index.html"
parcel creates server and create a port 1234

if you want to install a package we use npm
if you want to run/execute a package we use npx

parcel goes to index.html and create a development build 
here we wont see react
npm even has react in it
cdn links way not good way to add react to project
we dont need network call to react website everytime

"npm install react"

Normal Js file(Browser Scripts) Dont have imports and exports in it
so we need to mention type of file 

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential bundling - Support Older Browsers
- Diagnostic 
- Error Handling
- Http & Https
- Tree Shaking Algorithm - remove unused code 
- Different dev and prod bundles

"npx parcel build index.html "
it gives error as package.json has "main":"App.js" as entry point
it conflict with app.js and index.html
this bundle will be created in dist folder

# Browserslist
used to keep track of supported browsers
this below code is added in package.json
  "browserslist":[
    "last 2 versions"
  ]
"last 2 Chrome version"
"last 2 versions"