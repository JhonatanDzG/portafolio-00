import React from "react"

import "./Contact.css"

export default function Contact(){
return(
   <div className="contact-container">
        <h1>Contact</h1>
        <p>Puedes contactarme utilizando el formulario a continuación o a través de los siguientes métodos:</p>
      <ul>
        <li>G-mail: jhonatandzg@gmail.com</li>
        <li>Teléfono: +57 3128894825</li>
        <li>Dirección: Popayan-Cauca, Portal de la Colina, manzana B casa #     22</li>
      </ul>
      <form className="contact-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
)

}