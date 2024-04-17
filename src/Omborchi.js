import { createSlice } from '@reduxjs/toolkit';



export const Omborchi = createSlice({
  name: 'counter',
  initialState:{

        edt:false,
        adres:'',
        city:'',
        postcode:'',
        country:'',

        name:'',
        email:'',
        cadres:'',
        ccity:'',
        cpostcode:'',
        ccountry:'',
        kun:'',
        muddat:'',
        pd:'',

        itm:[{itname:'', qty:'', prise:''}  ],


        oyna:false,

        oydt:{ adres:'',
        city:'',
        postcode:'',
        country:'',
       m:{id:'23'},
        name:'',
        email:'',
        cadres:'',
        ccity:'',
        cpostcode:'',
        ccountry:'',
        kun:'',
        muddat:'',
        pd:'',

        itm:[{itname:'', qty:'', prise:''}  ],},

        id:''
  },
  reducers: {
    aydi:(state, {payload})=>{
      state.id=payload
    },
    bo:(state)=>{
      state.itm=[{itname:'', qty:'', prise:''} ]
    },
      as:(state, {payload})=>{
        state.adres=payload
      },
      cy:(state, {payload})=>{
        state.city=payload
      },
      pe:(state, {payload})=>{
        state.postcode=payload
      },
      co:(state, {payload})=>{
        state.country=payload
      },

      nm:(state, {payload})=>{
        state.name=payload
      },
      em:(state, {payload})=>{
        state.email=payload
      },
      ca:(state, {payload})=>{
        state.cadres=payload
      },
      cc:(state, {payload})=>{
        state.ccity=payload
      },
      cp:(state, {payload})=>{
        state.cpostcode=payload
      },
      ccy:(state, {payload})=>{
        state.ccountry=payload
      },
      kn:(state, {payload})=>{
        state.kun=payload
      },
      mt:(state, {payload})=>{
        state.muddat=payload
      },
      pd:(state, {payload})=>{
        state.pd=payload
      },

      in:(state, {payload})=>{
        state.itm.push(payload)
      },

      del:(state, {payload})=>{
        state.itm.splice(payload, 1)
      },

      itname:(state, {payload})=>{
        state.itm[payload[1]].itname=payload[0]
      },
  
      
      qty:(state, {payload})=>{
        state.itm[payload[1]].qty=payload[0]
      },

      price:(state, {payload})=>{
        state.itm[payload[1]].prise=payload[0]
      },
      mud:(state, {payload})=>{
        state.muddat=payload
      },

      oy:(state)=>{state.oyna=!state.oyna},

      dt:(state, {payload})=>{
      state.oydt=payload
      },

      eh:(state)=>{state.edt=false},

      ed:(state, {payload})=>{
        state.edt=!state.edt

        state.adres=payload.adres
       state.city=payload.city
        state.postcode=payload.postcode
        state.country=payload.country

        state.name=payload.name
        state.email=payload.email
        state.cadres=payload.cadres
        state.ccity=payload.ccity
        state.cpostcode=payload.cpostcode
        state.ccountry=payload.ccountry
        state.kun=payload.kun
        state.muddat=payload.muddat
        state.pd=payload.pd

        state.itm=payload.itm
      },
  },
});