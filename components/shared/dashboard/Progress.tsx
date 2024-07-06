import React from "react";
import CircularProgress from "./CircularProgress";
import { getUserCourses } from "@/actions/user.actions";

type Props = {
  userId: number;
};

const Progress = async ({ userId }: Props) => {
  const res = await getUserCourses(userId);
  const courses = res.userCourses;

  const completedCoursesCount = courses.filter(
    (course: any) => course.completed === true
  ).length;

  return (
    <>
      <div className="rounded-xl border border-[#EDEDED] p-5">
        <div>
          <CircularProgress
            progress={(completedCoursesCount / courses.length) * 100}
            gradient="#FB923C"
            text1={`You've completed `}
            text2={`out of ${courses.length} classes`}
            highlight={`${completedCoursesCount}`}
            highlightClass="text-[#FB923C]"
          />
        </div>
      </div>
      {/* <div>
        <div className="mt-5 rounded-xl border border-[#EDEDED] p-5">
          <CircularProgress
            progress={22}
            gradient="#10B981"
            text1="You've done"
            text2="of 67 classes"
            highlight="12"
            highlightClass="text-[#10B981]"
          />
        </div>
      </div> */}
    </>
  );
};

export default Progress;
