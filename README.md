# Student Details Smart Contract

## Overview
This Solidity smart contract manages and stores student details, providing a structured way to record information such as name, age, and gender for each student.

## Features
- **Student Detail Structure**: The contract defines a `studentDetail` structure, including name, age, and gender.
- **Storage Mapping**: Student details are stored in a mapping, using the student ID as the key and details as the value.
- **Owner Authorization**: The contract includes a modifier `onlyOwner`, ensuring that only the contract owner (admin) can execute specific functions.

## Smart Contract Functions

### `constructor()`
- Initializes the contract, setting the deployer's address as the owner.

### `onlyOwner` Modifier
- Ensures that only the contract owner can call specific functions.

### `createStudentDetail(string memory _name, uint _age, string memory _gender) public`
- Creates a new student detail entry with the provided name, age, and gender.
- Automatically assigns a unique student ID to each entry.

## Usage

1. **Deployment**:
   - Deploy the contract to the Ethereum blockchain, specifying version 0.8.19.

2. **Ownership**:
   - The deployer's address becomes the owner.

3. **Adding Student Details**:
   - Call `createStudentDetail` with the student's name, age, and gender.

4. **Accessing Details**:
   - Use the `Details` mapping with the student ID to retrieve specific details.

## License
This smart contract is released under the MIT License. See [LICENSE](LICENSE) for details.

## SPDX-License-Identifier
SPDX-License-Identifier: MIT

