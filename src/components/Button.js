export const Button = ({ color, text, onClick }) => {
    return (
        <button 
            onClick={onClick}
            style={{ background: color, color: "white", padding: "10px", border: "0px", margin: "10px" }}
            className='btn'>
                {text}
        </button>
    )
}

export default Button;