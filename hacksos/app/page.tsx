import HomeInput from "@/components/homeInput";

export default function Home() {

  return (
    <div className="w-full flex flex-col gap-4" style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1 className="text-8xl font-extrabold">HackSOS</h1>
      <HomeInput />
    </div>
  );
}