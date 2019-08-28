import React from 'react';
import './Home.css';

function Home () {
    return (
        <div className="tentang" id="profil">
            <section className="poto">
            <h2>Profil</h2>
            <h2>Irfansyah Muahammad alfaris</h2>
            <p><b>Front End Developer</b></p>
            <p>I am a beginner programming in Pondok Programmer, I chose the Front end Developer division,</p> <p>With JavaScript programming language with React Js framwork.</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p> Debitis dolorem ratione odio possimus fugiat in,</p><p>obcaecati vel non eaque culpa</p><p>obcaecati vel non eaque</p>
            <a href="https://www.google.com/?hl=in"className="git-ic">
                <i className="fab fa-github  fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            <a href="https://www.google.com/?hl=in" className="git-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            <a href="https://www.google.com/?hl=in" className="git-ic">
                <i className="fab fa-facebook fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            <a href="https://www.google.com/?hl=in" className="git-ic">
                <i className="fab fa-medium fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            </section>
            <div className = "footer"><p>Copyright irfasnyah.2019</p></div>
        </div>
    );
}

export default Home;