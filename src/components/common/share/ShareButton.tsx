"use client";

import React, { useState } from "react";
import ShareModal from "./ShareModal";
import Image from "next/image";

function ShareButton({
  postId,
  title,
  content,
  imgUrl,
}: {
  postId: string;
  title: string;
  content: string;
  imgUrl: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
<<<<<<< HEAD
        className="w-[120px] py-[10px] flex items-center justify-center gap-[6px] bg-main-1 border border-main-8 rounded-full"
=======
        className="w-[120px] py-[9px] flex items-center justify-center gap-[6px] border border-main-8 rounded-full"
>>>>>>> 7b80bb298a6dabdb18081b1961ce140eb25a0c59
      >
        <Image
          src="/img/icon-share.png"
          alt="공유 이미지"
          width={16}
          height={22}
        />
        <p className="text-main-8 text-[20px]">공유</p>
      </button>
      {isModalOpen && (
        <ShareModal
          postId={postId}
          title={title}
          content={content}
          imgUrl={imgUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default ShareButton;
