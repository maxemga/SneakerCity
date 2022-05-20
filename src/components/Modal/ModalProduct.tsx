import styled from 'styled-components'
import Image from 'next/image'
import { ISizes } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Like } from '../../../public/images/Modal/modalIcon'
import { Minus } from '../../../public/images/Modal/minus'
import { Plus } from '../../../public/images/Modal/plus'


const ModalProduct: React.FC= () => {
    const [count, setCount] = useState<number>(1);
    const [isLike, setIsLike] = useState<boolean>(false);
    const [isDiscriptOpen, setIsDiscriptOpen] = useState<boolean>(false);
    const productsSelect = useSelector((state: any) => state.productsReducer);

    const sizes: ISizes[] = [
        {id: 1, title: '32'},
        {id: 2, title: '33'},
        {id: 3, title: '34'},
        {id: 4, title: '35'},
        {id: 5, title: '36'},
        {id: 6, title: '37'},
        {id: 7, title: '38'},
        {id: 8, title: '39'},
        {id: 9, title: '40'},
    ]


    return(
        
        <Modal>
            <ModalContent>
                <ModalImage>
                    <ModalImageTitle>
                        <h2>{productsSelect.products[productsSelect.currentId].title}</h2>
                        
                        <Like setIsLike={setIsLike} isLike={isLike}/>
                    </ModalImageTitle>
                    <ModalImagePrice>{productsSelect.products[productsSelect.currentId].price}</ModalImagePrice>
                    <ModalImageIcon>
                        <Image
                            src={productsSelect.products[productsSelect.currentId].image}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            objectFit={'contain'}

                        />
                    </ModalImageIcon>
                </ModalImage>
                <ModalInfo>
                    <ModalInfoDescription>
                        <div onClick={() => setIsDiscriptOpen(!isDiscriptOpen)}>
                            <h3>Description</h3>
                            <Image
                            src={require('./../../../public/images/Modal/modalRowDown.png')}
                            alt="Picture of the author"
                            width={15}
                            height={15}
                            objectFit={'contain'}
                            />
                        
                        </div>
                        {isDiscriptOpen ? <p>{productsSelect.products[productsSelect.currentId].description}</p> : null}
                    </ModalInfoDescription>
                    <ModalInfoSize>
                        <h3>Select size</h3>
                        <ModalInfoSizeElements>
                        
                            {sizes && sizes.map((element) => {
                                return <ModalInfoSizeElement key={element.id}>
                                            <p>{element.title}</p>
                                        </ModalInfoSizeElement>
                            })}

                        </ModalInfoSizeElements>
                    </ModalInfoSize>
                    <Flex1/>
                    <ModalInfoAdd>
                        <Minus count={count}  setCount={setCount}/>
                        <ModalAddField>{count}</ModalAddField>
                        <Plus count={count} setCount={setCount}/>
                        <ModalAddButton>Add to cart</ModalAddButton>
                    </ModalInfoAdd>
                </ModalInfo>
            </ModalContent>
        </Modal>
    )
}



const Modal = styled.div`
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const ModalContent = styled.div`
    display: flex;
`

const ModalImage = styled.div`
    padding: 80px 65px;
    background-color: #F5F5F5;
    width: 900px;
`

const ModalImageIcon = styled.div`
    align-self: center;
    
`


const ModalImageTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-weight: 700;
        font-size: 36px;
        margin: 0;
    }

`

const ModalImagePrice = styled.p`
    color: rgba(0, 0, 0, 0.65);
    font-size: 20px;
`
const ModalInfo = styled.div`
    width: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-left: 65px;
    padding-right: 65px;
    padding-bottom: 100px;
`

const ModalInfoDescription = styled.div`
    p {
        color: rgba(0, 0, 0, 0.65);
        line-height: 24px;
        width: 100%;
    }

    div {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
   
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 20px;
`

const ModalInfoSize = styled.div`

`

const ModalInfoSizeElements = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px 15px;
`

const ModalInfoSizeElement = styled.div`
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    p {
       
        color: rgba(0, 0, 0, 0.65);
        font-size: 18px;
        text-align: center;
    }
`

const ModalInfoAdd = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`

const ModalAddField = styled.p`
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 20px;
    border-radius: 8px;
    margin: 0;
    line-height: 0;

`
const ModalAddButton = styled.button`
    background-color: #D90429;
    color: white;
    border: none;
    outline: none;
    padding: 20px 30px;
    font-weight: bold;
    font-size: 20px;
`

const Flex1 = styled.div`
    flex: 1;
`

export default ModalProduct;