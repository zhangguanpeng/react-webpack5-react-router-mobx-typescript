export interface menuItemInfoType {
    name: string;
    children: menuItemChild[];
}

export interface menuItemChild {
    label: string;
    url: string;
}
