const CreatePost = ({ setIsModal }) => {
  return (
    <div className="w-[55%] mt-10 border border-[#35373B] rounded-lg flex p-4 flex-col bg-[#27292D]">
      <p className="text-lg text-[#C5C7CA]">Create Post</p>
      <div className="flex p-3 mt-4 rounded-lg bg-[#191920]">
        <div className="bg-[#27292D] rounded-full flex justify-center items-center h-12 w-12">
          <p>💬</p>
        </div>
        <input
          type="text"
          className="bg-transparent focus:outline-none ml-4"
          placeholder="How are you feeling today?"
        />
      </div>
      <div
        onClick={() => setIsModal((prev) => !prev)}
        className="ml-auto rounded p-2 mt-4 cursor-pointer px-8 bg-[#4A96FF]"
      >
        <p>Post</p>
      </div>
    </div>
  );
};

export default CreatePost;
