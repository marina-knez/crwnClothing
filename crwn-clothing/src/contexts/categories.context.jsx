import { createContext, useState, useEffect } from "react";

//import SHOP_DATA from '../shop-data.js';

import { getCategoriesAndDocuments } from '../utilities/firebase/firebase.utilities.js';

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    /*useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);*/

    const value = {categoriesMap};

    return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
};