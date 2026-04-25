export const Menu: React.FC = () => {
return(
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p >Minhas vendas</p>
        <ul className="menu-list">
            <li>
                <a href="#">
                    <span className="icon"></span> Home
                </a>
            </li>
        </ul>
        <ul className="menu-list">
            <li>
                <a href="#">
                    <span className="icon"></span> Cadastros
                </a>
            </li>
        </ul>
        <ul className="menu-list">
            <li>
                <a href="#">
                    <span className="icon"></span> Config
                </a>
            </li>
        </ul>
        
    </aside>
)

}