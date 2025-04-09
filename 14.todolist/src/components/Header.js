const Header = () => {
    return (
        <div className='Header'>
            <h2>TODOLIST</h2>
            <h3>{new Date().toDateString()}</h3>
        </div>
    )
}
export default Header;