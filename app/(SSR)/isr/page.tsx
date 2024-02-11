import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Icremental Static Regeneration',
  }

export const revalidate = 15;  //in secconds

const Dynamic = async () => {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
    {
        // next: {revalidate: 0} //in secconds
    }
    );
    const image: UnsplashImage = await response.json();
    if (!image || !image.urls || !image.urls.raw) {
        console.error("Invalid image format:", image);
        return null;
    }
    
    const width = Math.min(455, image.width)
    const height = (width * image.height) / image.height

return (
    <div className="">
    <Image src={image.urls.raw}
    alt={image.description}
    width={width}
    height={height}
    className="rounded-lg"
    />
    <p>by <Link href={"/users/" + image.user.username}>{image.user.username}</Link></p>
</div>
)
}

export default Dynamic