import Particles from "../components/background/Particles"
import Console from "../components/console/Console";
import SocialPanel from "../components/social/SocialPanel";
import Title from "../components/title/Title";

const Home = () => {
    return (
        <>
            <Particles />
            <Title />
            <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
                <Console />
                <SocialPanel />
            </div>
        </>
    );
}

export default Home