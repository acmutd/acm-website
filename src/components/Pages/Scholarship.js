import React from 'react';
import styled from 'styled-components';
import './Scholarship.css';
import img1 from '../../assets/scholarshipPageImage1.png';

export default function Scholarship() {
  return (
    <div className='format'>

        <div className='image-format'>

          <div>
            <h1 className='header'>acm scholarship</h1>

            <Card style= {{ height: "75%", width: "400%" }}>   
              <h2 className='subheading1'>
              We started the "Dr. Gopal Gupta Undergraduate Scholarship for Computer Science 
              established by ACM 2020" in honor of its namesake: Dr. Gopal Gupta served as the 
              Computer Science (CS) department head at UT Dallas from 2009-2020. </h2>
            </Card>
    
          </div>
          
          <img className='scholarship-img'src={img1} alt='group-photo1'/>
          

        </div>

        <div className='body-format'>

          <h2 className= 'subheading2'>
          How do I apply for the scholarship? Deadlines?
          </h2>

          <h1 className = 'body1'>
          Although sponsored by ACM at UTD, this scholarship is now managed fulled by the 
          ECS department. You can learn more about how to apply and thee process for 
          receiving the scholarship from the ECS Scholarships Page You can also find 
          other relevant information like scholarship deadlines and other criteria to 
          be eligible to apply on the ECS scholarships page as well. We insist that if
          you have questions you get in touch directly with the ECS Scholarship Committe. 
          Our team will be unable to resolve any queries you have.
          </h1>

          <h2 className= 'subheading2'>
          Who is this scholarship for?
          </h2>

          <h1 className='body1'>
          Each year, this endowed scholarship will award one student $1k, qualifying it for 
          "competitive scholarship" status. This means that if you are an out of state or 
          international student, you may receive in-state tuition for that year. For this 
          reason, we highly encourage these demographics to apply. In addition to academic 
          excellence, applicants will be preferred if they have demonstrated engagement with 
          any CS student organization at UTD. Note that the scholarship is awarded by a 
          committee appointed by the Jonsson school, and not ACM UTD or Prof. John Cole (our
          faculty sponsor). Please do not get in touch with us on questions regarding this 
          scholarship.
          </h1>

          <h2 className= 'subheading2'>
          What inspired the scholarship?
          </h2>

          <h1 className='body1'>
          Our scholarship wasas inspired by the actions and leadership of Gopal Gupta 
          (CS Dept Head 2009-2020). During this time, the department grew immensely and 
          is now the 3rd largest CS department in the United States. In addition to 
          fostering a culture of undergraduate academic excellence, Dr. Gupta placed 
          a large importance on the role of student organizations within the department 
          and the Erik Jonsson School of Engineering and Computer Science more broadly. 
          One graded assignment for all incoming freshmen in CS is that they attend an 
          event outside of class where they must talk to representatives from many CS 
          student organizations. Furthermore, Dr. Gupta encouraged students to listen 
          in on department meetings, provide feedback on programs within the department, 
          and present goals and events to faculty members. Finally, Dr. Gupta initiated 
          efforts to start HackUTD, a university hackathon, which has grown to be one of 
          the largest in the U.S.
          </h1>



      </div>
    </div>
  )
}

const Card = styled.div`
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(10px);
  border-radius: 20px;
`;