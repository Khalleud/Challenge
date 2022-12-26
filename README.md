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

- test validation function and utils functions
- handle errors inside validation function to output clear messages about validation error
- add type in classes to distinguish
- change config class to interface
- detail classes to handle unit methods and attributes more specifically



