import {
  GitHub,
  LinkedIn,
  Discord,
  Twitter,
  Youtube,
} from "@/components/IconLinks"

export default function MainBar() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <GitHub />
        <LinkedIn />
        <Discord />
        <Twitter />
        <Youtube />
      </div>
      <div className="flex-col">
        <h1 className="font-semibold text-3xl">
          Hi, I'm Ayan Chowdhary <span className="text-4xl ml-2">👋🏼</span>
        </h1>
        <h1 className="italic font-normal">Student Developer</h1>
      </div>
    </>
  )
}
