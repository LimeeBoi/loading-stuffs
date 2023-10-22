export default function LoadingThing({ speed, delay, number }) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }  
  console.log(arr.length);
  return (
    <div className="loading-thing-list">      
      {arr.map((id, i) => 
        <div className="loading-thing" key={id} style={{
          animation: `move ${1 / speed}s cubic-bezier(1, 0.5, 0.5, 1) ${i * delay}s infinite alternate both`
        }}/>
      )}
    </div>
  );
}