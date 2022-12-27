#Challenge for Flatfair Interview
## App Description

The purpose of the app is to implement "calculateMembershipFee" function that returns tenancy deposit fee respecting constraints that are defined in the statement.

We also define the model of the oraganisation structure that of the client



## Technologies


- Typescript
- Jest

## Folders

- **docs** : contains the doc of the functions and classes of the app
- **src** :  the implementations of different components
- **src/models** : implementation of classes for the organisation structure 
- **src/utils**: utils functions and constants and init function for the main 
- **src/tests**: implementation of tests
- **src/calculate_fee.ts**: implementation of calculateMembershipFee function
- **src/validation_function**: implementation of validation_function to check if inputs verify constraints


## Install App

- clone app
- run   ```console
        $ npm install
        ```

## Run App
- fill the 'calculate_membership_fee' function in **src/index.ts** 
- compile with  ```console
                $ npm compile
                ```
    or  ```console
        $ npx tsc
        ```
- run with '''console
           $ node build/src/index.js
## Run tests

- run '''console
      $ npm test
      '''

## Future iterations


- handle errors inside validation function to throw clear messages about validation error
- change config class to interface
- detail classes to handle unit methods and properties more specifically



