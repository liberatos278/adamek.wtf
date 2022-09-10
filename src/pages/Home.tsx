import Particles from "../components/background/Particles"
import Console from "../components/console/Console";
import SocialPanel from "../components/social/SocialPanel";
import Title from "../components/title/Title";
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <Particles />
            <Title />

            <motion.div
                className="w-full h-screen flex flex-col gap-5 justify-center items-center overflow-hidden"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <Console />
                <SocialPanel />
            </motion.div>
        </>
    );
}

export default Home