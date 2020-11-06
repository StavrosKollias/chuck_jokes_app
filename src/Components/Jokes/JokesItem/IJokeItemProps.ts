export interface IJokesItemProps {
   title: string;
   joke: string;
   categories: Array<string>;
   rating: number;
   onRender?(e: any): void;
}
