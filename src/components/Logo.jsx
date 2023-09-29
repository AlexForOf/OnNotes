import {HiClipboardCheck} from "react-icons/hi"

export const Logo = () => {
    return (
        <div className='logo' 
        style={{
            display: "flex",
            alignItems: "center"
        }}
        >
            <HiClipboardCheck size={30}/>
            <h2 className='logo-text' 
            style={{
                lineHeight: "30px"
            }}
            >
                <span className='logo-font-darker'>On</span><span className='logo-font-brighter'>Note</span>
            </h2>
        </div>
    )
}