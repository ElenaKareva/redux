import React from 'react';

import FilterForm from './components/FilterForm'
import AddForm from './components/AddForm'
import List from './components/List';

function App() {
  return (
    <>
      <FilterForm/>
      <AddForm />
      <List/>
    </>
  )
}

export default App;