import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const SocialPanel = () => {

    const redirect = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <motion.div
            className="w-5/6 lg:w-2/5 md:w-3/5 sm:w-5/6 h-[4rem] min-h-[4rem] p-3 rounded-2xl bg-white/[.04] shadow-[1px_1px_10px_10px_rgba(0,0,0,0.1)] backdrop-blur-md"
            initial={{ y: '50px', visibility: 'hidden' }}
            animate={{ y: 0, visibility: 'visible' }}
            transition={{ duration: 0.6, type: "spring", delay: 3.5 }}
        >
            <div className="flex flex-row items-center justify-evenly w-full h-full">
                <FontAwesomeIcon
                    onClick={() => redirect('https://www.linkedin.com/in/adam-svoboda-36333a234/')}
                    icon={faLinkedinIn}
                    className="text-[#0077B5] cursor-pointer hover:animate-pulse"
                    size='xl'
                />

                <FontAwesomeIcon
                    onClick={() => redirect('https://github.com/liberatos278')}
                    icon={faGithub}
                    className="text-[#D3D3D3] cursor-pointer hover:animate-pulse"
                    size='xl'
                />

                <FontAwesomeIcon
                    onClick={() => redirect('https://discord.com/users/471020198040829953')}
                    icon={faDiscord}
                    className="text-[#5865F2] cursor-pointer hover:animate-pulse"
                    size='xl'
                />

                <FontAwesomeIcon
                    onClick={() => redirect('https://www.instagram.com/ad.svoboda/')}
                    icon={faInstagram}
                    className="text-[#E1306C] cursor-pointer hover:animate-pulse"
                    size='xl'
                />
            </div>
        </motion.div>
    )
}

export default SocialPanel