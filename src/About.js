import React from 'react'
import vid1 from './Animate - 27709.mp4'
// import vid2 from './Anime - 84574.mp4'
// import vid3 from './Atoms - 13232.mp4'
// import vid4 from './Candle - 1437.mp4'
// import vid5 from './Earth - 4788.mp4'
// import vid6 from './Globe - 6269.mp4'

const About = () => {
  return (
    <div>
        <h2>About Component</h2>
          <div className='vidFlex'>

            <div className="vidd">
              <video autoPlay loop muted>
                <source src={vid1} type="video/mp4" />
              </video>
            </div>
            {/* <div className="vidd">
              <video autoPlay loop muted>
                <source src={vid2} type="video/mp4" />
              </video>
            </div> */}
            {/* <div className="vidd">
              <video autoPlay loop muted>
                <source src={vid3} type="video/mp4" />
              </video>
            </div>
            <div className="vidd">
              <video autoPlay loop muted>
                <source src={vid4} type="video/mp4" />
              </video>
            </div>
            <div className="vidd">
              <video autoPlay loop muted>
                <source src={vid5} type="video/mp4" />
              </video>
            </div>
            <div className="vidd">
              <video autoPlay loop muted>
                <source src={vid6} type="video/mp4" />
              </video>
            </div> */}


          </div>


    </div>
  )
}

export default About