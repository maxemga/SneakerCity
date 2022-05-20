
export interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface IProductState {
    products: IProduct[],
    currentId: number
}

export interface ISizes {
    id: number,
    title: string
}

export interface IHomeContainers {
    products: IProduct[],
    isLoading: boolean
}

export interface IModalState {
    isOpen: boolean
}
