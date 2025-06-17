import './menu.style.scss'
import { MdDownload, MdList } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

import { useEffect, useRef, useState } from 'react';

function Menu() {

    const menuPanel = useRef(null)
    const buttonMenuIcon = useRef(null)

    const [isMenuPanelOpen, setMenuPanelOpen] = useState(false)

    const handleMenuButtonClick = () => {
        setMenuPanelOpen((isMenuPanelOpen) => !isMenuPanelOpen)
    }

    useEffect(() => {
        function handleMenuClickOutside(event) {
            if (!menuPanel.current?.contains(event.target) && !buttonMenuIcon.current?.contains(event.target))
                setMenuPanelOpen(false)
        }
        document.addEventListener('mousedown', handleMenuClickOutside);
        return () => document.removeEventListener('mousedown', handleMenuClickOutside);
    }, []);

    useEffect(() => {
        menuPanel.current.style.display = isMenuPanelOpen ? 'flex' : 'none'
    }, [isMenuPanelOpen])

    return (
        <nav className="menu__container">

            <button className="menu__container_list_icon" ref={buttonMenuIcon} onClick={handleMenuButtonClick}>
                <MdList size={48} color="white" />
                Menu
            </button>
            <div className="menu__container_list_panel" ref={menuPanel}>
                <a href="#cover" className="menu__container_list_panel-item">Home</a>
                <a href="#aboutme" className="menu__container_list_panel-item">About me</a>
                <a href="#experience" className="menu__container_list_panel-item">Experience</a>
                <a href="#projects" className="menu__container_list_panel-item">Projects</a>
                <a href="#participations" className="menu__container_list_panel-item">Participations</a>
                <a href="#technologies" className="menu__container_list_panel-item">Technologies</a>
            </div>

            <div className="menu__container_list">
                <a href="#cover" className="menu__container_list-item">Home</a>
                <a href="#aboutme" className="menu__container_list-item">About me</a>
                <a href="#experience" className="menu__container_list-item">Experience</a>
                <a href="#projects" className="menu__container_list-item">Projects</a>
                <a href="#participations" className="menu__container_list-item">Participations</a>
                <a href="#technologies" className="menu__container_list-item">Technologies</a>
            </div>

            <div className="menu__container_info">
                <a className="menu__container_info_github" href="https://github.com/redfieldfire">
                    <FaGithub size={24} color="white" />
                </a>
                <a className="menu__container_info_download-cv" href="https://drive.google.com/file/d/1ZJgD9kbIlj0HW8-_xE0BPjZky12dGl0n/view?usp=sharing">
                    <MdDownload size={24} color="white" />
                    Curriculum
                </a>
            </div>
            

        </nav>
    )
}

export default Menu