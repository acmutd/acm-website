import '../Pages/ProgramComponents.css';
import '../Pages/Programs.css';

import projectsQuoteLeft from '../../assets/projects-quote-left.png';
import projectsQuoteRight from '../../assets/projects-quote-right.png';

import githubWhite from '../../assets/socialMedia/githubWhite.png';
import youtubeWhite from '../../assets/socialMedia/youtubeWhite.png'


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



export const WinningProjects = ({image, name, githubLink, youtubeLink, description, members, pm}) => {
    return (
        <div className='grid'>
            <div className='grid-item1'>
                <div>
                {image}
                </div>
                
            </div>
            <div className='grid-item2'>
                <h1 style={{color:'#CACACA', fontSize:'1.3rem', fontWeight:'500', lineHeight:0}}>{name}</h1>
                
            </div>
            <div className='grid-item3'>

                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <div>
                        <a href={'https://github.com/'}>
                        <img src={githubWhite} style={{maxWidth:'80%'}}></img>
                        </a>
                    </div>
                    <div>
                        <a href={'https://github.com/'}>
                        <img src={youtubeWhite} style={{maxWidth:'80%'}}></img>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className='grid-item4'>
                <h2 style={{color:'#9C9C9C', fontSize:'1rem', fontWeight: '300'}}>{description}</h2>
                
            </div>
            <div className='grid-item5'>
                <h2 style={{color:'#CACACA', fontSize:'1rem', fontWeight: '400', lineHeight:0}}>members: {members}</h2>
                <h2 style={{color:'#CACACA', fontSize:'1rem', fontWeight: '400', lineHeight:'0.8rem'}}>project manager: {pm}</h2>
  
            </div>
        </div>
    )
}

