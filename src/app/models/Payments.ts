export class Payments{
    payment_id?: number;
    customer_id?: number;
    client_id?: number;
    package_id?: number;
    payment_title?: string;
    payment_due_date?: string;
    payment_amount?: number;
    payment_status?: string;
    received_by?: number;
    generation_date?: string;
    sms_sent?: string;
    selected: boolean = false;
    package_name?: string;
    customer_name?: string;
}