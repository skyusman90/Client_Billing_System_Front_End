export class Clients{
    client_id: number = 0;
    client_name?: string;
    client_username: string = ""; //changed to empty string rather than undefined
    client_password: string = ""; //changed to empty string rather than undefined
    client_mobilenum?: string;
    client_status?: string;
    selected: boolean = false;
}