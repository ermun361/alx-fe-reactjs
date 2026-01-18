function Services() {
  const servicesList = [
    { title: 'Technology Consulting', desc: 'Modernizing your tech stack.' },
    { title: 'Market Analysis', desc: 'Understanding your industry trends.' },
    { title: 'Product Development', desc: 'Bringing your ideas to life.' }
  ];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#f4f8fc' }}>Our Services</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {servicesList.map((service, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            width: '250px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ color: '#3498db' }}>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;