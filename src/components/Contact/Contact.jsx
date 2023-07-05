import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export const Contact = () => {

  const [name, setName] = useState('');
  const [email,setEmail] = useState('')
  const [content, setContent] = useState('');
  const [haveSubmit,setHaveSubmit] = useState(true)
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_d49m74o', 'template_kvdlecf', {
      name: name,
      email:email,
      content: content
    }, 'aTBJM00DT9GDdbq16')  
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setHaveSubmit(!haveSubmit);
        setName('');
        setEmail('');
        setContent('');
        
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  if(haveSubmit){
    return (
      <section className="haveSubmit" id="contact">
        <h2 className='haveSubmit__h2'>Thanks for reaching out!</h2>
      <p className='haveSubmit__p'>Your form submission has been received.</p> 
      </section>
    )
  }
  return (
    <section id="contact" className="contact">
      <h2 className='contact__h2'>Contact</h2>
      <p className='contact__p'>I'm actively seeking new opportunities. However, even if you don't have a job offer for me, I would appreciate it if you could drop by just to say hi! Additionally, please don't hesitate to provide any feedback or recommendations you may have.</p>
      <form onSubmit={onSubmit} className='contactForm'>
        <input
          className="form-input input"
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input required type="email" name="email" className="input" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <textarea required name="message" rows="6" className="input" placeholder="Type some message" value={content} onChange={(e) => setContent(e.target.value)} />
      

        <button  className="cta-btn cta-btn--hero contactForm__btn" type="submit">Submit</button>
      </form>
    </section>
  )
}
