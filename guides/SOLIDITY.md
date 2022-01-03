# Solidity
Solidity is contract-base, high level programming language to develop smart contracts mainly for ethereum virtual machine.

## Curriculum
- Versions
- Contract
- Comments
- Data Types
  - Integer
  - Unsigned Integer
  - Fixed Point Numbers
  - Boolean
  - String
    - Escaped Characters
  - Byte / Bytes
  - Arrays
  - Struct
  - Enum
  - Address
  - Mapping
  - Units (Wei, Ether, Minutes, Day, ...)
- Conversions
- Variables
  - State Variables
  - Local Variables
  - Global Variables
  - Constant Variables
  - Immutable Variables
  - Variables Scope
    - Public
    - Private
    - Internal
- Operators
  - Arithmetic Operators
  - Comparison Operators
  - Logical/Relational Operators
  - Assignment Operators
  - Conditional/Ternary Operators
- Loops
  - While Loop
  - Do While Loop
  - For Loop
- Decision-Making Statements
  - If
  - If Else
  - If Else If
- Functions
  - Function Parameters
    - Pass by Value
    - Pass by Reference
  - Function Modifiers
  - Function Return
  - Function Calling
    - Internal Function Calls
    - External Function Calls
  - View Functions
  - Pure Functions
  - Fallback Functions
  - Special Functions
    - Mathematical Functions
    - Cryptographic Functions
- Events
- Errors
- COP
  - Constructors
  - Inheritance
    - Function Overloading
    - Function Overriding
  - Abstract Contracts
  - Interfaces
- Imports
- Libraries
- Miscellaneous
  - Best Practices
  - Reserve Keywords


### Data Type

#### Arrays
Array is way to store multiple values in one variable. It can be any data type.

```solidity
uint[2] a = [1, 2]; // integer array
string[2] b = ["Hello", "World"]; // string array
uint[2][2] c = [[1, 2], [3, 4]]; // multidimensional array
uint[] d = [1, 2, 3]; // dynamic array
User[] user = [User(1), User(2)]; // User struct array
```

### Functions
Function is block of code to perform specific task. It can be called by other functions or by other contracts.

```solidity
function createUser(string memory _name, uint _age) public {

}

createUser("Rizi More", 22);
```

So here `createUser` is name of function, `_name` and `__age` are parameters of function. `public` is function visibility. `_name` is passed by reference with the help of `memory` keyword and `_age` pass by value.

#### View Functions
are those functions which are not modifying just reading data.

```solidity
function getUser(string memory _name) public view returns (User memory) {

}
```

#### Pure Functions
are those functions which neither modify nor reading data.

```solidity
function sum(uint a, uint b) public pure returns (uint memory) {
  reutrns a + b;
}
```