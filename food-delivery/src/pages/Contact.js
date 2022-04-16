import React from 'react'
import ImageDeco from '../assets/fooda.jpeg'
import '../style/contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${ImageDeco})`}}></div>
        <div className='rightSide'>
            <h1>Contactanos</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor='name'> Nombre Completo</label>
                <input name="name" type="text" placeholder='Nombre'/>
                <label htmlFor='email'>Correo Electronico</label>
                <input name="email" type="email" placeholder="correo@correo.com"/>
                <label htmlFor="message">Mensaje</label>
                <input name="message" type="textbox" placeholder='Ingrese su mensaje aqui'/>
                <button type='submit'>Enviar Mensaje</button>
            </form>
        </div>
    </div>
  )
}

export default Contact