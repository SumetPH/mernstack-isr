import React, { Component } from 'react'
import Navbar from '../components/navbar/Navbar'
import Loading from '../components/loading/Loading'

import I360 from '../components/is/i360'
import Lesson from '../components/is/lesson'
import Instructor from '../components/is/instructor'
import Image from '../components/is/image'

class Is extends Component {
   // state
   state = {
      loadPage: false
   }

   // method
   componentDidMount = () => {
      setTimeout(() => {
         this.setState({ loadPage: true })
      }, 1000)
   }

   render() {
      return (
         <div>
            {/* <NavbarSide /> */}
            {this.state.loadPage ? (
               <div className="section-back">
                  <Navbar color="is-dark" />
                  <div className="section-front">
                     <div className="container">
                        <div
                           className="column has-text-centered"
                           style={{ padding: '5rem' }}>
                           <h3 className="title is-3 has-text-light">
                              Information System
                           </h3>
                           <h3 className="subtitle is-4 has-text-light animated shake delay-5s">
                              ระบบสาระสนเทศทางคอมพิวเตอร์ พัฒนาซอฟต์แวร์
                           </h3>
                        </div>
                        <I360 />
                        <hr />
                        <Lesson />
                        <hr />
                        <Instructor />
                        <hr />
                        <Image />
                     </div>
                  </div>
               </div>
            ) : (
               <Loading bg="#363636" color="white" zIndex="-1" />
            )}
         </div>
      )
   }
}

export default Is