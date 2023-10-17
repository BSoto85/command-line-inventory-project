# Command Line Inventory App Project
## _Soto Veterinary Clinic_

This application is for use in a veterinary setting, allowing clinics to keep track of their clients and their fur-babies.

## Install
- Clone repository
- Install npm 

## Features
__A user can:__
- Create an owner with a unique ID, name, address, phone number and pets.
- See a list of all owners in theor database.
- Find one owner by ID and see their info.
- Update owner info with pets, including the pet's ID, name, species, age, and sex.
- Delete a single pet from owner info by their pet name.
- Add items to an invoice.
- Print an itemized receipt for an owner with a total for services rendered.
- Delete all items from an invoice.

## Run Commands

This app uses a number of commands and inputs into the terminal in order to run:

- To use the __INDEX__ function, type in __npm run index__
- To use the __CREATE__ function, type in **npm run create _"owner's full name"_**
- To use the __SHOW__ function, type in **npm run show _ownerID_**
- To use the __UPDATE__ function, type in **npm run update _ownerID petName species(either Canine or Feline)_**
- To use the __DESTROY__ function, type in **npm run destroy _ownerID petName_**
- To use the __INVOICE__ function, type in **npm run invoice _"serviceName" quantity_**
- To use the __RECEIPT__ function, type in **npm run receipt _ownerID_**
- To use the __EMPTY__ function, type in **npm run _empty_**