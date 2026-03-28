
export type UserRole = "admin" | "user";
export type ProductCategory = "electronics" | "clothing" | "books" | "home" | "sports";
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

export interface CartItem {
    readonly id : User["id"];
    product: Product["sku"];
    quantity: number;
    userRole?: UserRole;  // Restricción de rol para acceso al carrito
}

export const cartItemsMap = new Map<CartItem["id"], CartItem>();
export const usersMap = new Map<User["id"], User>();
export const productsMap = new Map<Product["sku"], Product>();
