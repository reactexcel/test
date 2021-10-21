import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { courses } from "../../courses.js";

interface ICourseDetails {
    course: string,
    content: string,
    image:string,
    id:Number,
    duration:Number
  }[]

const Post = () => {
  const router = useRouter();
  const [courseDetails, setCourseDetail] = useState<ICourseDetails>({
    course:"",
    content:"" ,
    image:"",
    id:0,
    duration:0
  });

 
  useEffect(() => {
    const findCourse = courses.find((item:any) =>item.id == router.query.id);
    /* @ts-ignore */
    setCourseDetail(findCourse);
  }, [router.query]);

  return (
    <div className="max-w-screen-xl mx-auto dark:text-white xs:mx-4 ">
      {courseDetails?
      <div className="flex flex-row flex-wrap">
        <div className=" pt-6 container max-w-3xl mx-auto">
          <div className="flex justify-between flex-wrap  mx-auto my-4">
            <h2 className=" max-w-2xl text-5xl font-semibold leading-tight ">
              {courseDetails.course}
            </h2>
            <p className="my-6 ">{courseDetails.duration} years</p>
          </div>
          <img
            src={courseDetails.image}
            className="mx-auto w-full"
            alt="img"
            style={{ height: "400px" }}
          />
          <p className="my-4">{courseDetails.content}</p>
          <hr className="my-8" />
          <div className="mx-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </div>
        </div>
      </div>: null
}
    </div>
  );
};

export default Post;
