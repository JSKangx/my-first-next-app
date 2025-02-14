import Link from "next/link";

export default function Home() {
  return (
    <div>
      안녕하세요. Next.js 입니다.
      <Link href={"/test"}>Test로 이동하기</Link>
    </div>
  );
}
