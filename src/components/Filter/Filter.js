import React from 'react'
import './Filter.css'
const Filter = ({filters = [],handleChange,selected,handleReset,handleSubmit,changed}) => {
    return (
        <div className="filter" >
            <h3 className='filter-header'>Животные</h3>
            <div className="input-container">
                <label htmlFor="cats" className='label'>Кошки</label>
                <div className="select">
                    <select name="cats" id="cats" value={selected.cats} onChange={handleChange}>
                        <option value="">Выберите породу</option>
                        {filters.cats.map(a => <option key={a} value={a}>{a}</option>)}
                        <option  value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="dogs" className='label'>Собаки</label>
                <div className="select">
                    <select name="dogs" id="dogs" value={selected.dogs} onChange={handleChange}>
                        <option value="">Выберите породу</option>
                        {filters.dogs.map(a => <option key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="rodents" className='label'>Грызуны</label>
                <div className="select">
                    <select name="rodents" id="rodents" value={selected.rodents} onChange={handleChange}>
                        <option value="">Выберите вид</option>
                        {filters.rodents.map(a => <option key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="birds" className='label'>Птицы</label>
                <div className="select">
                    <select name="birds" id="birds" value={selected.birds} onChange={handleChange}>
                        <option value="">Выберите вид</option>
                        {filters.birds.map(a => <option key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="reptiles" className='label'>Рептилии</label>
                <div className="select">
                    <select name="reptiles" id="reptiles" value={selected.reptiles} onChange={handleChange}>
                        <option value="">Выберите вид</option>
                        {filters.reptiles.map(a => <option key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="others" className='label'>Другие</label>
                <div className="select">
                    <select name="others" id="others" value={selected.others} onChange={handleChange}>
                        <option value="">Выберите вид</option>
                        {filters.others.map(a => <option key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <h3 className='filter-header' style={{marginTop: '22px'}}>Пол</h3>
                <div className="select">
                    <select name="sex" id="sex" value={selected.sex} onChange={handleChange}>
                        <option value="">Выберите пол</option>
                        <option value="male">Мальчик</option>
                        <option value="female">Девочка</option>
                    </select>
                </div>
                <h3 className='filter-header'>Возраст</h3>
                <div className="select">
                    <select name="age" id="age" value={selected.age} onChange={handleChange}>
                        <option value="">Выберите возраст</option>
                        <option value="0">0 - 6мес</option>
                        <option value="1">6мес - 1год</option>
                    </select>
                </div>
            </div>

            <input type="button" value='Сбросить' className='button reset' onClick={handleReset}/>
            <input type="submit" value='Показать' className='button submit' onClick={() => changed && handleSubmit(Object.entries(selected).filter(elem => elem[1] !== ''))}/>
        </div>);
}


export default Filter