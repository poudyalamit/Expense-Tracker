import React from 'react'
import "boxicons"
import { default as api } from '../store/apiSlice'

const List = () => {
  const { isSuccess, isError, isFetching, data } = api.useGetLabelsQuery()
  let Transactions;
  if (isFetching) {
      Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
      Transactions = data.map((v, i) => <Transaction key={i} category={v} />)
  } else if (isError) {
      Transactions = <div>Error</div>
  }


  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 text-md font-bold text-xl'>History</h1>
      {Transactions}
    </div>
  )
}

export default List

function Transaction({category}){
    if(!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color ?? "#e5e5e5"}`}}>
            <button className='px-3'><box-icon color={category.color ??""} size="15px" name="trash"/></button>
            <span className='block w-full'>{category.name ??""}</span>
        </div>
    )
}
