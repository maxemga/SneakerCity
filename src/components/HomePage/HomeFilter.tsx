import styled from 'styled-components'
import { useEffect, useState } from 'react';

const HomeFilter: React.FC<{ rtl: boolean }> = ({ rtl }) => {
    const [values, setValue] = useState<number[]>([100])

    useEffect(() => {
        console.log(values)
    }, [values])
    return(
        <Filter>
            <FilterContent>
                <FilterBrands>
                    <h2>Brand</h2>
                    <FilterBrandsInput>
                        <div>
                            <Input type="checkbox" id="scales" name="scales"/>
                            <Label htmlFor='scales'>Nike</Label>
                        </div>
                        <div>
                            <Input type="checkbox" id="scales" name="scales"/>
                            <Label htmlFor='scales'>Jordan</Label>
                        </div>
                        <div>
                            <Input type="checkbox" id="scales" name="scales"/>
                            <Label htmlFor='scales'>Adidas</Label>
                        </div>
                        <div>
                            <Input type="checkbox" id="scales" name="scales"/>
                            <Label htmlFor='scales'>Fila</Label>
                        </div>
                        <div>
                            <Input type="checkbox" id="scales" name="scales"/>
                            <Label htmlFor='scales'>Gucci</Label>
                        </div>
                        <div>
                            <Input type="checkbox" id="scales" name="scales"/>
                            <Label htmlFor='scales'>Balenciaga</Label>
                        </div>
                    </FilterBrandsInput>
                </FilterBrands>
                <FilterPrice>
                    <h2>Price range</h2>
                    


                </FilterPrice>
                <FilterSizes>

                </FilterSizes>
            </FilterContent>
        </Filter>
    )
}

const Filter = styled.div`
    width: 300px;
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