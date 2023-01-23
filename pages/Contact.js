import { motion as m } from "framer-motion";

export default function Contact() {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{opacity: 0}}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <div className="my-96 p-1">
        <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
          Let's Talk
        </h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h3>Find me!</h3>
        </div>
        <div className="lg:text-6xl text-2xl underline">
          <ul>
            <li className="pb-2">Twitter</li>
            <li className="pb-2">Instagram</li>
            <li className="pb-2">Facebook</li>
            <li className="pb-2">Linkedin</li>
          </ul>
        </div>
      </div>
    </m.main>
  );
}
