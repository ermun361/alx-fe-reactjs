import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
         const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
     };

     const handleSubmit = (e) => {
         e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', message: '' }); // Clear form
     };

    return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '100px' }}
          required
        />
        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>Send Message</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

export default Contact;