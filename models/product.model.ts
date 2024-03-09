export interface Product {
    name: string
    img:  string | undefined
    description: string | null
}

export interface MenuShops {
    name: string
    img:  string | undefined
    description: string | null
}


export interface ProductLiner {
    id: number
    name: string
    img:  string | undefined
    pice?: number 
    color?: string
    desc?:string
}