# Type Error in TypeScript: Argument of type 'string[]' is not assignable to parameter of type 'string'
This example demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.  The error occurs because the function's parameter is explicitly typed as 'string', but the argument provided is an array of strings ('string[]').

The solution involves either modifying the function to accept an array of strings or modifying the function call to pass a single string.