 import claudeIcone from '../assets/chef-claude-icon.png'
 
 function Header() { 
    return ( 
   <header className='headerBox'>
         <img  className='claudeIcon'   src={claudeIcone} alt="cooker icone" />
         <h1>Chef Claude</h1>
         
   </header>
  )
 }

 export default Header