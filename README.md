# MOKATH UniKnowledge Frontend Repository

You'll find here all sources and config for the frontend part of UniKnowledge project by MOKATH Team.

## How to use git ?

### Before coding anything

1. Create a new branch from `develop` with a name describing the feature you're adding : e.g."auth-service-base"

    1.1 `git checkout develop`
    
    1.2 `git checkout -b new-branch-name`

PLEASE MAKE SURE YOU CREATE THE BRANCH FROM `develop`

2. You can ensure that you're on the correct branch with the following command :
`git branch`

The branch you're actually working on is marked as : `* current-branch`

3. To commit and push your changes to your branch :
    
    3.1 Ensure you're on the right branch : `git branch` it SHOULD NOT be `develop` or `master`
    
    3.2 `git add -A`
    
    3.3 `git commit -m "Describe your changes"`
    
    3.4 `git push`

## Build and Run Angular App Commands

1. Install dependencies
`npm install`

2. Build and Serve Angular App
`ng serve --open`
