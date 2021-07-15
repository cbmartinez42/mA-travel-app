import React, {useContext, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories'
import { UserContext } from '../utils/UserContext';
import { Link } from "react-router-dom";
import ImgCarousel from '../components/ImgCarousel'
import API from '../utils/API'

import Grid from '@material-ui/core/Grid'

const Home = ({searchData, setSearchData}) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    // if (!category) {
    API.browseAllActivities()
    .then((response) => {
    setSearchData(response.data || [])
    });
//     } else {
//         API.browseCategory(category)
//         .then((response) => {
//             setSearchData(response.data || [])
//         })
// }
}, [])

    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2} >
          <Categories 
            searchData={searchData} 
            setSearchData={setSearchData}
          />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
          <Grid container spacing={1}>
            <Grid item xs={12}  >
            <h2>{userInfo.namefirst} {userInfo.namelast} your id is {userInfo._id}</h2>
            </Grid>
          </Grid>
          <Search
            searchData={searchData}
          />
          <h2 className="carousel-header">Do This. Because you've earned it.</h2>
          <ImgCarousel />
          </Grid>
          <Grid item xs={12} md={2}>
            <div>Additional content </div>
          </Grid>
        </Grid>
      </>
    )
}


export default Home