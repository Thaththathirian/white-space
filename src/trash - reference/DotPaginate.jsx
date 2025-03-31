import React, { useState } from 'react'
import {View} from 'react-native'
import PaginationDot from 'react-native-animated-pagination-dot'

const ExampleDotPaginate = ()=>{
    const [curPage] = useState(0);
    
    return (
        <PaginationDot
            activeDotColor={'black'}
            curPage={curPage}
            maxPage={3}
        />
    )
}

export default ExampleDotPaginate;