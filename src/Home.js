import React from 'react'
import Form from './Form'
import vid1 from './Globe - 6269.mp4'


const Home = () => {
  return (
    <div>
        <h2>Welcome to Blard's Home Page</h2>
        <marquee behavior="" direction="left">www.blard.com</marquee>
       <div className="vid">
       <video  autoPlay loop muted>
         <source src={vid1} type="video/mp4" />
         
       </video>
       
       </div>
        <div className="homeMain">
          
            <div className="contentP">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, odio alias officiis eveniet magnam aperiam reprehenderit suscipit, nesciunt voluptates voluptas, voluptatem doloribus qui ea hic eos eaque laudantium autem maiores consequatur. Numquam, impedit voluptas deserunt consequatur, illo eum dolorum expedita quis laudantium dolor consequuntur! Excepturi eaque eveniet facilis fugiat. Repellat vel culpa, tempora, eos explicabo laborum quam ullam ex fuga ipsum at, magni harum. Excepturi temporibus modi eos quaerat illum possimus quibusdam cupiditate, saepe officia, maxime eligendi natus voluptatem nemo doloremque soluta magni alias pariatur, odit vitae dicta voluptas eaque animi quo porro! Voluptas reprehenderit at, </p>
              <p>
              facere ex repellendus atque illum assumenda officiis laborum fuga aut facilis voluptatem. Sint voluptate, veniam, beatae laudantium obcaecati perferendis aspernatur illum nostrum, quasi dolore unde consequuntur ullam corrupti ad tempore blanditiis sequi quo. Earum est adipisci voluptatibus id quod, quidem tempore possimus labore ea eligendi saepe numquam, nihil laudantium ex suscipit libero ad voluptas fugiat totam obcaecati? Laudantium necessitatibus maiores et sequi doloribus sunt, quia totam sapiente, reiciendis itaque exercitationem deserunt dignissimos eius, odio cupiditate hic esse incidunt tempora. Quisquam beatae magni fugiat inventore aliquid odio enim veritatis odit delectus dolore quibusdam perspiciatis molestias soluta minus voluptates provident, maiores vitae architecto atque non. Exercitationem?
              </p>

            </div>
            
            <div className="contentForm">
            <h3>Login</h3>
              <Form/>

            </div>


        </div>


        
    </div>
  )
}

export default Home