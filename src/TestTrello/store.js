import {  createStore} from "redux";
import { CustomReducer1 } from "./reducer";

export var DefaultStore1 = createStore(CustomReducer1)