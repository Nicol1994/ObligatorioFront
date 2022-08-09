import { useSelector } from 'react-redux'
import React from 'react'
import Pie from './Pie'

const Charts = () => {
  const todos = useSelector(state => state.todos.filteredTodos)

  const _calculateCompleted = () => {
    //return todos.filter(todo => todo.completed).length
    return 15;
  }

  const _calculateIncomplete = () => {
    //return todos.filter(todo => todo.completed).length
    return 45;
  }
  return (
    <div className='container metrics'>
      <h5>METRICS</h5>
        <div className='row'>
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>
                        <Pie
                            completed={_calculateCompleted()}
                            incompleted={_calculateIncomplete()}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Charts
