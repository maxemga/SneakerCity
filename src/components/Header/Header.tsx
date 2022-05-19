import { NextPage } from "next";
import styled from 'styled-components'
import Link from "next/link";
import Image from 'next/image'
import { INavigation } from "../../types/types";
import { useState } from "react";





const navigation: INavigation[] = [
    {id: 1, title: 'New arrivals', ref: '/'},
    {id: 2, title: 'Men', ref: '/'},
    {id: 3, title: 'Women', ref: '/'},
    {id: 4, title: 'Kids', ref: '/'}
]

const Header: NextPage = () => {

    return(
        <HeaderBlock>
            <Wrapper>
                <HeaderContent>
                    <HeaderContentLogo>
                        <Link href="/">
                                <Image src={require('../../../public/images/Header/HeaderLogo.svg')} alt="Header logo" width={150} height={100}/>              
                        </Link>
                    </HeaderContentLogo>
                    <HeaderContentNav>
                        {navigation.map((element) => {
                            return <Link key={element.id} href={element.ref}>{element.title}</Link>
                        })}
                    </HeaderContentNav>
                    <HeaderContentIcons>
                        <Link href="/">
                            <Image src={require('../../../public/images/Header/HeaderIcon.svg')} height={30} width={30} alt="Header logo" /> 
                        </Link>
                        <Link href="/">
                            <Image src={require('../../../public/images/Header/HeaderIcon2.svg')} height={30} width={30} alt="Header logo" /> 
                        </Link>
                        <Link href="/">
                            <Image src={require('../../../public/images/Header/HeaderIcon3.svg')} height={30} width={30} alt="Header logo" /> 
                        </Link>
                    </HeaderContentIcons>
                </HeaderContent>
            </Wrapper>
        </HeaderBlock>
    )
}

export default Header;

const HeaderBlock = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.15);
`   
const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`   
const HeaderContent = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderContentLogo = styled.div`
`

const HeaderContentNav = styled.div`
    font-size: 18px;
    display: flex;
    column-gap: 60px;
`


const HeaderContentIcons = styled.div`
    display: flex;
    column-gap: 60px;
`

