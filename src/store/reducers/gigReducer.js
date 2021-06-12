import * as actionType from "../actions/actionType";

const initialState = {
gig:[
{
  Role:'Product Manager',
  Company:'TM30',
  Date:'20th,June 2020',
  Salary:'20,000-30,000'
},
{
  Role:'Product Manager',
  Company:'TM30',
  Date:'20th,June 2020',
  Salary:'20,000-30,000'
},
{
  Role:'Product Manager',
  Company:'TM30',
  Date:'20th,June 2020',
  Salary:'20,000-30,000'
},
{
  Role:'Product Manager',
  Company:'TM30',
  Date:'20th,June 2020',
  Salary:'20,000-30,000'
},
{
  Role:'Product Manager',
  Company:'TM30',
  Date:'20th,June 2020',
  Salary:'20,000-30,000'
},
{
  Role:'Product Manager',
  Company:'TM30',
  Date:'20th,June 2020',
  Salary:'20,000-30,000'
}
],

track:false


}

const reducers = (state = initialState, action) => {
  switch (action.type) {
case actionType.ADD_GIG:
      return {
        ...state,
        gig: [...state.gig, action.payload],
      };

      case actionType.ON_TRACK:
      return {
        ...state,
        track: action.payload,
      };



default:
  return state

  }
}
  export default reducers