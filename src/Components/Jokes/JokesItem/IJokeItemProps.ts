export interface IJokesItemProps {
   title: string;
   joke: string;
   categories: Array<string>;
   onRender?(e: any): void;
}
