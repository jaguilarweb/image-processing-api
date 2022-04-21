# Image Processing API Project


# Requirement

This project needs to have installed NodeJS and npm.


# Developing Steps

1.- Create a project directory

2.- Initialize the npm in the project and customize the package.json 
``` npm init -y ```

3.- Initialize git, create ".gitignore" file and customize it.
``` git init ```

4.- Dependencies

Install Prettier (Formatting) and create ".prettierrc" file

``` npm i --save-dev prettier ```

To test or execute, just exe the script:

``` npm run prettier-ts ```

Install Eslint (catching bugs), customize the script in the "package.json" and create ".eslintrc" file

 ``` npm i --save-dev eslint ```

``` npm i --save-dev eslint-config-prettier ```

``` npm i --save-dev eslint-plugin-prettier ```

To test or execute, just exe the script:

``` npm run lint-ts ```

Install Typescript and other dependencies

``` npm i --save-dev typescript ```

``` npm i --save-dev ts-node ```

``` npm i --save-dev @types/node ```

The following command create the "tsconfig.json" file:

``` npx tsc -- init ```

After to set up the "tsconfig.json", install optionals dependencies:

``` npm i --save-dev @typescript-eslint/eslint-plugin ```

``` npm i --save-dev @typescript-eslint/parser ```

To execute, write:

``` npm run build ```

Install Jasmine and create the script in the "package.json"

``` npm i jasmine ```
``` npm i jasmine-spec-reporter --save-dev ```
``` npm i --save-dev @types/jasmine ```

Create directories to testting and config Jasmine files

To Endpoint testing install Supertest

``` npm i supertest ```q
``` npm i --save-dev @types/supertest ```

Install express package

``` npm i express ```
``` npm i --save-dev @types/express ```

Nodemon going to allow our server to restart anytime a file is saved

``` npm i --save-dev nodemon ```

Install sharp third-party library

``` npm install sharp ```
``` npm i @types/sharp ```

Planning

1.- First, standup a server.
2.- Create simple feature of image processing
3.- Refactor to do it more efficient
4.- How I can validate if the resize image exist before to do it?
5.- Create routes and middleware
6.- Create tests