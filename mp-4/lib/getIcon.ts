'use server'
import { Icon } from "@/types";

export async function getIcon(searchTerm: string): Promise<Icon[]> {
    const APIKEY = process.env.ICON_API_KEY;

    const response = await fetch(`https://api.iconfinder.com/v4/icons/search?query=${searchTerm}&count=100`, {
        headers: {
            Authorization: `Bearer ${APIKEY}`
        }
    });

    const result = await response.json();
    return result.icons as Icon[];
}