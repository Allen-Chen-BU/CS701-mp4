import downloadIcon from "@/lib/downloadIcon";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
    const params = request.nextUrl.searchParams;
    let url = params.get('url');
    if (url === null) {
        url = "";
    }

    return downloadIcon(url);
}