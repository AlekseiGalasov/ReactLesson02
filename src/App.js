import React from 'react';
import '../src/style.css'
import Logo from '../src/img/logo.png'

const Input = (props) => {
  return (
    <input type='input' className='form__input' placeholder={props.placeholder}></input>
  )
}

const Advantage = (props) => {
  return (
    <div className="blocks__wrapper">
      <div className="blocks__img">{props.value}</div>
      <p className="blocks__text">{props.text} целевое преимущество</p>
    </div>
  )
}

const Button = (props) => {
  return(
      <button className="btn">{props.name}</button>
  )
}

const Wrapper = (props) => {
  console.log(props.name);

  return(
    <div  className={props.boolean ? "wrapper footer" : "wrapper"}>
    <div className="logo">
      <img src={Logo} alt="logo" className="logo__img"></img>
      {props.boolean && <p>© 2020 XXXcompany.<br/> Все права защищены.</p>}
    </div>
    {props.boolean && <div className="copyright"><p className="copyright__text">Сделано “ВАШЕ ИМЯ”</p></div>}
    <div className="phone">
      <a href='tel:12345' className="phone__text">+7 (999) 999 - 1234</a>
    </div>
</div>
  )
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <Wrapper boolean={false}/>
          <div className="header-main">
              <h1 className="header-main__caption">Заголовок c уникальным торговым предложение по системе 4U</h1>
              <p className="header-main__text">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему.</p>
              <Button  name='Подробней'/>
          </div>
      </header>
    )

  }
  
}

class Section extends React.Component {
  render() {
    return (
      <section className="section">
        <h2 className="section__caption">Уникальный заголовок для преимущества компании</h2>
        <span className="section__text big">О нас</span>
        <p className="section__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.</p>
        <div className="blocks">
            <Advantage text='Первое' value='1'/>
            <Advantage text='Второе' value='2'/>
            <Advantage text='Третье' value='3'/>
            <Advantage text='Четвертое' value='4'/>
        </div>
      </section>
    )
  }
}

class Form extends React.Component {
  render() {
    return (
      <>
      <section className="feedback">
        <h3 className="feedback__caption">Остались вопросы?</h3>
        <span className="feedback__text">Оставьте номер телефона, и мы перезвоним вам</span>
        <form className='form'>
          <Input placeholder="Ваше имя"></Input>
          <Input placeholder="Телефон"></Input>
          <Input placeholder="E-mail"></Input>
          <Button  name='Позвоните Мне'/>
          <p className="form__text">Я даю своё согласие на обработку моих персональных данных.</p>
        </form>
      </section>
      <Wrapper boolean={true}/>
      </>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Section />
      <Form />
      </>
    )
  }
}

export default Main;
