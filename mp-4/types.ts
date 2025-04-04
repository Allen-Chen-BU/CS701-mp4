export type Icon = {
    icon_id: number;
    published_at: Date;
    tags: string[];
    vector_sizes: VectorSize[];
    raster_sizes: RasterSize[];
    is_premium:boolean;
}

export type RasterSize = {
    formats: RasterFormat[];
    size: number;
    size_width: number;
    size_height: number;
}

export type RasterFormat = {
    format: string;
    download_url: string;
    preview_url: string;
}

export type VectorSize = {
    formats: VectorFormat[];
    size: number;
    size_width: number;
    size_height: number;
}

export type VectorFormat = {
    format: string;
    download_url: string;
}