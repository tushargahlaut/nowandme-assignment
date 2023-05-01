import Image from "next/image";

const SinglePost = ({ data }) => {
  return (
    <div className="w-full mt-10 border border-[#35373B] rounded-lg flex p-4 flex-col bg-[#27292D]">
      <div className="flex w-full">
        <div className="bg-[#27292D] rounded-full flex justify-center overflow-hidden items-center h-12 w-12">
          <img
            className="h-full w-full object-cover object-center"
            src={data?.img}
            alt="pic"
          />
        </div>
        <div className="flex flex-col ml-4">
          <p className="text-[#C5C7CA]">{data?.name}</p>
          <p className="text-[#7F8084] font-medium text-sm">
            {data?.time} {data?.isEdited ? " • Edited" : ""}{" "}
          </p>
        </div>
      </div>
      <div className="flex p-4 mt-4 w-full rounded-lg bg-[#191920]">
        <div className="bg-[#27292D] p-3 rounded-full flex justify-center items-center h-12 w-12">
          <p>{data?.emoji}</p>
        </div>
        <div className="text-[#7F8084] ml-3 text-base">
          <p>{data?.body}</p>
        </div>
      </div>
      <div className="flex mt-3 ml-1 cursor-pointer">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.3333 3.83333L2.66662 3.83336C1.8382 3.83336 1.16663 4.50493 1.16663 5.33336V13.3334C1.16663 14.1618 1.8382 14.8334 2.66662 14.8334H10C10.1326 14.8334 10.2598 14.886 10.3536 14.9798L13.5 18.1262V15.3334C13.5 15.0572 13.7238 14.8334 14 14.8334H17.3333C18.1617 14.8334 18.8333 14.1618 18.8333 13.3334V5.33333C18.8333 4.5049 18.1617 3.83333 17.3333 3.83333ZM2.66662 2.83336L17.3333 2.83333C18.714 2.83333 19.8333 3.95262 19.8333 5.33333V13.3334C19.8333 14.7141 18.714 15.8334 17.3333 15.8334H14.5V19.3333C14.5 19.5356 14.3781 19.7179 14.1913 19.7953C14.0045 19.8727 13.7894 19.8299 13.6464 19.6869L9.79289 15.8334H2.66662C1.28591 15.8334 0.166626 14.7141 0.166626 13.3334V5.33336C0.166626 3.95265 1.28591 2.83336 2.66662 2.83336Z"
            fill="#C5C7CA"
          />
        </svg>
        <p className="text-[#7F8084] ml-3 font-medium text-sm">
          {data?.comments} comments
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
