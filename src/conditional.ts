type TypeA = number ;
// type TypeB = TypeA extends string ? boolean : null; 
type TypeC = string;
type TypeD = boolean;

type E = TypeA extends number ? number : TypeC extends string ? string : null;