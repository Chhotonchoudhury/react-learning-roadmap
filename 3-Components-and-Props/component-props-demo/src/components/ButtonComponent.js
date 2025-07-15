function ButtonComponent({text}){
    return(
        <button  style={{
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '50px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
  fontWeight: '500',
  cursor: 'pointer'
}}>{text}</button>
    );
}

export default ButtonComponent;