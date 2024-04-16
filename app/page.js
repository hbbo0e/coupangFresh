import Link from "next/link";

export default function Home(){
  let name = 'hbbo';
  return (
    <div>
      <h4 className="title"> 신선 식품 판매 </h4>
      <h4 className="hi"> 🖐🏻 어서오세요 { name }님 🖐🏻 </h4>
    </div>
  )
}