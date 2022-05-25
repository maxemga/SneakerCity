import { NextPage } from "next";
import styled from 'styled-components'
import Link from "next/link";
import Image from 'next/image'
import { INavigation } from "../../types/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";



const Header: NextPage = () => {
    const { changeCategory, showModalMenu, hideModals } = useActions();
    const productsBasket = useTypedSelector(state => state.productsReducer.productsBasket);

    const change = (category: string) => {
        changeCategory(category);
    }

    const clickBurger = (event: Event) => {
        showModalMenu();
        event.stopPropagation();
    }

    
    const navigation: INavigation[] = [
        {id: 1, title: "All", category: "all", ref: '/'},
        {id: 2, title: "Electronics", category: "electronics", ref: '/'},
        {id: 3, title: "Jewelery", category: "jewelery", ref: '/'},
        {id: 4, title: "Men's clothing", category: "men's clothing", ref: '/'},
        {id: 5, title: "Women's clothing", category: "women's clothing", ref: '/'}
    ]

    return(
        <HeaderBlock onClick={() => hideModals()}>
            <Wrapper>
                <HeaderContent>
                    <HeaderContentLogo>
                        <Link href="/">
                                <Image style={{cursor: 'pointer'}} src={require('../../../public/images/Header/HeaderLogo.svg')} alt="Header logo" width={150} height={100}/>              
                        </Link>
                    </HeaderContentLogo>
                    <HeaderContentNav>
                        {navigation.map((element) => {
                            return <Link href={element.ref} key={element.id}><p onClick={() => change(element.category)}>{element.title}</p></Link>
                        })}
                    </HeaderContentNav>
                    <HeaderContentIcons>
                        <HeaderContentIcon>
                            <Link href="/">
                                <Image src={require('../../../public/images/Header/HeaderIcon.svg')} height={30} width={30} alt="Header logo" />
                            </Link>
                            
                        </HeaderContentIcon>
                        <HeaderContentIcon>
                            <Link href="/basket">
                                <Image style={{cursor: 'pointer'}} src={require('../../../public/images/Header/HeaderIcon2.svg')} height={30} width={30} alt="Header logo" /> 
                            </Link>
                            <HeaderContentIconCount>{productsBasket.length <= 9 ? productsBasket.length : '9+'}</HeaderContentIconCount>
                        </HeaderContentIcon>
                        <HeaderContentIcon>
                            <Link href="/">
                                <Image style={{cursor: 'pointer'}} src={require('../../../public/images/Header/HeaderIcon3.svg')} height={30} width={30} alt="Header logo" /> 
                            </Link>
                        </HeaderContentIcon>
                    </HeaderContentIcons>
                    <HeaderContentBurger onClick={(event: Event) => clickBurger(event)}>
                        <span></span>
                    </HeaderContentBurger>
                </HeaderContent>
            </Wrapper>
        </HeaderBlock>
    )
}

export default Header;

const HeaderBlock = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.15);
`   

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
const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`   
const HeaderContent = styled.div`
    position: relative;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        display: block;
        text-align: center;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

const HeaderContentBurger = styled.div`
    display: none;
    cursor: pointer;
    position: absolute;
    width: 40px;
    right: 0;

    &> span,
    &> span::before,
    &> span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background-color: #D90429;
    }
    
    &> span::before {
    content: '';
    top: -10px;
    }
    
    &> span::after {
    content: '';
    top: 10px;
    }

    @media (max-width: 768px) {
        display: block;
    }
`

const HeaderContentLogo = styled.div`
`

const HeaderContentNav = styled.div`
    font-size: 18px;
    display: flex;
    column-gap: 60px;

    P {
        cursor: pointer;
    }

    @media (max-width: 1440px) {
        column-gap: 30px;
    }

    @media (max-width: 1024px) {
        justify-content: center;
        
    }

    @media (max-width: 768px) {
        display: none;
    }
`


const HeaderContentIcons = styled.div`
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

    @media (max-width: 768px) {
        display: none;
    }

`

