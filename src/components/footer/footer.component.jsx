import './footer.style.scss'
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

export function Footer() {

    return(
        <footer>
            <div className="footer_section_contact">
                <label className='footer_section_contact-title'>Contact</label>
                <ul className='footer_section_contact_details'>
                    <li className='footer_section_contact_details-item'>
                        <a href="mailto:christophersernaflores@gmail.com">christophersernaflores@gmail.com</a>
                    </li>
                    <li className='footer_section_contact_details-item'>+52 636 106 6566</li>
                    <li className='footer_section_contact_details-item'>Chihuahua, Mexico.</li>
                </ul>
            </div>
            <div className="footer_section_social">
                <label className='footer_section_social-title'>Social Media</label>
                <ul className='footer_section_social_details'>
                    <li className='footer_section_social_details-item'>
                        <a href="https://www.linkedin.com/in/christopher-serna-flores-1797b725b/">
                            <FaLinkedin size={24} color="white" />
                        </a>
                    </li>
                    <li className='footer_section_social_details-item'>
                        <a href="https://www.facebook.com/christopher.sernaflores.3/">
                            <FaFacebook size={24} color="white" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )

}

export default Footer