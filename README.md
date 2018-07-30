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

`npm run commit`

I have added lint staged/commitizen/husky. This will run all tests on all staged files when you do a commit. This helps you catch smaller issues rather than a large check just before you do a push. Still I left all tests proper to run with the push.

## Prettier

I have added prettier in here as I am very big believer of it. I haven't seen many disadvantages to using this tbh. You can flexibility with the rules and I have hooked this to run automatically with my commitizen. 

## Please checkout the project

Try to commit a file, I have left in errors for there to see yourself how my commitizen works and how prettier does also (if you don't already :) ) 
