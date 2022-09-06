import { createSelector, createFeatureSelector } from '@ngrx/store';
import {Launch} from "../models";

export const selectLaunch = createFeatureSelector<ReadonlyArray<Launch>>('launches');

