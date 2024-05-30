import { updates } from "@/lib/projects"
import Link from "next/link"

export default function UpdatesList() {
  return (
    <>
      <ol className="list-decimal space-y-4">
        {updates.map((updates, index) => {
          return (
            <li key={index}>
              <Link href={updates.slug} className="flex flex-col">
                <div className="flex flex-row align-middle hover:underline">
                  <h3 className="text-lg font-semibold">{updates.title}</h3>
                </div>
                <p className="text-md font-normal">{updates.about}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}
