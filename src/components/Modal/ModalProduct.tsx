import styled from 'styled-components'
import Image from 'next/image'
import { ISizes } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Like } from '../../../public/images/Modal/modalIcon'
import { Minus } from '../../../public/images/Modal/minus'
import { Plus } from '../../../public/images/Modal/plus'
import Row from '../../../public/images/Modal/modalRow'
import { hideModalProduct } from '../../store/reducers/modalReducer'
import { addProductsBasket } from '../../store/reducers/productsReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ModalProduct: React.FC= () => {
    const [count, setCount] = useState<number>(1);
    const [isLike, setIsLike] = useState<boolean>(false);
    const [isDiscriptOpen, setIsDiscriptOpen] = useState<boolean>(true);
    const products = useSelector((state: any) => state.productsReducer.products);
    const productsBasket = useSelector((state: any) => state.productsReducer.productsBasket);
    const position = useSelector((state: any) => state.productsReducer.currentPosition);
    const dispatch = useDispatch();

    const sizes: ISizes[] = [
        {id: 1, title: 32},
        {id: 2, title: 33},
        {id: 3, title: 34},
        {id: 4, title: 35},
        {id: 5, title: 36},
        {id: 6, title: 37},
        {id: 7, title: 38},
        {id: 8, title: 39},
        {id: 9, title: 40},
    ]

    const fun = () => {
        toast.success('Product added', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // let s = productsBasket.find((el: any) => el.id == products[position].id - 1);
        isInArray() == undefined ? dispatch(addProductsBasket({position: products[position].id - 1, count: count})) : null;
        console.log(isInArray());
    }

    const isInArray = () => {
        return productsBasket.find((el: any) => el.id == products[position].id - 1);
    }

    return(
        <>
        <Modal>
            <ModalContent>
                <ModalImage>
                    <ModalImageTitle>
                        <ModalCross onClick={() => dispatch(hideModalProduct())}>
                            <span></span>
                        </ModalCross>
                        <h2>{products[position].title}</h2>
                        
                        <Like setIsLike={setIsLike} isLike={isLike}/>
                    </ModalImageTitle>
                    <ModalImagePrice>{products[position].price}$</ModalImagePrice>
                    <ModalImageIcon>
                    <button onClick={() => console.log(productsBasket)}>fF</button>
                        <Image                      
                            src={products[position].image}
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
                            <Row isDiscriptOpen={isDiscriptOpen}/>
                        </div>
                        {isDiscriptOpen ? <p>{products[position].description}</p> : null}
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
                        <ModalAddButton onClick={() =>fun()}>Add to cart</ModalAddButton>
                    </ModalInfoAdd>
                    
                </ModalInfo>
            </ModalContent>
        </Modal>
        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        </>
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

const ModalCross = styled.div`
    cursor: pointer;
    position: absolute;
    top: -40px;
    left: -40px;

    height: 50px;
    &:before, &:after {
        content: ""; 
        position: absolute; 
        width: 35px; 
        height: 8px; 
        background: #B2B2B2;
        border-radius: 5px;
    };
    &::before {
        transform: rotate(45deg)
    };
    &::after {
        transform: rotate(-45deg)
    };
`

const ModalContent = styled.div`
    display: flex;
    @media (max-width: 1200px) {
        display: block;
    }
    
`

const ModalImage = styled.div`
    padding: 80px 65px;
    background-color: #F5F5F5;
    width: 900px;

    @media (max-width: 1600px) {
        width: 700px;
    }
    @media (max-width: 1200px) {
        width: 500px;
    }
`

const ModalImageIcon = styled.div`
    align-self: center;
    
`


const ModalImageTitle = styled.div`
    position: relative;
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

    @media (max-width: 1200px) {
        width: 500px;
        padding-bottom: 50px;
    }
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
    padding-top: 15px;

    
`

const ModalInfoSizeElements = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px 15px;

    @media (max-width: 1200px) {
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
    cursor: pointer;
    background-color: #D90429;
    color: white;
    border: none;
    outline: none;
    padding: 20px 30px;
    font-weight: bold;
    font-size: 20px;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
        transition: 0.3s;
    }
`

const Flex1 = styled.div`
    flex: 1;
`

export default ModalProduct;