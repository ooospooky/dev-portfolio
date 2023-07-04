import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export const Contact = () => {

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_d49m74o', 'template_kvdlecf', {
      name: name,
      content: content
    }, 'aTBJM00DT9GDdbq16')  
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // 在发送成功后，您可以重置表单字段
        setName('');
        setContent('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
