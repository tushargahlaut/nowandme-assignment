import SinglePost from "./singlePost";

const dummyData = [
  {
    id: 1,
    name: "Theresa Webb",
    time: "5mins ago",
    emoji: "👋",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: "24",
    isEdited: false,
    img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    time: "8mins ago",
    emoji: "😞",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: "24",
    isEdited: true,
    img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const AllPosts = () => {
  return (
    <div className="w-[55%]">
      <div className="w-full">
        {dummyData.map((e) => {
          return <SinglePost key={e.id} data={e} />;
        })}
      </div>
    </div>
  );
};

export default AllPosts;
