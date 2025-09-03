import Banner from "../../components/banner/banner";
import { useEffect, useState } from "react";

const Home = () => {
    const [locations, setLocations] = useState([]) 
    const getLogements = async () => {
        const response = await fetch('/data/logements.json')
        const data = await response.json()
        setLocations(data)
    }

    useEffect(() => {
        getLogements()
    }, [])

    return (
        <>
            <Banner />
            <main className="home">
                <section className="cards">
                    {locations.map((location) => (
                        <Card 
                            key={location.id} 
                            title={location.title} 
                            cover={location.cover} 
                            id={location.id}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Home;