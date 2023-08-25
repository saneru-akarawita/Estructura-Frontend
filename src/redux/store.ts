import { configureStore } from '@reduxjs/toolkit';

import CustomRequestReducer from './CustomRequests/CustomRequestReducer';
import ProfessionalsReducer from './Professionals/ProfessionalsReducer';
// import ProjectsReducer from './Projects/ProjectsReducer';
// import RentingItemsReducer from './Renting/RentingItemsReducer';
// import SingleRentingItemReducer from './Renting/SingleRentingItemReducer';
// import RetailItemsReducer from './RetailItems/RetailItemsReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';
import UsersInfoReducer from './UserInfo/UsersInfoReducer';

export const store = configureStore({
  reducer: {
    customRequest: CustomRequestReducer,
    professionalsInfo: ProfessionalsReducer,
    // projects: ProjectsReducer,
    // rentingItem: SingleRentingItemReducer,
    // rentingItems: RentingItemsReducer,
    // retailItems: RetailItemsReducer,
    user: UserAuthenticationReducer,
    usersInfo: UsersInfoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
