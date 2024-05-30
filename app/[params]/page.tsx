"use client"
import { Project, projects } from "@/lib/projects"
import Link from "next/link"
import MainBar from "@/components/MainBar"
import Image from "next/image"

export default function Page({ params }: { params: { params: string } }) {
  const project: Project =
    projects[projects.findIndex((project) => project.slug === params.params)]

  return (
    <>
      <main className="xl:w-6/12 xl:mt-36 lg:w-7/12 lg:mt-30 md:w-8/12 md:mt-24 w-9/12 mt-16 mx-auto flex flex-col gap-8">
        <div className="gap-0">
          <MainBar />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={"/"}>
            <h2 className="text-md font-normal hover:underline">← back</h2>
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-0">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className=" text-sm">{project.date.toLocaleDateString()}</p>
              </div>
              <div className="flex flex-col gap-0 text-right">
                <Link href={project.liveurl} target="_blank">
                  <p className="italic hover:underline text-sm">
                    {project.liveurl}
                  </p>
                </Link>
                <p className="text-md font-normal">{project.about}</p>
              </div>
            </div>
            <p className="text-lg">{project.description}</p>
            <Image
              src={`/images/${project.imageurl}`}
              width={300}
              height={150}
              alt="Picture of the author"
              className="mx-auto mt-12 rounded-md p-1 border"
            />
          </div>
        </div>
      </main>
    </>
  )
}
