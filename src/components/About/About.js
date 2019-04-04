import React from "react";
import nursery from "../../images/nursery.jpg"
import "./About.css"

const About = () =>{
    return(
    <div className="container nursery">
        <h2 className="nursery-name">Питомник</h2>
        <div className="nursery-info">
            <div className="imgContainer">
                <img src={nursery} alt="nursery"/>
            </div>
            <div className="nursery-contacts">
                <h3>Контакты</h3>
                <div className="nursery-stat">
                    <div className="stats-label">Город:</div>
                    <div className="stats-value">Екатеринбург</div>
                </div>
                <div className="nursery-stat">
                    <div className="stats-label">Адрес:</div>
                    <div className="stats-value">ул. Мира, 29</div>
                </div>
                <div className="nursery-stat">
                    <div className="stats-label">Телефон:</div>
                    <div className="stats-value">+7 900 000 00 00</div>
                </div>
                <div className="nursery-stat">
                    <div className="stats-label">E-mail:</div>
                    <div className="stats-value">pitomnik@example.ex</div>
                </div>
                <div className="nursery-stat">
                    <div className="stats-label">Вконтакте:</div>
                    <div className="stats-value">
                        <a href="#">vk.com/example</a>
                    </div>
                </div>
                <div className="nursery-stat">
                    <div className="stats-label">Facebook:</div>
                    <div className="stats-value">
                        <a href="#">facebook.com/groups/example</a>
                    </div>
                </div>
                <div className="nursery-stat">
                    <div className="stats-label">Instagram:</div>
                    <div className="stats-value">
                        <a href="#">instagram.com/example</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="nursery-description">
            <h3>Описание</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
        </div>
    </div>)
}
export default About;
