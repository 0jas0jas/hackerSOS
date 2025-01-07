"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    router.push(`/issue?message=${encodeURIComponent(message)}`);
  };

  return (
    <div className="w-full flex flex-col gap-4" style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>HackSOS</h1>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          placeholder="Enter your message"
          type="text"
          value={message}
          variant="flat"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <button type="button" onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//       <div className="inline-block max-w-xl text-center justify-center">
//         <span className={title()}>Make&nbsp;</span>
//         <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
//         <br />
//         <span className={title()}>
//           websites regardless of your design experience.
//         </span>
//         <div className={subtitle({ class: "mt-4" })}>
//           Beautiful, fast and modern React UI library.
//         </div>
//       </div>

//       <div className="flex gap-3">
//         <Link
//           isExternal
//           className={buttonStyles({
//             color: "primary",
//             radius: "full",
//             variant: "shadow",
//           })}
//           href={siteConfig.links.docs}
//         >
//           Documentation
//         </Link>
//         <Link
//           isExternal
//           className={buttonStyles({ variant: "bordered", radius: "full" })}
//           href={siteConfig.links.github}
//         >
//           <GithubIcon size={20} />
//           GitHub
//         </Link>
//       </div>

//       <div className="mt-8">
//         <Snippet hideCopyButton hideSymbol variant="bordered">
//           <span>
//             Get started by editing <Code color="primary">app/page.tsx</Code>
//           </span>
//         </Snippet>
//       </div>
//     </section>
//   );
// }
