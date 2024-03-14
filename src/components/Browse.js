import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';

const Browse = () => {
  const userFields = useSelector(store => store.user);
  console.log(userFields);
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse