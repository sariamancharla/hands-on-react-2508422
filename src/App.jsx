function App() {
  const name="Star"

  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="Hi" />
          <h1>Meet the <i style={{color:"black",fontSize:"100px"}}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button onClick={()=>alert("Hi")}>Submit</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
