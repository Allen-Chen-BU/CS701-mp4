'use client'

import getIconDetail from "@/lib/getIconDetail";
import { Icon } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Detail() {
    const [icon, setIcon] = useState<Icon>();
    const param = useParams<{id: string}>();

    useEffect(() => {
        getIconDetail(param.id).then((data) => {
            setIcon(data);
        });
    }
    ,[]);

    return (
        <>
            <p>
                {icon?.icon_id}
                <Image 
                    src={icon !== undefined ? icon.raster_sizes[icon.raster_sizes.length - 1].formats[icon.raster_sizes[icon.raster_sizes.length - 1].formats.length - 1].preview_url: "https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-090_loader_loading-512.png"} 
                    alt={"icon" + icon?.icon_id}
                    width={icon === undefined ? 256 : icon.raster_sizes[icon?.raster_sizes.length - 1].size_width}
                    height={icon === undefined ? 256 : icon.raster_sizes[icon?.raster_sizes.length - 1].size_height}
                />
            </p>
            <ul>{icon?.tags.map((tag, i) => 
                <li key={i}>{tag}</li>
            )}</ul>
            <table>
                <thead>
                    <tr>
                        <th>Format</th>
                        <th>Size</th>
                        <th>Download</th> 
                    </tr>
                </thead>
                <tbody>
                    {icon?.raster_sizes.map((raster, i) => 
                        <tr key={i}>
                            <td>{raster.formats[0].format}</td>
                            <td>{raster.size}</td>
                            <td>{raster.formats[0].download_url}</td>
                        </tr>
                    )}
                    {icon?.vector_sizes.map((vector, i) => 
                        <tr key={i}>
                            <td>{vector.formats[0].format}</td>
                            <td>{vector.size}</td>
                            <td>{vector.formats[0].download_url}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ul></ul>
        </>
    )
}