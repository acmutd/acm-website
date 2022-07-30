import '../Pages/ProgramComponents.css';
import '../Pages/Programs.css';

import projectsQuoteLeft from '../../assets/projects-quote-left.png';
import projectsQuoteRight from '../../assets/projects-quote-right.png';


export const Directors= ({name, image, description}) => {


    return(
        <div className='director'>

            <img className='director-image' src={image}></img>

            <div className='director-text-container'>
                <h2 className='director-text' style={{fontSize:'1.3rem'}}>{name}</h2>
                <h2 className='director-text' style={{fontSize:'1.1rem'}}>{description}</h2>
            </div>

        </div>
    )
}

// const QUOTES = [
//     'projects',
//     'research',
//     'education',
//     'white'
// ]



export const Experience = ({type, quote, name, info}) => {

    // const quotesType = QUOTES.includes(type) ? type : QUOTES[1];

    return(

        <div className='experience'>

            <div>
                <img className='quoteImage' src={projectsQuoteLeft} style={{marginBottom:'120%'}} ></img>
            </div>
            
            <div className='quoteTextContainer' style={{padding: '2%'}}> 
            <h1 className='body1'> {quote} </h1>
            </div>
            

            <div>
            <img className='quoteImage' src={projectsQuoteRight} style={{marginTop:'120%'}}></img>
            </div>
           


        </div>
    )
}



// export const WinningProjects = ({}) => {
//     return ()
// }

