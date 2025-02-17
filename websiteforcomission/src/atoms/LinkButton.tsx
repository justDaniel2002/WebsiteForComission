import { useState } from "react";
import { KeyIconPair } from "../types/types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

type LinkButtonParam = {
    pair: KeyIconPair
}
const LinkButton = ({ pair }: LinkButtonParam) => {
    const [contentState, setContentState] = useState(false)
    return <>

        <Link onMouseEnter={() => setContentState(true)}
            onMouseLeave={() => setContentState(false)}
            to={pair.link} className="my-5 mx-7 flex">
            <Icon icon="material-symbols:error" className="mr-5" />
            {contentState || <span className={`transition-all duration-500 ease-in-out
                    ${contentState
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-5"
                }`}>{pair.content}</span>}
        </Link>
    </>
}

export default LinkButton