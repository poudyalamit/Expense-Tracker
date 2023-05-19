import React from 'react'
import { default as api } from '../store/apiSlice'
import { getLables } from '../helper/helper'

const Labels = () => {

    const { isSuccess, isError, isFetching, data } = api.useGetLabelsQuery()
    let Transaction;
    if (isFetching) {
        Transaction = <div>Fetching</div>;
    } else if (isSuccess) {
        Transaction = getLables(data,'type').map((v, i) => <LabelComponent key={i} data={v} />)
    } else if (isError) {
        Transaction = <div>Error</div>
    }

    return (
        <>
        { Transaction }
        </>
    )
}

export default Labels

function LabelComponent({ data }) {
    if (!data) return <></>;
    return (
        <div className="labels flex justify-between m-2">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{ background: data.color ?? "#f9c74f" }}></div>
                <h3 className='text-md'>{data.type ?? ""}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}