import { Inter } from "next/font/google";
import CreatePost from "@/components/createPost";
import AllPosts from "@/components/allPosts";
import { useState } from "react";
import Modal from "@/components/modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  return (
    <main
      className={`flex min-h-screen bg-[#131319] flex-col items-center p-24 py-12 ${inter.className}`}
    >
      <div>
        <p className="text-[#C5C7CA] text-3xl">Hello Jane</p>
        <p className="text-[#7F8084]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>
      <CreatePost setIsModal={setIsModal} />
      <AllPosts />
      {isModal && <Modal setIsModal={setIsModal} />}
    </main>
  );
}
