// import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import Search from '../components/Search'
// import { Container } from "@material-ui/core/";
// import API from "../utils/API";
// import Button from "../components/Button";
import Categories from '../components/Categories'
import Grid from '@material-ui/core/Grid'
// import {useParams} from 'react-router-dom'

const Browse = ({ searchBar, setSearchBar, searchData, setSearchData }) => {
  // const {category} = useParams();
  // console.log(category)

  return (
    <>
    <Grid container spacing={1}>
      <Grid item xs={12} md={2} >
        <Categories 
          searchData={searchData} 
          setSearchData={setSearchData}
          searchBar={searchBar}
          setSearchBar={setSearchBar}
        />
      </Grid>
      <Grid item xs={12} md={10}>
      <Search 
        searchData={searchData} 
        setSearchData={setSearchData}
        searchBar={searchBar}
        setSearchBar={setSearchBar}
      />
      <Results 
        searchData={searchData} 
        setSearchData={setSearchData} 
        searchBar={searchBar}
        setSearchBar={setSearchBar}
      />
      </Grid>
    </Grid>
    </>
  );
};

export default Browse;
