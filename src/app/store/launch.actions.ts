import {createAction, props} from '@ngrx/store';
import {Launch} from "../models";

export const detailsLaunch = createAction(
  '[Launch API] Launch details',
  props<{ launchId: string }>()
);

export const retrievedLaunch = createAction(
  '[Launch API] Retrieve Launch Success',
  props<{ launches: Launch [] }>()
);

export const retrievedFail = createAction(
  '[Launch API] Retrieve Launch Failed',
  props<{ error: any }>()
);
