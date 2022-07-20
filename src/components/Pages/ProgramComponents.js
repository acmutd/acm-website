import '../Pages/ProgramComponents.css';


export const Directors= ({name, image, description}) => {


    return(
        <div className='director' style={{display:'flex', flexDirection: 'row', height: '10%', columnGap: '8%', paddingBottom: '4%'}}>

            <img className='director-image' style={{borderRadius: '50%', maxWidth: '20%'}} src={image}></img>

            <div className='director-text-container' styles={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2 className='director-text' style={{fontSize:'1.3rem', fontWeight: 400, color: '#CACACA'}}>{name}</h2>
                <h2 className='director-text' style={{fontSize:'1rem', fontWeight: 400, color: '#CACACA'}}>{description}</h2>
            </div>

        </div>
    )
}

export const Experience = ({quote, name, image}) => {
    return(

        <div className='experience' >

        </div>
    )
}



// export const WinningProjects = ({}) => {
//     return ()
// }

