import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <main>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="Experience">
                <Experience />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </main>
    );
};

export default Home;
