export default function LoadingThing({ speed, delay, num }) {
  let arr = [];
  for (let i = 0; i < num; i++) 
    arr.push(i);

  return (
    <>      
      {arr.map((id, j) => 
        <div className="loading-thing" key={id} style={{
          animationDelay: `${j * delay}s`,
          animationDuration: `${1 / speed}`
        }}/>
      )}
    </>
  )
}