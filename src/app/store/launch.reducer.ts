import {createReducer, on} from '@ngrx/store';

import {retrievedLaunch} from './launch.actions';
import {Launch} from "../models";

export const initialState: ReadonlyArray<Launch> = [];

export const launchesReducer = createReducer(
  initialState,
  on(retrievedLaunch, (state, {launches}) => launches)
);
