import React, {Component} from 'react'
import './AnimalForm.css'
import $ from 'jquery'
import {api} from '../../index'

class AnimalForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Кошка',
            animalType: 'Кошка',
            bDate: '2019-05-15T06:16:43.759Z',
            description: '1234df',
            sex: 0,
            files: [
                {
                    'fileInBase64': btoa('lol'),
                    "extension": 'lol'
                }
            ],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = (e) => {
        e.preventDefault()
        api.addCard(this.state).then(response =>{
            $('.form').fadeOut(300,() =>{

            })
        })

    };
    handleChange = (e) => {
        if (!e || !e.target) return;
        if (e.target.name === 'files') {
            let fileReader = new FileReader();
            fileReader.onload = (e) =>{
                console.log(e)
                this.setState({
                    files: [
                        {
                            'fileInBase64' : btoa(e.target.result),
                            'extension' : 'png'
                        }
                    ]
                })
            };
            fileReader.readAsBinaryString(e.target.files[0])
        }
        let name = e.target.name;
        console.log(e.target.value)
        console.log(e.target.name)
        this.setState({
            [name] : e.target.value
        })
        console.log(this.state)
    };

    render() {
        return (
            <div className='form'>
                <div className='animalForm'>
                    <form onChange={this.handleChange}>
                        <div className="input-container">
                            <label htmlFor="selectAnimalType">Вид:</label>
                            <div className="input">
                                <select name="animalType" id="selectAnimalType" required={true}>
                                    {['Кошка', 'Собака', 'Грызун', 'Птица', 'Рептилия', 'Другое'].map(v => <option
                                        value={v}>{v}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor='formName'>Имя:</label>
                            <div className="input">
                                <input type="text" name='name' id='formName' placeholder='Введите имя' required={true}/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor='Sex'>Пол:</label>
                            <div className="input">
                                <select name="sex" id="Sex">
                                    <option value="0">Мужской</option>
                                    <option value="1">Женский</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="bdate">Примерный день рождения:</label>
                            <div className="input">
                                <input type="date" max = {getMaxDate()} id='bdate' name='bDate' placeholder='введите день рождения'/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="formDesc">Описание</label>
                            <div className="input">
                                <textarea name="description" id="formDesc" cols="30" rows="10" required={true}/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="files">Фотография</label>
                            <div className="input">
                                <input name='files' id='files' type="file"/>
                            </div>
                        </div>
                        <div className="input">
                            <input type="submit" value='Добавить' className='button submit' onClick={this.handleClick}/>
                        </div>
                    </form>
                </div>
                <div className="formBack" onClick={formClose}/>
            </div>
        )
    }
}
const getMaxDate = () =>{
    let year = new Date().getFullYear()
    console.log(year)
    let month = new Date().getMonth() + 1
    console.log(month)
    month = month < 9 ? '0' + month : month;
    let day = new Date().getDate();
    console.log(day)
    day = day < 9 ? '0' + day : day;
    return `${year}-${month}-${day}`
}
const formClose = (e) => {
    $('.form').fadeOut(300, () => document.body.style.overflow = "auto")
};
export default AnimalForm