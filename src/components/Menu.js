import '../css/menu.css'

const Menu = (props) => {
    const menu = props.menu
    return (
        <div className='menu'>
            <div>
                <h2>Ipod</h2>
            </div>
            {menu.map(
                (item) => {
                    return (
                        <div>
                            <h2>{item}</h2>
                        </div>
                    )
                }
            )}
            <div>
            </div>
        </div>
    )
}
export default Menu;