

import HomeHeader from "@/widgets/home/home-header/HomeHeader";
import getSongs from "@/action/getSongs";
import HomeBody from "@/widgets/home/home-body/SongList";
export const revalidate = 0;
export default async  function Home() {
    const songs = await getSongs()
    return (
        <>
            <HomeHeader/>
            <HomeBody songs={songs}/>
        </>

    )
}
