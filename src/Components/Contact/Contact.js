import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
          name,
          email,
          message
        }

        console.log(name, email, message)

        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
            }
        })
    }
    return (
        <section className="contacto-container container-faqstyle" id="contact">
                <h3 className="title-content">Contactame</h3>
                <div className="formulario">
                <div className="col-fqstyle">
                    <h3>Enviame un mensaje!</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis et ab aut, repellendus quia facere animi doloremque fugiat magnam. Dolor accusantium, labore non possimus doloribus dolorum praesentium nobis culpa tenetur?</p>
                </div>
                <div className="col-fqstyle">
                    <form className='form-shadow' action="">
                        <input className='input input-shadow' type="text" placeholder="Nombre" name='name' onChange={(e)=>{setName(e.target.value)}}/>
                        <input className='input input-shadow' type="email" placeholder="Email" name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                        <textarea className='textarea textarea-shadow' name="mensaje" id="" placeholder="Tu mensaje" name='message' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                        <button className="btn btn-rounded bg-primary" onClick={handleSubmit}>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
                        
    )
}

export default Contact
