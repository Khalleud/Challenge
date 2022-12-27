# Challenge for Flatfair Interview
## App Description

The purpose of the app is to implement "calculateMembershipFee" function that returns tenancy deposit fee respecting constraints that are defined in the statement.

In this app, we also define model of the organisation structure as described in the statement



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
- run   ```
        $ npm install
        ```

## Run App
- fill the 'calculate_membership_fee' function in **src/index.ts** 
- compile with   ```
                 $ npm compile
                 ```
    or   ```
         $ npx tsc
         ```
- run with   ```
         $ node build/src/index.js
         ```
## Run tests

- run  ```
         $ npm test
         ```

## Future iterations


- Handle errors inside validation function to throw clear messages
- Change config class from class to interface
- Update classes to handle unit methods and properties more specifically
- Update documentation

