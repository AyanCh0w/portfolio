import { projects } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"

export default function Spotlight() {
  const project = projects[0]
  return (
    <>
      <div className=" rounded p-2 text-sm max-h-48 h-fit pb-4 w-96">
        <span className="font-medium text-lg">Current Spotlight</span>
        <span className="text-3xl ml-2">✦</span>
        <hr className=" border-gray-800 mt-2"></hr>
        <br />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-0">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <Link href={project.liveurl} target="_blank">
                <p className="italic hover:underline text-sm">
                  {project.liveurl}
                </p>
              </Link>
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
    </>
  )
}
