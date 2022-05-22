

const Row = (props: {isDiscriptOpen: boolean}) => {
    return(<svg transform={props.isDiscriptOpen ? 'rotate(0)' : 'rotate(180)'} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5L5 1L1 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>)
}

export default Row;