import React from 'react'
const Filter = ({filters = [],handleChange,selected,handleReset}) => {
    console.log(filters)
    return (
        <div className="filter" onChange={handleChange}>
            <h3 className='filter-header'>Животные</h3>
            <div className="input-container">
                <label htmlFor="cats" className='label'>Кошки</label>
                <div className="select">
                    <select name="cats" id="cats">
                        <option value="">Выберите породу</option>
                        {filters.cats.map(a => <option selected={selected.cats === a} key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="dogs" className='label'>Собаки</label>
                <div className="select">
                    <select name="dogs" id="dogs">
                        <option value="">Выберите породу</option>
                        {filters.dogs.map(a => <option selected={selected.dogs === a} key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="rodents" className='label'>Грызуны</label>
                <div className="select">
                    <select name="rodents" id="rodents">
                        <option value="">Выберите вид</option>
                        {filters.rodents.map(a => <option selected={selected.rodents === a} key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="birds" className='label'>Птицы</label>
                <div className="select">
                    <select name="birds" id="birds">
                        <option value="">Выберите вид</option>
                        {filters.birds.map(a => <option selected={selected.birds === a} key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="reptiles" className='label'>Рептилии</label>
                <div className="select">
                    <select name="reptiles" id="reptiles">
                        <option value="">Выберите вид</option>
                        {filters.reptiles.map(a => <option selected={selected.reptiles === a} key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <label htmlFor="others" className='label'>Другие</label>
                <div className="select">
                    <select name="others" id="others">
                        <option value="">Выберите вид</option>
                        {filters.others.map(a => <option selected={selected.others === a} key={a} value={a}>{a}</option>)}
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <h3 className='filter-header' style={{marginTop: '30px'}}>Пол</h3>
                <div className="select">
                    <select name="sex" id="sex">
                        <option value="">Выберите пол</option>
                        <option selected={selected.sex === 'male'} value="male">Мальчик</option>
                        <option selected={selected.sex === 'female'} value="female">Девочка</option>
                    </select>
                </div>
                <h3 className='filter-header'>Возраст</h3>
                <div className="select">
                    <select name="age" id="age">
                        <option value="">Выберите возраст</option>
                        <option selected={selected.age === 0} value="0">0 - 6мес</option>
                        <option selected={selected.age === 1} value="1">6мес - 1год</option>
                    </select>
                </div>
            </div>

            <input type="button" value='Сбросить' className='button reset' onClick={handleReset}/>
            <input type="submit" value='Показать' className='button submit'/>
        </div>);
}


export default Filter