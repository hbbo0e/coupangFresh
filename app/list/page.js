export default function List(){

    let products = [ '토마토', '파스타', '코코넛' ]

    return (
      <div>
        <h4 className="title"> 신선 식품 판매목록 </h4>
        {
            products.map(()=>{
                return (
                    <div className="food">
                        <h5> {products[0]} 1000원 </h5>
                    </div>
                )
            })
        }
      </div>
    )
  }