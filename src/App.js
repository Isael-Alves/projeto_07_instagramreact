import React from 'react';
import Header from './components/Header';
import Corpo from './components/Body/Corpo';

export default function App() {
    return (
        <div>
            <Header />
            <Corpo />
            <main>
                <div className = "ColumnLeft">
                    <section className = "BoxStories">
                        <img className="Vector" src="img/Vector.png" alt="" />
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div className="storie">
                            <img src="img/stories_background 1.svg" alt="" />
                            <div className="ImgStories">
                                <img src="img/9gag 1.svg" alt="" />
                            </div>
                            <p>9gag</p>
                        </div>

                    </section>
                    <section className = "PartPosts">
                        <ul>
                            <li className="Posts">
                                <div className="Part-Superior-Posts">
                                    <div>
                                        <img src="img/meowed 1.svg" alt="" />
                                        <h3>meowed</h3>
                                    </div>
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                                <div className="Img-Post"><img src="img/gato-telefone 1.png" alt="" /></div>

                                <div className="Part-Inferior-Post">
                                    <section>
                                        <div>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                            <ion-icon name="paper-plane-outline"></ion-icon>
                                        </div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </section>
                                    <span className="textInferior">
                                        <img src="img/respondeai 2.svg" alt="" />
                                        Curtido por <strong> respondeai </strong> e <strong> outras 101.523 pessoas
                                        </strong></span>
                                </div>
                            </li>
                            <li className="Posts">
                                <div className="Part-Superior-Posts">
                                    <div>
                                        <img src="img/meowed 1.svg" alt="" />
                                        <h3>meowed</h3>
                                    </div>
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                                <div className="Img-Post"><img src="img/gato-telefone 1.png" alt="" /></div>
                                <div className="Part-Inferior-Post">
                                    <section>
                                        <div>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                            <ion-icon name="paper-plane-outline"></ion-icon>
                                        </div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </section>
                                    <span className="textInferior">
                                        <img src="img/respondeai 2.svg" alt="" />
                                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></span>
                                </div>
                            </li>

                            <li className="Posts">
                                <div className="Part-Superior-Posts">
                                    <div>
                                        <img src="img/meowed 1.svg" alt="" />
                                        <h3>meowed</h3>
                                    </div>
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                                <div className="Img-Post">
                                    <img src="img/gato-telefone 1.png" alt="" />
                                </div>
                                <div className="Part-Inferior-Post">
                                    <section>
                                        <div>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                            <ion-icon name="paper-plane-outline"></ion-icon>
                                        </div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </section>
                                    <span className="textInferior">
                                        <img src="img/respondeai 2.svg" alt="" />
                                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></span>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
                <aside>
                    <div className="User">
                        <img src="img/catanacomics 1.svg" alt="" />
                        <div>
                            <h3>catanacomics</h3>
                            <h4>Catana</h4>
                        </div>
                    </div>
                    <div className="Sugestions">
                        <span>
                            <h4>Sugestões para você</h4>
                            <p>Ver tudo</p>
                        </span>
                        <ul>
                            <li>
                                <span>
                                    <img src="img/smallcutecats 1.svg" alt="" />
                                    <div>
                                        <h3>bad.vibes.memes</h3>
                                        <h4>Segue você</h4>
                                    </div>
                                </span>

                                <h5>Seguir</h5>
                            </li>

                            <li>
                                <span>
                                    <img src="img/smallcutecats 1.svg" alt="" />
                                    <div>
                                        <h3>bad.vibes.memes</h3>
                                        <h4>Segue você</h4>
                                    </div>
                                </span>

                                <h5>Seguir</h5>
                            </li>

                            <li>
                                <span>
                                    <img src="img/smallcutecats 1.svg" alt="" />
                                    <div>
                                        <h3>bad.vibes.memes</h3>
                                        <h4>Segue você</h4>
                                    </div>
                                </span>

                                <h5>Seguir</h5>
                            </li>
                            <li>
                                <span>
                                    <img src="img/smallcutecats 1.svg" alt="" />
                                    <div>
                                        <h3>bad.vibes.memes</h3>
                                        <h4>Segue você</h4>
                                    </div>
                                </span>

                                <h5>Seguir</h5>
                            </li>
                            <li>
                                <span>
                                    <img src="img/smallcutecats 1.svg" alt="" />
                                    <div>
                                        <h3>bad.vibes.memes</h3>
                                        <h4>Segue você</h4>
                                    </div>
                                </span>

                                <h5>Seguir</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="Helps">
                        <h6>
                            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                            Termos • Localizações • Contas mais relevantes • Hashtags •
                            Idioma
                        </h6>
                        <h6>
                            © 2021 INSTAGRAM DO FACEBOOK
                        </h6>
                    </div>
                </aside>
            </main>
            <footer>
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </footer>
        </div>
    );
}

