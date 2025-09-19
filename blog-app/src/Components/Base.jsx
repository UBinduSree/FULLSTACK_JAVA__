export default function Head({darkMode}){
    return <h1 style={{color: darkMode ? "#ddd" : "#333"}} >My Blog Application</h1>
}
export function Footer(darkMode){
    return <h4 style={{color: darkMode ? "#ddd" : "#333"}}>@copyrights-Bindu</h4>
}