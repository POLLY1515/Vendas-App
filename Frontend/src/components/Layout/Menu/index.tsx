
import Link from 'next/link'

export const Menu: React.FC = () => {
return(
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p>
            Minhas vendas
            </p>
        <ul className="menu-list">
           <MenuItem  href='/' label='Home'/>
            <MenuItem  href='/' label='Cadastros'/>
             <MenuItem  href='/' label='Config'/>
        </ul>
    </aside>
    )

}

interface MenuItemProps{
    href: string; /*Pra onde vai*/ 
    label:string; /*Texo que vai aparecer*/ 
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return(
        <li>   
             <Link href={props.href}>
                <a>
                    <span className="icon"></span> {props.label}
                </a>
                </Link>
        </li>
    )
}