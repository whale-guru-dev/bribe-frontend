import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  transactionsReducer,
  blockchainsReducer,
  appSettingsReducer,
} from "blockchain-integration";

const PERSISTED_KEYS: string[] = ["transactions"];

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    blockchain: blockchainsReducer,
    appsettings: appSettingsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    // save({ states: PERSISTED_KEYS }),
  ],
  // preloadedState: load({ states: PERSISTED_KEYS, disableWarnings: true }),
});

// store.getState();

export type AppState = ReturnType<typeof store.getState>;
