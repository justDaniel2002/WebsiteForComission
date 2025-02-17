import LinkButton from "../atoms/LinkButton"
import { KeyIconPair } from "../types/types"

type directions = "horizontal"|"vertical"

type NavbarParam = {
    direction?:directions,
    iconLinks: KeyIconPair[],
}

const Navbar = ({direction, iconLinks}:NavbarParam) => {
    direction = direction||'vertical'

    return (<>
    <div className={`${direction=='horizontal'||'flex'}`}>
        {iconLinks.map((pair) => <div><LinkButton pair={pair}/></div>)}
    </div>
    </>)
}

export default Navbar