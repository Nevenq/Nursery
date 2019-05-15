import React from 'react'
import './Filter.css'
import {withRouter} from "react-router";

const Filter = ({filters = [], handleChange, selected, handleReset, handleSubmit, changed}) => {
    return (
        <div className="filter">

            <h3 className='filter-header'>Животные</h3>
            <div className="input-container">
                <div className="inputs" data-name='cats' onChange={handleChange}>
                    <div className='label' onClick={handleSelect}>Кошки
                        <div className="arrow"/>
                    </div>
                    <div className="boxes">
                        {filters.cats.map(a =>
                            <div className='chkBox'>
                                <label><input type='checkbox' key={a} value={a}/>{a}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className="inputs" data-name='dogs' onChange={handleChange}>
                    <div className='label' onClick={handleSelect}>Собаки
                        <div className="arrow"/>
                    </div>
                    <div className="boxes">
                        {filters.dogs.map(a =>
                            <div className='chkBox'>
                                <label><input type='checkbox' key={a} value={a}/>{a}</label>
                            </div>
                        )}
                    </div>
                </div>

                <div className="inputs" data-name='rodents' onChange={handleChange}>
                    <div className='label' onClick={handleSelect}>Грызуны
                        <div className="arrow"/>
                    </div>
                    <div className="boxes">
                        {filters.rodents.map(a =>
                            <div className='chkBox'>
                                <label><input type='checkbox' key={a} value={a}/>{a}</label>
                            </div>
                        )}
                    </div>
                </div>

                <div className="inputs" data-name='birds' onChange={handleChange}>
                    <div className='label' onClick={handleSelect}>Птицы
                        <div className="arrow"/>
                    </div>
                    <div className="boxes">
                        {filters.birds.map(a =>
                            <div className='chkBox'>
                                <label><input type='checkbox' key={a} value={a}/>{a}</label>
                            </div>
                        )}
                    </div>
                </div>

                <div className="inputs" data-name='reptiles' onChange={handleChange}>
                    <div className='label' onClick={handleSelect}>Рептилии, амфибии
                        <div className="arrow"/>
                    </div>
                    <div className="boxes">
                        {filters.reptiles.map(a =>
                            <div className='chkBox'>
                                <label><input type='checkbox' key={a} value={a}/>{a}</label>
                            </div>
                        )}
                    </div>
                </div>

                <div className="inputs" data-name='others' onChange={handleChange}>
                    <div className='label' onClick={handleSelect}>Другие
                        <div className="arrow"/>
                    </div>
                    <div className="boxes">
                        {filters.others.map(a =>
                            <div className='chkBox'>
                                <label><input type='checkbox' key={a} value={a}/>{a}</label>
                            </div>
                        )}
                    </div>
                </div>

                <h3 className='filter-header' style={{marginTop: '22px'}}>Пол</h3>
                <div className="select">
                    <select name="sex" data-name="sex" id="sex" value={selected.sex} onChange={handleChange}>
                        <option value="">Выберите пол</option>
                        <option value="male">Мальчик</option>
                        <option value="female">Девочка</option>
                    </select>
                </div>
                <h3 className='filter-header'>Возраст</h3>
                <div className="select">
                    <select name="age" id="age" data-name="age" value={selected.age} onChange={handleChange}>
                        <option value="">Выберите возраст</option>
                        <option value="0">0 - 6мес</option>
                        <option value="1">6мес - 1год</option>
                    </select>
                </div>
            </div>

            <input type="button" value='Сбросить' className='button reset' onClick={handleReset}/>
            <input type="submit" value='Показать' className='button submit'
                   onClick={() => changed && handleSubmit(Object.entries(selected).filter(elem => elem[1] !== ''))}/>
        </div>);
}
const handleSelect = (e) => {
    let elem = e.target.parentNode.querySelector('.boxes');
    if(!elem) return;
    if (elem.classList.contains('active')) {
        elem.classList.remove('active');
        e.target.querySelector('.arrow').classList.remove('opened')
    } else {
        elem.classList.add('active')
        e.target.querySelector('.arrow').classList.add('opened')
    }
    if (elem.children.length > 20) {
        elem.style.overflowY = 'scroll'
    }
    console.log()
}

export default Filter