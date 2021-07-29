import React, { useState } from 'react';

const Contact = ({btnClassName}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [subject, setSubject] = useState('');
  const [nameValidate, setNameValidate] = useState('');
  const [emailValidate, setEmailValidate] = useState('');
  const [subjectValidate, setSubjectValidate] = useState('');
  const [messageValidate, setMessageValidate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name&&message&&subject&&email)){
      setNameValidate('');
      setSubmitted(true);
      let data = {
        to: 'facutoff@gmail.com',
        subject,
        name,
        email,
        message
      };
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
          setName('');
          setEmail('');
          setMessage('');
          setSubject('');
          setSuccessMessage('Mensaje enviado con exito! 📬');
          setTimeout(()=> {
            setSuccessMessage(null);
            setSubmitted(false);
          },5000)
        }
        else if (res.status === 400) {
          setSubmitted(false);
        }
      })
    } else {
      name?setNameValidate(''): setNameValidate('validate');
      message?setMessageValidate(''): setMessageValidate('validate');
      email?setEmailValidate(''): setEmailValidate('validate');
      subject?setSubjectValidate(''): setSubjectValidate('validate');
    }

  };
  return (
    <section className="contacto-container container-faqstyle" id="contact">
      <h3 className="title-content">Contactame</h3>
      <div className="formulario">
        <div className="col-fqstyle">
          <h3>Enviame un mensaje!</h3>
          <p>Enviame un mensaje con tu consulta y te respondere lo mas rapido posible 👋🏼</p>
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
            <input className={'input input-shadow '+nameValidate} type="text" placeholder="Nombre" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input className={'input input-shadow '+subjectValidate} type="text" placeholder="Asunto" name='subject' value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
            <input className={'input input-shadow '+emailValidate} type="email" placeholder="Email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <textarea className={'textarea textarea-shadow '+messageValidate} name="mensaje" placeholder="Tu mensaje" name='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            {!submitted&&<button className={"btn btn-rounded "+btnClassName} onClick={handleSubmit}>Enviar</button>}
          </form>
        </div>
      </div>
    </section>                  
  )
}

export default Contact
