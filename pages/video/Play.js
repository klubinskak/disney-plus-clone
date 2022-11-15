import { useRouter } from "next/router";

const Play = () => {
    const router = useRouter()
    const videoUrl = router.query.video;

    return (
        <>
        <video width="100%" className="h-[80%]" controls autoPlay>
            <source src={videoUrl} type="video/mp4"/>
        </video>
        </>
    )
}

export default Play; 