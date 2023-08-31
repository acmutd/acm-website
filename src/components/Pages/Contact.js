import "../../components/Pages/Contact.css"
import peechi from "../../assets/peechi.svg"
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
const Contact = ({purpose, email, address, contact,subject,body}) => {
    return(
        <div className = "main-container">
            <div className="peechi-container">
            <h2 className="contact">{purpose}</h2> 
             <div className="info"> 
             <img src= {peechi} alt="peechi"></img>
            </div>  
            <div className="info" style={{display: "flex", padding: "10px", justifyContent: "space-between"}}>
                <div className="info-us">
            <MdOutlineEmail size= "2.5vh" />
                <a href={`mailto:${email}?subject=${{subject}}&body=${{body}}`} style={{color: "white",textDecoration: "none" }}>
                {email}
                </a>
                </div>
                <div className="info-us">
                <MdLocationOn size="2.5vh" /> 
                <a style={{color: "white",textDecoration: "none" }} href="https://www.google.com/maps/place/800+W+Campbell+Rd,+Richardson,+TX+75080/@32.9859909,-96.7501315,17z/data=!4m5!3m4!1s0x864c21c87d2e71df:0xb16361086e68de4d!8m2!3d32.9859909!4d-96.7501315">
                {address}
                </a>
                </div> 
                </div>
            <div className="info" style={{display: "flex"}}>
                </div>
                </div>

<div className="form-container">
                    <form className='form'>
            <div className= "form-control">
            <h4 style={{color: "white", marginTop: "5%", marginBottom: "5%"}}>{contact}</h4>
                <label style={{color: "white"}}>name: </label>
                <input type="text" placeholder="Mr.Peechi" className="btn"></input> 
            </div>
            <div className= "form-control">
                <label style={{color: "white"}}>email: </label>
                <input type="text" placeholder="mrpeechi@gmail.com" className="btn"></input> 
            </div>
            <div className= "form-control">
                <label style={{color: "white"}}>message: </label>
                <textarea type="text" placeholder="" className='btn btn-message'></textarea> 
            </div>
            <div className="form-control">
                <input type= "submit" value="Send Email" />
            </div>
        </form>
        </div>  
        </div>
    )
}

Contact.defaultProps = {
    purpose: "contact us",
    email: " contact@acmutd.co",
    address: " 800 West Campbell Rd",
    contact: "Have any questions, want to sponsor us, or just want to say hi? Send us a message",
    subject: "hey",
    body: "you guys rock :)"
}


export default Contact