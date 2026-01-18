import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div style={containerStyle}>
      <div style={formCardStyle}>
        <h1 style={headingStyle}>Contact Us</h1>
        <p style={subheadingStyle}>Have questions? We'd love to hear from you.</p>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 20px',
  backgroundColor: '#f9f9f9', 
  minHeight: '80vh'
};

const formCardStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  maxWidth: '500px',
  width: '100%',
  textAlign: 'center'
};

const headingStyle = {
  margin: '0 0 10px 0',
  color: '#2c3e50',
  fontSize: '28px'
};

const subheadingStyle = {
  margin: '0 0 30px 0',
  color: '#7f8c8d',
  fontSize: '16px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  textAlign: 'left'
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#34495e'
};

const inputStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #dcdde1',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.2s'
};

const textareaStyle = {
  ...inputStyle,
  height: '120px',
  resize: 'none'
};

const buttonStyle = {
  padding: '14px',
  backgroundColor: '#3498db', 
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '10px',
  transition: 'background-color 0.3s'
};

export default Contact;