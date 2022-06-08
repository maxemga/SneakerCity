

export interface INavigation {
    id: number,
    title: string,
    category: string,
    ref?: string
}

export interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface IProductBasket {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    count: number
}

export interface IProductState {
    products: IProduct[],
    productsBasket: IProductBasket[],
    productsMinPrice: number,
    productsMaxPrice: number,
    productsCurrentMinPrice: number,
    productsCurrentMaxPrice: number,
    currentId: number,
    currentPosition: number,
    currentCategory: string
}

export interface ISizes {
    id: number,
    title: number
}

export interface IHomeContainers {
    products: IProduct[],
    isLoading: boolean
}

export interface IModalState {
    isOpenProduct: boolean,
    isOpenMenu: boolean
}

