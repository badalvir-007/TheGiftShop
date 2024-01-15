import React from 'react'
import Trending from './collections/Trending';
import Celebrate from './collections/Celebrate';
import BestSelling from './collections/BestSelling';
import Categories from './collections/Categories';
import Occasions from './collections/Occasions';
import Worldgifts from './collections/Worldgifts';
import CustomersStories from './collections/CustomersStories';

const Collection = () => {
  return (
    <div>
        <div>
            {/* {trending gifts} */}
           <Trending />
            {/* {Celebrate Milestones} */}
            <Celebrate />
            {/* {Best Selling Gifts} */}
            <BestSelling />
            {/* {Categories} */}
            <Categories />

            {/* {find the perfect gift} */}


            {/* {Occasions} */}
            <Occasions />
            {/* {Popular in Gifting} */}


            {/* {Cakes , fashion , Home} */}


            {/* {Send Gifts worldwide} */}
            <Worldgifts />
            {/* {slider with customers stories} */}
            <CustomersStories/>
            {/* {stats } */}

        </div>

    </div>
  )
}

export default Collection;