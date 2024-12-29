import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Partner from '../components/Partner'
import Contact from '../components/Contact'

import { homeSection } from '../data/HomeSection'
import { courseSection } from '../data/CourseSection'
import { tutorSection, tutorsList } from '../data/TutorSection'
import { partnesSection, partnersList } from '../data/PartnerSection'
import { contactSection } from '../data/ContactSection'







import parse from 'html-react-parser'
import '../styles/Home.css'


function Home() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>

        {/* home */}
        <section id="home">
                <img src={homeSection.image}/>
                <div className="kolom">
                   {parse(homeSection.content)}
                </div>
            </section>

        {/* online course */}

        <section id="courses">
            <div className="kolom">
            {parse(courseSection.content)}   
            </div>
            <img src={courseSection.image}/>
        </section>

         {/* tutor course */}
         <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorSection.content)}
                </div>

                  <Tutors tutorList ={tutorsList}/> 
                
            </div>
        </section>

         {/* pertner */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnesSection.content)}
                </div>
                <Partner partnerList = {partnersList}/>
            </div>
        </section>

      </div>
      <Contact contactSection = {contactSection}/>
      <Footer />
    </>
  )
}

export default Home
