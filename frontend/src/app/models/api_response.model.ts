import { EmployeeModel } from "./employee.model";

export interface APIResponseModel<T> {
    current_page: number;
    data: T;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: APIResponseLinkModel[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

export interface APIResponseLinkModel {
    url: null | string;
    label: string;
    active: boolean;
}


export interface APIResponceCreatedEmployee {
    message: string;
    user: EmployeeModel;
}