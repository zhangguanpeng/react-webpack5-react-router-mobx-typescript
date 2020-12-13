export interface marketItemType {
    marketTitle: string;
    marketChildren: Array<marketItemChildType>;
    marketImgUrl: string;
}

export interface marketItemChildType {
    name: string;
    imgUrl: string;
    link: string;
}
