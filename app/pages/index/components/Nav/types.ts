export interface menuItemInfoType {
    name: string;
    menuChildren: menuItemChild[];
}

export interface menuItemChild {
    label: string;
    url: string;
}
