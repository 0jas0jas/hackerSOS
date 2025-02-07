import HomeInput from "@/components/homeInput";

export default function Home() {

  return (
    <div className="w-full flex flex-col gap-4" style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1 className="text-8xl font-extrabold"><span className="underline underline-offset-2 decoration-8 decoration-info">Hack</span><span className="">S<span className="text-error">.</span>O<span className="text-error">.</span>S<span className="text-error">.</span></span></h1>
      <HomeInput />
    </div>
  );
}