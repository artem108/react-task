import React from 'react'

const SortTasks = ({ sortBy, sortValue, sortByVal, onChange }) => {
  return (
    <div>
    <h3>Sort tasks: </h3>
    <section className="sort-container">
        <span></span>
        <input type="text" name="sort" value={sortValue} onChange={onChange}/>
      <button onClick={sortByVal}>Sort</button>
    </section>
    </div>
)
}

export default SortTasks
