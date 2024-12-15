Topic: The significance of union and intersection types in Typescript.

A union and intersection both are uses building type in typeScript. A union type represents a value that can be one of several types. On the other hand An intersection type represents a value that must satisfy all the specified types.

For example of union: 
You have a variables on 3 different values like this: 

let shape;
shape = "Rectangle"
shape = "Circle"
shape = "triangle"

Now, You have a function that takes one value of shape. In this case you use union type like this.

function myShape(shape === "Rectangle" | "Circle" |  "triangle"){
    return shape
}

this type of case we use union type that provide me options for choose any value of one variable. This is helps to create robust and more effective type in typescript.

For example of intersection: 
In this case, Suppose you have 2 different variable that hold different different values like this:

const name = "Md. Hasan kha";  
const age = 23;

Now, you have a function that takes this two values.

function person(name & age){
    return "This is Hasan"
}

That means, You must be this two value name and age. This intersection helps building types with condition.

The union type works as "or" operator and the intersection type works as "And" operator. This two type helps for building typescript type with condition.