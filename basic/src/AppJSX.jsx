import './App.css';

function AppJSX() {
  const name = '혜인이';
  const list = ['고양이', '강아지', '펭귄'];
  return (
    <>
      <h1 className="orange">{`Hello@! ${name}`}</h1>
      <p>{name}</p>
      <ul>
        {list.map((item) => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default AppJSX;
