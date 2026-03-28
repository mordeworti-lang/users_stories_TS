
export type UserRole = "admin" | "user";
export type ProductCategory = "electronics" | "books" | "sports";
export type Status = "active" | "inactive";
export type ProductTags = string[];

export interface Product {
    readonly sku : PropertyKey ;
    name : string ;
    brand : string ;
    quantity : number ;
    price : number ;
    isActive : Status ;
    category : ProductCategory ;
    imageUrl : string ;
    description? : string ;
    dimensions? : string ;
    tags?: ProductTags;
    createdAt : Date ;
}

export interface User {
    readonly id : PropertyKey ;
    fullName : string ;
    email : string ;
    isActive : Status ;
    role : UserRole ;
    address : string ;
    createdAt: Date;
}
