import React, {Component} from 'react'
import './AnimalForm.css'
import $ from 'jquery'
import {api} from '../../index'
import animal from '../../Constants'

class AnimalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kinds: animal.cats,
            name: '',
            animalType: animal.cats[0],
            kind: '',
            years: 0,
            months: 0,
            description: '',
            sterilization: '',
            vaccination : '',
            passport: '',
            sex: 0,
            files: [
                {
                    'fileInBase64': '',
                    "extension": ''
                }
            ],
        };
        this.getPhoto = this.getPhoto.bind(this);
        this.getKind = this.getKind.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let inputs = [].slice.call(document.querySelector('.form').querySelectorAll('input'))
        if (!inputs.some(i => {
            if (!i.validity.valid) {
                i.reportValidity();
                return true;
            }
        })) {
            const state = this.state;
            const date = new Date()
            const bDate = new Date(date.getFullYear() - (date.getFullYear() - (date.getFullYear() - state.years)), date.getMonth() + 1 - (date.getMonth() + 1 - (date.getMonth() + 1 - state.months)));
            console.log(bDate)
            api.addCard({name : state.name, animalType : state.animalType, bDate: bDate,description: state.description,sex:state.sex,files:state.files}).then(() =>{
                $('.form').fadeOut(300)
            })
        }
    }
    getPhoto = (e) => {
        if (!e || !e.target || !e.target.files[0]) return;
        let fileReader = new FileReader();
        let fileReaderPreview = new FileReader();
        fileReaderPreview.onload = (e) => {
            $('.photoPreview').attr('src', e.target.result);
        };
        fileReader.onload = (e) => {
            console.log(e.target)
            this.setState({
                files: [
                    {
                        'fileInBase64': btoa(e.target.result),
                        'extension': 'png'
                    }
                ]
            });
            $('.fileStatus').text('Файл выбран')
        };
        fileReader.readAsBinaryString(e.target.files[0]);
        fileReaderPreview.readAsDataURL(e.target.files[0]);

    };
    getKind = (kind) => {
        console.log(kind.target.value)
        switch (kind.target.value) {
            case 'Кошка':
                this.setState({kinds: animal['cats'], animalType: kind});
                break;
            case 'Собака':
                this.setState({kinds: animal['dogs'], animalType: kind});
                break;
            case 'Грызун':
                this.setState({kinds: animal['rodents'], animalType: kind});
                break;
            case 'Птица':
                this.setState({kinds: animal['birds'], animalType: kind});
                break;
            case 'Рептилия, амфибия':
                this.setState({kinds: animal['reptiles'], animalType: kind});
                break;
            case 'Другое':
                this.setState({kinds: animal['others'], animalType: kind});
                break;

        }

    };
    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name] : value})
    }
    setFocus = () =>{
        document.querySelector('.focus').focus();
}

    render() {
        return (
            <div className='form'>
                <div className='animalForm'>
                    <form id="addForm">
                        <h2 className='formHeader'>Новый питомец</h2>
                        <div className="input-container">
                            <label htmlFor="files">Фото</label>
                            <div className='photoContainer'>
                                <img className='photoPreview'/>
                                <div className="input">
                                    <div className='chooseBtn' onClick={loadFile}>Выберите файл</div>
                                    <div className='fileStatus'>Файл не выбран</div>
                                    <input name='files' id='files' type="file" accept={"image/*,image/jpeg"}
                                           onChange={this.getPhoto} required={true} onFocus={this.setFocus}/>
                                </div>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='leftInputs'>
                                <div className="input-container">
                                    <label htmlFor="selectAnimalType">Категория</label>
                                    <div className="input">
                                        <select name="animalType" id="selectAnimalType" value={this.state.animalType} required={true}
                                                onChange={(e) =>{this.getKind(e);this.handleChange(e)}}>
                                            {['Кошка', 'Собака', 'Грызун', 'Птица', 'Рептилия, амфибия', 'Другое'].map(v =>
                                                <option
                                                    value={v}>{v}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="selectKind">Вид/Порода</label>
                                    <div className="input">
                                        <select name="kind" id="selectKind" value={this.state.kind}  required={true} onChange={this.handleChange}>
                                            {this.state.kinds.map(v => <option value={v}>{v}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor='formName'>Кличка</label>
                                    <div className="input">
                                        <input type="text" name='name' id='formName' value={this.state.name} required={true} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor='Years'>Примерная дата рождения</label>
                                    <div className="input" id='Age'>
                                        <input type="number" name='years' id='Years' required={true} value={this.state.years} min={0} onChange={this.handleChange}/>
                                        <p>г.</p>
                                        <input type="number" name='months' id='Months' required={true} value={this.state.months} min={0} max={11} onChange={this.handleChange}/>
                                        <p>мес.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rightInputs'>
                                <div className="input-container">
                                    <label htmlFor='Sex'>Пол</label>
                                    <div className="input">
                                        <select name="sex" id="Sex" value={this.state.sex} onChange={this.handleChange}>
                                            <option value="0">Мальчик</option>
                                            <option value="1">Девочка</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor='Sterilization'>Стерилизация</label>
                                    <div className="input">
                                        <select name="sterilization" id="Sterilization" value={this.state.sterilization} onChange={this.handleChange}>
                                            <option value="1">Да</option>
                                            <option value="">Нет</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor='Vaccination'>Прививки</label>
                                    <div className="input">
                                        <select name="vaccination" id="Vaccination" value={this.state.vaccination} onChange={this.handleChange}>
                                            <option value="1">Есть</option>
                                            <option value="">Нет</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor='Passport'>Вет.паспорт</label>
                                    <div className="input">
                                        <select name="passport" id="Passport" value={this.state.passport} onChange={this.handleChange}>
                                            <option value="1">Есть</option>
                                            <option value="">Нет</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="formDesc">Описание</label>
                            <div className="input">
                                <textarea name="description" id="formDesc" cols="30" rows="10" value={this.state.description} onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className="input">
                            <input type="submit" value='Добавить' className='button submit'
                                   onClick={this.handleSubmit}/>
                        </div>
                    </form>
                </div>
                <div className="formBack" onClick={formClose}/>
            </div>
        )
    }
}

/*const getMaxDate = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    month = month < 9 ? '0' + month : month;
    let day = new Date().getDate();
    day = day < 9 ? '0' + day : day;
    return `${year}-${month}-${day}`
};*/
const formClose = (e) => {
    $('.form').fadeOut(300, () => document.body.style.overflow = "auto")
};
const loadFile = () => {
    document.querySelector('#files').click();
};
let getFileStatus = (e) => {

};

export default AnimalForm