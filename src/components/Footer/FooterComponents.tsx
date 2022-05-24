import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import FooterIcon1 from '../../../public/images/Footer/FooterIcon1'
import FooterIcon2 from '../../../public/images/Footer/FooterIcon2'
import FooterIcon3 from '../../../public/images/Footer/FooterIcon3'



const FooterComponent: React.FC = () => {
    return(
        <FooterBlock>
            <Wrapper>
                <FooterContent>
                    <FooterIcons>
                        <p>Don’t missout on once-in-a-while-deals:</p>
                        <FooterIconsContent>
                            <span><FooterIcon1/></span>
                            <span><FooterIcon2/></span>
                            <span><FooterIcon3/></span>
                        </FooterIconsContent>
                    </FooterIcons>
                    <FooterPhone>
                        <p>Support line: +250 788 467 808</p>
                    </FooterPhone>
                    <FooterCopyright>
                        <p>Copyright  2021 © Sneaker City ltd</p>
                    </FooterCopyright>
                </FooterContent>
            </Wrapper>
        </FooterBlock>

    )
}

const FooterBlock = styled.div`
    
`

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`

const FooterContent = styled.div`
    padding-bottom: 60px;
    padding-top: 60px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.65);
    font-size: 20px;

    span {
        cursor: pointer;
        padding: 10px;
        background-color: #F5F5F5;
        border-radius: 10px;
        margin-left: 10px;
        margin-top: 10px;
    }

    @media (max-width: 1200px) {
        display: block;
        text-align: center;
    }
`
const FooterIcons = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;

    @media (max-width: 1200px) {
        display: block;
        text-align: center;
    }
    
`
const FooterPhone = styled.div`
    
`
const FooterCopyright = styled.div`
    
`
const FooterIconsContent = styled.div`
`
export default FooterComponent