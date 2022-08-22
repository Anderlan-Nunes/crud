export interface Product {
    id?: number
    name: string
    price: number    
}

/**aceitar null no price
 * export interface Product {
    id?: number;
    name: string;
    price: number | null ;
}

ou colocar no arquito tsconfig.json    

    "strictNullChecks": false
 */