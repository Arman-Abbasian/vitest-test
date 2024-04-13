import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  interface Origin {
    name: string;
    url: string;
  }
const ReactInfiniteScrollPackage=()=>{
  const [items,setItems]=useState<Character[]>([])
  

  const fetchMoreData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character`
      );
      const data = await response.json();
      setItems((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };
  useEffect(() => {
    // Fetch characters when component mounts
    fetchMoreData();
  }, []);

    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((i, index) => (
            <div style={style} key={index}>
              <p>{i.name} - #{index}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
}
export default ReactInfiniteScrollPackage;
