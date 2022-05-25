import styled from 'styled-components'
import { ISizes } from '../../types/types';
import MultiRangeSlider from './HomeSlider';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const HomeFilter: React.FC = () => {
    const { changeCurrentPrice } = useActions();
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const { products, productsMaxPrice, productsMinPrice} = useTypedSelector(state => state.productsReducer);


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
    
    useEffect(() => {
        setMinValue(productsMinPrice);
        setMaxValue(productsMaxPrice);
    }, [products])

    
    return(
        <Filter>
            <FilterContent>
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
                    <MultiRangeSlider min={minValue} max={maxValue} onChange={({ min, max }: { min: number; max: number }) => changeCurrentPrice({min: min, max: max})}/>
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
            </FilterContent>
        </Filter>
    )
}

const Filter = styled.div`
    width: 300px;

    @media (max-width: 1024px) {
        width: 200px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const FilterContent = styled.div`

`
const FilterBrands = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-bottom: 50px;

`
const FilterPrice = styled.div`
    padding-top: 30px;

`
const FilterSizes = styled.div`
    margin-top: 40px;
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
export default HomeFilter;