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


Basta ir para tsconfig.json e definir "strictPropertyInitialization": false ou apenas ""strict": false

Consegui resolver, estava com o mesmo problema, isso acontece porque a variavel ID está recebendo um valor nullo. Então, você só precisa acrescentar isso  if(id == null)   {  
id = '" " ;  }  ,se o a variavel id for nulla, então ela recebe uma string vazia

  product: Product = {
    name: '',
    price: null
  };

 */