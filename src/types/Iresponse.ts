import { Ibook } from "./Ibook";

export type Iresponse = {
   books: Ibook[];
   total: string;
   error: string;
}