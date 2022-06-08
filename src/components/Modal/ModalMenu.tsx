import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components'
import Row from '../../../public/images/Modal/modalRow';
import { useActions } from '../../hooks/useActions';
import { INavigation, ISizes } from '../../types/types';

const ModalMenu: React.FC = () => {
    const navigation: INavigation[] = [
        {id: 1, title: "All", category: "all"},
        {id: 2, title: "Electronics", category: "electronics"},
        {id: 3, title: "Jewelery", category: "jewelery"},
        {id: 4, title: "Men's clothing", category: "men's clothing"},
        {id: 5, title: "Women's clothing", category: "women's clothing"}
    ]
    
    const brands: {id: number, title: string}[] = [
        {id: 1, title: 'Nike'},
        {id: 2, title: 'Jordan'},
        {id: 3, title: 'Adidas'},
        {id: 4, title: 'Fila'},
        {id: 5, title: 'Gucci'},
        {id: 6, title: 'Balenciaga'},
    ]

    const sizes: ISizes[] = [
        {id: 1, title: 32},
        {id: 2, title: 33},
        {id: 3, title: 34},
        {id: 4, title: 35},
        {id: 5, title: 36},
        {id: 6, title: 37}
    ]
    const [isDiscriptOpen, setIsDiscriptOpen] = useState<boolean>(true);
    const { hideModalMenu, changeCategory } = useActions();

    const change = (category: string) => {
        changeCategory(category);
    }



    return(
        <MenuModal>
            <MenuContent>
                <HeaderCross onClick={() => hideModalMenu()}>
                    <span></span>
                </HeaderCross>
                <HeaderContentIcons>
                    <HeaderContentIcon>
                        <Link href="/">
                            <Image style={{cursor: 'pointer'}} src={require('../../../public/images/Header/HeaderIcon.svg')} height={30} width={30} alt="Header logo" /> 
                        </Link>
                    </HeaderContentIcon>
                    <HeaderContentIcon>
                        <Link href="/basket">
                            <Image style={{cursor: 'pointer'}} src={require('../../../public/images/Header/HeaderIcon2.svg')} height={30} width={30} alt="Header logo" /> 
                        </Link>
                        <HeaderContentIconCount>1</HeaderContentIconCount>
                    </HeaderContentIcon>
                    <HeaderContentIcon>
                        <Link href="/">
                            <Image style={{cursor: 'pointer'}} src={require('../../../public/images/Header/HeaderIcon3.svg')} height={30} width={30} alt="Header logo" /> 
                        </Link>
                    </HeaderContentIcon>
                </HeaderContentIcons>
                <MenuModalRow onClick={() => setIsDiscriptOpen(!isDiscriptOpen)}>
                    <h3>Description</h3>
                    <Row isDiscriptOpen={isDiscriptOpen}/>
                </MenuModalRow>
                {isDiscriptOpen ? <HeaderContentNav>
                    
                    {navigation.map((element) => {
                        return <p key={Math.random()} onClick={() => change(element.category)}>{element.title}</p>
                    })}
                </HeaderContentNav> : null}
                
                <FilterBrands>
                    <h2>Brand</h2>
                    <FilterBrandsInput>
                        {brands.map((element: {id: number, title: string}) => {
                            return <div key={element.id}>
                            <Input type="checkbox" id={element.title} name={element.title}/>
                            <Label htmlFor={element.title}>{element.title}</Label>
                        </div>
                        })}
                        
                    </FilterBrandsInput>
                </FilterBrands>
                <FilterPrice>
                    <h2>Price range</h2>

                </FilterPrice>
                <FilterSizes>
                    <h2>Sizes</h2>
                    <ModalInfoSizeElements>
                        {sizes && sizes.map((element) => {
                            return <ModalInfoSizeElement key={element.id}>
                                        <p>{element.title}</p>
                                    </ModalInfoSizeElement>
                        })}
                    </ModalInfoSizeElements>
                </FilterSizes>
            </MenuContent>
        </MenuModal>
    )
}

const HeaderContentIcon = styled.div`
    cursor: pointer;
    position: relative;
`

const HeaderContentIconCount = styled.div`
    font-size: 15px;
    color: white;
    padding: 3px;
    border-radius: 15px;
    background-color: red;
    position: absolute;
    left: 20px;
    bottom: 20px;
`

const MenuModal = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    background-color: white;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    height: 100%;

    // @media (max-width: 1024px) {
    //     width: 200px;
    // }
`

const MenuModalRow = styled.div`
    cursor: pointer;
    font-size: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderCross = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-top: 50px;
    width: 100%;
    align-items: center;
    height: 50px;
    &:before, &:after {
        content: ""; 
        position: absolute; 
        width: 35px; 
        height: 8px; 
        background: #D90429;
        border-radius: 5px;
    };
    &::before {
        transform: rotate(45deg)
    };
    &::after {
        transform: rotate(-45deg)
    };
`

const MenuContent = styled.div`
    padding: 0 60px;

`

const HeaderContentNav = styled.div`
    font-size: 18px;
    display: block;
    column-gap: 60px;
    padding-bottom: 30px;
    padding-top: 30px;

    p {
        cursor: pointer;
        display: block:

        
    }

    @media (max-width: 1440px) {
        column-gap: 30px;
    }

    @media (max-width: 1024px) {
        justify-content: center;
        
    }
`


const HeaderContentIcons = styled.div`
    padding-top: 30px;
    display: flex;
    column-gap: 60px;
    @media (max-width: 1440px) {
        column-gap: 30px;
    }

    @media (max-width: 1024px) {
        justify-content: center;
        column-gap: 80px;
        margin-top: 20px;
        padding-bottom: 30px;
    }
`



const FilterBrands = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    padding-bottom: 50px;
    padding-top: 30px;

`
const FilterPrice = styled.div`
    padding-top: 30px;

`
const FilterSizes = styled.div`
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
`

const ModalInfoSizeElements = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px 15px;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const ModalInfoSizeElement = styled.div`
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    transition: 0.3s;
    p {
       
        color: rgba(0, 0, 0, 0.65);
        font-size: 18px;
        text-align: center;
    }
    &:hover {
        opacity: 0.5;
        transition: 0.3s;
    }
`

const FilterBrandsInput = styled.div`
    div {
        margin-top: 20px;
    }
`

const Input = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.15);
    cursor: pointer;
`
const Label = styled.label`
    color: rgba(0, 0, 0, 0.65);
    font-size: 18px;
    font-weight: bold;
    margin-left:15px;
    display:inline-block;
`
export default ModalMenu;