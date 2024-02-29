export class Expenditures{
    expenditure_id?: number;
    client_id?: number;
    expenditure_title?: string;
    expenditure_details?: string;
    expenditure_type?: string;
    expenditure_amount?: number;
    expenditure_date?: string;
    expenditure_status?: string;
    selected: boolean = false;
}