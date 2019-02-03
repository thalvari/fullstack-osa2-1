import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10,
                id: 1
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7,
                id: 2
            },
            {
                name: 'Komponenttien tila',
                exercises: 14,
                id: 3
            }
        ]
    }
    return <Course course={course}/>
}

const Course = ({course}) => (
    <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
)

const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part}/>)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return <p>yhteensä {total} tehtävää</p>
}

ReactDOM.render(<App/>, document.getElementById('root'))
