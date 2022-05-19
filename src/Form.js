import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [people, setPeople] = useState([])

        function handleSubmit(e){
            e.preventDefault()
            // console.log(fullName, email);
            //console.log('hello world');

            if(fullName && email){
                const person ={id: new Date().getTime().toString(), fullName:fullName, email:email, phone:phone}
               console.log(person);
    
                setPeople((people)=>{
                    return [...people, person]
                })
    
                setFullName('')
                setEmail('')
                setPhone('')
    
            }
        }

        //Buttons
        function remove(id){
            let sth = people.filter((person)=>person.id !==id)
            setPeople(sth)
        }

        function clear(){
            setPeople([])
        }

        




        let handleFullName = (e)=>{
            setFullName(e.target.value)
        }

        const handleEmail = function(e){
            setEmail(e.target.value)
        }

        const handlePhone = (e)=>{
            setPhone(e.target.value)
        }


  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
           <div className="form-control">

           <label htmlFor="FullName" >Name :</label>
            <input 
                type="text" 
                id='FullName' 
                value={fullName} 
                onChange={handleFullName}/>
           </div>

           <div className="form-control">
           <label htmlFor="Email" >Email :</label>
            <input 
            type="email" 
            id='Email' 
            value={email} 
            onChange={handleEmail}/>
           </div>


           <div className="form-control">
               <label htmlFor="Tel">Phone :</label>
               <input 
            type="tel" 
            id="Tel" 
            value={phone}
            onChange={handlePhone} />
           </div>

           <button  className='btn' type='submit'>Enter</button>
        </form>

       
        {
            people.map((person)=>{
                //to distructuring
                const {id, fullName, email, phone}= person
                return(
                    <div className='main' key={id}>
                            
                        <h2>{fullName}</h2>
                        <h2>{email}</h2>
                        <h3>{phone}</h3>
                        <button onClick={()=>remove(person.id)}>delete</button>
                    </div>
                    
                )
            })
        }

           <div className="clear"> <button className='clearAll'  onClick={clear}>clearAll</button></div>

    </div>
  )
}

export default Form