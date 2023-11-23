export default function 冰淇淋() {
  let arr = []
  for (let i = 0; i < 69; i++) {
    arr.push(i);
  }
  return (
    <div className="冰淇淋">
      {arr.map(id =>
        <p key={id}>我才在中国, 我有冰淇淋</p>
      )}
    </div>
  )
}