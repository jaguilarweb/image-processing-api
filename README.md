# Image Porcessing API Project


# Requirment

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

