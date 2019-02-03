import React from 'react'

const Course = ({course}) => (
    <div>
        <h1>{course.name}</h1>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
)

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part}/>)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return <p>yhteensä {total} tehtävää</p>
}

export default Course
