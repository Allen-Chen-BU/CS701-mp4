'use server'
import { Icon } from "@/types";

export default async function getIconDetail(id: string): Promise<Icon> {
    const APIKEY = process.env.ICON_API_KEY;

    const response = await fetch(`https://api.iconfinder.com/v4/icons/${id}`, {
        headers: {
            Authorization: `Bearer ${APIKEY}`,
        }
    });
    
    const result = await response.json();
    return result as Icon;
}