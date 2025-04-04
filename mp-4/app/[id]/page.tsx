'use client'

import getIconDetail from "@/lib/getIconDetail";
import { Icon } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Detail() {
    const [icon, setIcon] = useState<Icon>();
    const param = useParams<{id: string}>();

    useEffect(() => {
        getIconDetail(param.id).then((data) => {
            setIcon(data);
        });
    }
    ,[]);

    function handleDownload(url: string) {
        fetch(`api/image?url=${url}`).then((response) =>
            response.blob()
        ).then((blob) =>
            window.open(URL.createObjectURL(blob), "image")
        )
    }

    return (
        <>
            <Image 
                src={icon !== undefined ? icon.raster_sizes[icon.raster_sizes.length - 1].formats[icon.raster_sizes[icon.raster_sizes.length - 1].formats.length - 1].preview_url : "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-090_loader_loading-512.png"} 
                alt={"icon" + icon?.icon_id}
                width={icon === undefined ? 256 : icon.raster_sizes[icon?.raster_sizes.length - 1].size_width}
                height={icon === undefined ? 256 : icon.raster_sizes[icon?.raster_sizes.length - 1].size_height}
                className="mx-auto w-1/4"
            />
            <ul className="flex flex-row justify-center my-2">
                {icon?.tags.map((tag, i) => 
                    <li key={i} className="mx-2 text-xl">{tag}</li>
                )}
            </ul>
            <p className={(icon?.is_premium ? " block " : " hidden ") + " text-red-500 text-center"}>Premium Icon, not downloadable</p>
            <table className="mx-auto border border-collapse mb-4">
                <thead>
                    <tr>
                        <th className="border p-1">Format</th>
                        <th className="border p-1">Size</th>
                        <th className="border p-1">Download</th> 
                    </tr>
                </thead>
                <tbody>
                    {icon?.raster_sizes.map((raster, i) => 
                        <tr key={i}>
                            <td className="border p-1">{raster.formats[0].format}</td>
                            <td className="border p-1">{raster.size}</td>
                            <td className="border p-1">
                                <Link
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!icon.is_premium) {
                                            handleDownload(raster.formats[0].download_url);
                                        }                                        
                                    }}
                                    className={icon.is_premium ? "text-gray-400" : ""}
                                    >
                                        {raster.formats[0].download_url}
                                </Link>
                            </td>
                        </tr>
                    )}
                    {icon?.vector_sizes.map((vector, i) => 
                        <tr key={i}>
                            <td className="border p-1">{vector.formats[0].format}</td>
                            <td className="border p-1">{vector.size}</td>
                            <td className="border p-1">
                                <Link
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!icon.is_premium) {
                                            handleDownload(vector.formats[0].download_url);
                                        }                                        
                                    }}
                                    className={icon.is_premium ? "text-gray-400" : ""}
                                    >
                                        {vector.formats[0].download_url}
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}