import { lazy } from "react";

export const HomePage = lazy(()=> import  ("./HomePage"))
export const Shop = lazy(()=> import  ("./shopPage"))
export const Cart = lazy(()=> import ("./cart"))