## Background Info

So this is the updated. I think you will find that I have avoided using many third-party tools, this was by choice.

I felt that react-redux-form would likely be the way to go if you are going to do any high level of redux forms. Its hugely popular and lets you handle the fields states a lot more robustly then doing it by hand will ever give you.

Otherwise I can't really see any justification of using any other third-party tools here, I was going to add css-moudles as this is my preferred way of doing styles now i must say.

I personally feel opening up the test to be a bit longer would give people tested a bit more time to play and feel comfortable.

## Setup
Install commitizen

`npm install -g commitizen`

Install the hutber-conventional-changelog package.

`npm install --save-dev hutber-conventional-changelog`

Init commitizen configuration

`commitizen init hutber-conventional-changelog --save-dev --save-exact`


## Usage

`git cz`


## Table of Contents

- [Running the project](#running-the-project)
- [Brief](#brief)
- [Extra](#extra)

## Running the project

This project has been set up with the standard react-cli script.
Use:
```
$ npm install
$ npm start
```

See https://www.npmjs.com/package/react-scripts for more details


## Brief

Timed: 1 hour

Create a small job capture application. The screenshots have been included in this zip.
A user can have 1-3 jobs or be unemployed (0 jobs).

We are just looking for the component markup and structure.

- *We are **not** looking for logic or state management.*
- *Styling is also **not** important, react-bootstrap has been included in this project but you are not required to use it.*
- *Feel free to include any reasonable 3rd party modules (MaterialUI etc.)*


## Extra
***Only do this if you complete the first task in time and are happy with it. Not doing this task will not impact negatively on your test.***

There is a todo list tab with a (very) basic to do list. Improve it however you feel best.


## Submission

Upload the zip file to a cloud storage of your choice, just make sure its accessible. (e.g. GoogleDrive, github) (tip: don't include the node_modules folder!)
