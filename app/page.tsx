"use client"
import MainBar from "@/components/MainBar"
import Link from "next/link"
import ProjectsList from "@/components/ProjectsList"
import UpdatesList from "@/components/UpdatesList"
import Spotlight from "@/components/Spotlight"

export default function Home() {
  return (
    <>
      <main className="xl:w-6/12 xl:mt-36 lg:w-7/12 lg:mt-30 md:w-8/12 md:mt-24 w-9/12 mt-16 mx-auto flex flex-col gap-8 mb-16">
        <div className="flex flex-col gap-2">
          <div className="gap-0">
            <MainBar />
          </div>
          <p className="text-md">
            I specialize in Machine Learning and full stack development. I enjoy
            building intelligent applications that leverage data-driven insights
            to create impactful user experiences.
          </p>
        </div>

        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">My Tech Skills Include:</h2>
              <ol className="list-decimal text-md">
                <li>Machine Learning Developement</li>
                <li>Full Stack Web Development</li>
                <li>Data Science / Analysis</li>
              </ol>
            </div>
            <div className="">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">My Recent Projects:</h2>
                <ProjectsList />
              </div>
            </div>
          </div>

          <div className="w-fit">
            <Spotlight />
          </div>
        </div>
      </main>
    </>
  )
}
