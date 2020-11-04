import { JsxElement } from "typescript"

export interface IButtonProps{
    id:string;
    icon?:JsxElement;
    title:string;
    label:string;
    className:string;
    handleClick(e:any):void
}