

function Holidays({url,name,paragraph}) {
  return (
    <div
    style={{
        border:"2px solid #0000",
        width: "300px"
    }}>
        <img src ={url}
         alt="irctc" />
         <h2>{name}</h2>
         <p>{paragraph}</p>
         <a href ="">Read More</a>
    </div>
  )
}

export default Holidays