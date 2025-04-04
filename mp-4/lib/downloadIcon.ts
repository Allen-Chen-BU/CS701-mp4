'use server'
export default async function downloadIcon(url: string): Promise<Response> {
    const APIKEY = process.env.ICON_API_KEY;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${APIKEY}`
        }
    });

    const result = await response;
    if (result.headers.get('content-type') === "image/png") {

    }
    // console.log(result);
    console.log(result.headers.get('content-type'));
    return result
    // return result.icons as Icon[];
}