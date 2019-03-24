import React, {Component} from 'react';
import './Main.css'
import Card from "../Card/Card";

const catsKind = ['Абиссинская', 'Сиамская', 'Шотландская', 'Британская', 'Мейн-кун', 'Манчкин'].sort();
const dogsKind = ['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort();
const rodentKind = ['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort();
const birds = ['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort();
const reptiles = ['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort();
const others = ['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = (val) => {
        console.log(val.target.value);
        console.log(val.target.id)

    }

    render() {
        return (
            <div className='main'>
                <div className="filter">
                    <h3 className='filter-header'>Животные</h3>
                    <div className="input-container">
                        <label htmlFor="cats" className='label'>Кошки</label>
                        <div className="select">
                            <select name="123" id="cats">
                                <option value="">Выберите породу</option>
                                {catsKind.map(a => <option key={a} value={a}>{a}</option>)}
                                <option value="Другое">Другое</option>
                            </select>
                        </div>

                        <label htmlFor="dogs" className='label'>Собаки</label>
                        <div className="select">
                            <select name="123" id="dogs">
                                <option value="">Выберите породу</option>
                                {dogsKind.map(a => <option key={a} value={a}>{a}</option>)}
                                <option value="Другое">Другое</option>
                            </select>
                        </div>

                        <label htmlFor="rodents" className='label'>Грызуны</label>
                        <div className="select">
                            <select name="123" id="rodents">
                                <option value="">Выберите вид</option>
                                {rodentKind.map(a => <option key={a} value={a}>{a}</option>)}
                                <option value="Другое">Другое</option>
                            </select>
                        </div>

                        <label htmlFor="birds" className='label'>Птицы</label>
                        <div className="select">
                            <select name="123" id="birds">
                                <option value="">Выберите вид</option>
                                {birds.map(a => <option key={a} value={a}>{a}</option>)}
                                <option value="Другое">Другое</option>
                            </select>
                        </div>

                        <label htmlFor="reptiles" className='label'>Рептилии</label>
                        <div className="select">
                            <select name="123" id="reptiles">
                                <option value="">Выберите вид</option>
                                {reptiles.map(a => <option key={a} value={a}>{a}</option>)}
                                <option value="Другое">Другое</option>
                            </select>
                        </div>

                        <label htmlFor="others" className='label'>Другие</label>
                        <div className="select">
                            <select name="123" id="others">
                                <option value="">Выберите вид</option>
                                {others.map(a => <option key={a} value={a}>{a}</option>)}
                                <option value="Другое">Другое</option>
                            </select>
                        </div>

                        <h3 className='filter-header' style={{marginTop:'30px'}}>Пол</h3>
                        <div className="select">
                            <select name="123" id="sex">
                                <option value="">Выберите пол</option>
                                <option value="Другое">Мальчик</option>
                                <option value="Другое">Девочка</option>
                            </select>
                        </div>
                        <h3 className='filter-header'>Возраст</h3>
                        <div className="select">
                            <select name="123" id="sex">
                                <option value="">Выберите возраст</option>
                                <option value="Другое">Мальчик</option>
                                <option value="Другое">Девочка</option>
                            </select>
                        </div>
                    </div>

                    <input type="button" value='Сбросить' className='button reset'/>
                    <input type="submit" value='Показать' className='button submit'/>
                </div>
                <div className="cards">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1].map((a,i) =>
                        <Card sex='male' name={`Рыжик ${i+1}`}/>)}
                </div>
            </div>

        )
    }
}

export {Main}
export default Main