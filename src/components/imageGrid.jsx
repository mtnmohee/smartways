import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const itemData = [
  {
    img: "/projects/project 1.jpg",
    title: "project 1",
    rows: 2,
  },
  {
    img: "/projects/project 5.jpg",
    title: "project 2",
    rows: 4,
  },
  {
    img: "/projects/project 4.jpg",
    title: "project 3",
    rows: 3,
  },
  {
    img: "/projects/project 3.jpg",
    title: "project 4",
    rows: 3,
  },
  {
    img: "/projects/project 2.jpg",
    title: "project 5",
    rows: 1,
  },
];

function ImageGrid() {
  return (
    <div className="w-full mx-auto my-10  flex flex-col items-center">
      <h3 className="text-center text-4xl font-bold mb-4">Our Projects</h3>

      <ImageList variant="quilted" cols={3} className="overflow-hidden p-10 ">
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={1}
            rows={item.rows}
            className="hover:z-30"
          >
            <Image
              alt={item.title}
              src={item.img}
              width={300}
              height={200}
              className="rounded-xl hover:scale-110 hover:border-4 border-gray-400 transition-all"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <button className="mt-2 lg:-mt-2 bg-blue-800 rounded-lg px-5 py-2 text-white">
        <Link href="/projects">More Details</Link>
      </button>
    </div>
  );
}

export default ImageGrid;
