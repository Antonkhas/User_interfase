import React from "react"
import * as ReactDOMClient from "react-dom/client";
import App from './App'
import './css/main.css'


const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)  



// class Header extends React.Component{
//     render() {
//         return (
//             <header>{this.props.title}</header>
//         )
//     }
// }


// // Новый метод - создание компонента через класс
// class App extends React.Component {
//     zag = 'Привет!'
//     helpText = 'Пиши Сюда!'
//     render() {
//         return (<div className='name'>
//         <Header title='Шапка сайта' />
//         <h1>{this.zag}</h1>
//         <h2>Ты востребованный и высокооплачиваемый разработчик!</h2>
//         <input placeholder={this.helpText}
//         onClick={this.inputClick} onMouseEnter={this.mouseOver} />
//     </div>
//         )
//     }

//     inputClick() {console.log('Clicked')}
//     mouseOver() {console.log('Mouse Over')}

// }



// Пример создания элемента (компонент)
// function App() {
// return (<div className='name'>
//     <Header />
//     <h1>{zag}</h1>
//     <h2>Ты востребованный и высокооплачиваемый разработчик!</h2>
//     <input placeholder={helpText}
//     onClick={inputClick} onMouseEnter={mouseOver} />
// </div>)
// }

// Вариант создания элемента
// const elements = (<div>
//     <h1>{zag}</h1>
//     <h2>Ты востребованный и высокооплачиваемый разработчик!</h2>
//     <input placeholder={helpText}
//     onClick={inputClick} onMouseEnter={mouseOver} />
// </div>)

