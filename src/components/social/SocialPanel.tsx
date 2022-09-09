import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const SocialPanel = () => {

    const redirect = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className="w-4/5 lg:w-2/5 md:w-3/5 sm:w-4/5 h-[4rem] min-h-[4rem] p-3 rounded-2xl bg-white/[.04] shadow-[1px_1px_10px_10px_rgba(0,0,0,0.1)] backdrop-blur-md">
            <div className="flex flex-row items-center justify-evenly w-full h-full">
                <FontAwesomeIcon
                    onClick={() => redirect('https://www.linkedin.com/in/adam-svoboda-36333a234/')}
                    icon={faLinkedinIn}
                    className="text-[#0077B5] cursor-pointer"
                    size='xl'
                />

                <FontAwesomeIcon
                    onClick={() => redirect('https://github.com/liberatos278')}
                    icon={faGithub}
                    className="text-[#D3D3D3] cursor-pointer"
                    size='xl'
                />

                <FontAwesomeIcon
                    onClick={() => redirect('https://discord.com/users/471020198040829953')}
                    icon={faDiscord}
                    className="text-[#5865F2] cursor-pointer"
                    size='xl'
                />

                <FontAwesomeIcon
                    onClick={() => redirect('https://www.instagram.com/ad.svoboda/')}
                    icon={faInstagram}
                    className="text-[#E1306C] cursor-pointer"
                    size='xl'
                />
            </div>
        </div>
    )
}

export default SocialPanel