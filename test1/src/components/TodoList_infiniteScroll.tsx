import { useState, useEffect, useRef } from "react";
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

function InfiniteScroll() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const scrollSection = useRef<HTMLDivElement>(null);

  const fetchcharacters = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setCharacters((prevcharacters) => [...prevcharacters, ...data.results]);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    // Fetch characters when component mounts
    fetchcharacters();
  }, [page]); // Empty dependency array runs once on mount

  // Function to handle scrolling and load more characters

  useEffect(() => {
    const section = scrollSection.current as HTMLDivElement;
    const handleScroll = () => {
      const scrollY = section.scrollTop;
      const windowHeight = section.clientHeight;
      const documentHeight = section.scrollHeight;
      if (scrollY + windowHeight >= documentHeight - 100) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    section.addEventListener("scroll", handleScroll);
    return () => {
      section.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        ref={scrollSection}
        id="characters-list"
        style={{
          height: "400px",
          width: "500px",
          overflowY: "scroll",
          backgroundColor: "blue",
        }}
      >
        {characters.map((character) => (
          <div key={character.id} className="character-item">
            {character.name}
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default InfiniteScroll;
