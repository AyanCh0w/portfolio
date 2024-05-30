"use client"
import { projects } from "@/lib/projects"
import Link from "next/link"
import { useState } from "react"

export default function ProjectsList() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      {showMore ? (
        <ol className="list-decimal space-y-4">
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <Link
                  href={project.slug}
                  className="flex flex-row max-h-56 gap-16"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row align-middle hover:underline">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-md font-normal">{project.about}</p>
                  </div>
                </Link>
              </li>
            )
          })}
          <button
            className="hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            See Less ↑
          </button>
        </ol>
      ) : (
        <ol className="list-decimal space-y-4">
          {projects.slice(0, 5).map((project, index) => {
            return (
              <li key={index}>
                <Link
                  href={project.slug}
                  className="flex flex-row max-h-56 gap-16"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row align-middle hover:underline">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-md font-normal">{project.about}</p>
                  </div>
                </Link>
              </li>
            )
          })}
          <button
            className="hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            See More ↓
          </button>
        </ol>
      )}
    </>
  )
}
