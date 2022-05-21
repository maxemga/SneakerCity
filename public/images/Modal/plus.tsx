
export const Plus=(props: any)=>{

    return(<svg onClick={() => props.setCount(props.count + 1)} cursor={'pointer'} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3.75V14.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.75 9H14.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    

)
}
