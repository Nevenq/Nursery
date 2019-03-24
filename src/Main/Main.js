import React,{Component} from 'react';
import './Main.css'

const catsKind = [['Абиссинская'],'Сиамская','Шотландская','Британская','Мейн-кун','Манчкин'].sort();
const dogsKind = [['Бигль'],'Немецкая овчарка','Самоедская лайка','Британская','Мейн-кун','Манчкин'].sort();

class Main  extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
                <div className="filter">
                    <h3>Животные</h3>
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
                            <select name="123" id="cats">
                                <option value="">Выберите породу</option>
                                {dogsKind.map(a => <option key={a} value={a}>{a}</option>)}
                                <option value="Другое">Другое</option>
                            </select>
                        </div>
                    </div>
                <div className="cards">

                </div>
            </div>
        )
    }
}

export {Main}
export default Main