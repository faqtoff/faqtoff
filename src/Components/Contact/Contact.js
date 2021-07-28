import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState(null);
  const [subject, setSubject] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = {
      to: 'facutoff@gmail.com',
      subject,
      name,
      email,
      message
    }

    fetch('https://us-central1-faqtoff-ar.cloudfunctions.net/mailer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.status === 200) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
        setSubject('')
        setSuccessMessage('Mensaje enviado con exito! 📬');
      }
      setTimeout(()=> {
        setSuccessMessage(null);
      },5000)
    })
  };
  return (
    <section className="contacto-container container-faqstyle" id="contact">
      <h3 className="title-content">Contactame</h3>
      <div className="formulario">
        <div className="col-fqstyle">
          <h3>Enviame un mensaje!</h3>
          <p>Enviame un mensaje con tu consulta y te respondere lo mas rapido posible. 👋🏼</p>
        </div>
        <div className="col-fqstyle">

          {
            successMessage &&
            (
              <div className="alert alert-success mt-5">
                { successMessage }
              </div>
            )
          }
          <form className='form-shadow'>
            <input className='input input-shadow' type="text" placeholder="Nombre" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input className='input input-shadow' type="text" placeholder="Asunto" name='subject' value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
            <input className='input input-shadow' type="email" placeholder="Email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <textarea className='textarea textarea-shadow' name="mensaje" placeholder="Tu mensaje" name='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button className="btn btn-rounded bg-primary" onClick={handleSubmit}>Enviar</button>
          </form>
        </div>
      </div>
    </section>                  
  )
}

export default Contact
