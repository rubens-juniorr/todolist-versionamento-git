import styled from "./NavBar.module.css"

export default function NavBar() {
    return (
        <div className={styled.navbar}>
            <div>
                <h2 style={{marginTop: '45px'}}>Organização</h2>
            </div>
            <div >
                <h2 className={styled.navtarefa}>Tarefas</h2>
            </div>
        </div>
    );
}