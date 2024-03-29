function NavBar(){
  return ( 
    <div className='lg:p-10 '>
        <nav className='fixed  lg:flex lg:justify-between lg:p-5 bg-slate-50 rounded-md items-center'>
          <div>
              lOGO
          </div>
          <ul className='lg:flex lg:gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>FAQ</li>
            <li>Blogs</li>
          </ul>
          <button className='px-8 py-3 text-slate-50 bg-blue-500 rounded-md'>
            Contact us
          </button>
        </nav>
        
    </div>
   );
}
 
export default NavBar;