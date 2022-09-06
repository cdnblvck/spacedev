import {Launch} from "../models";

export interface AppState {
  launches: ReadonlyArray<Launch>;
}
