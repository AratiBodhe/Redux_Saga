import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./actions/userAction";
import { productAction } from "./actions/productAction";

export const HomeScreen = () => {
    const dispatch = useDispatch();
     const product= {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
      }
    // useEffect(() => {
    //   const product= {
    //     title: 'test product',
    //     price: 13.5,
    //     description: 'lorem ipsum set',
    //     image: 'https://i.pravatar.cc',
    //   }
    //   dispatch(productAction(product));
    // }, []);
const dispatchData=()=>{
        dispatch(productAction(product));
}
    
    return (
        <View>
          <TouchableOpacity onPress={dispatchData}>
 <Text>hello</Text>
          </TouchableOpacity>
           
        </View>
    )
}