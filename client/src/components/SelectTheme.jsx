
import { useState } from "react"
import { THEMES } from "../mock-data"



export default function SelectTheme() {
    const [val, setVal] = useState()


    const html = document.querySelector("html");
    html.dataset.theme = val

    return (
        <select onChange={(e) => setVal(e.target.value)} className="select capitalize select-bordered h-full select-sm w-full max-w-xs">

            <option disabled selected>Themes</option>
            {THEMES?.map(theme => (
                <option className="capitalize" key={theme} value={theme}>{theme}</option>
            ))}
        </select>
    )
}
