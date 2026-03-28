import CardConditional from "./components/CardConditional"


function Header({ isLogin, setIsLogin }) {
    const headerStyles = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: 'white',
      borderBottom: '1px solid #ddd'
    };
  
    const buttonStyle = {
      color: 'black'
    };
  
    return (
      <header style={headerStyles}>
        <div>интернет магазин</div>
        <div style={buttonStyle}>
          <CardConditional isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
      </header>
    );
  }
  
  export default Header;