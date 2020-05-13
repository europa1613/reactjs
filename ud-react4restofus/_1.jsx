function OurApp() {
  return (
    <div>
      <h1 className="special">Our Amazing App Header</h1>
      <p>The current time is {new Date().toLocaleString()}</p>
      <small>Copyright text here.</small>
     </div>
  )
}

setInterval(() => ReactDOM.render(<OurApp/>, document.querySelector('#app')), 1000)
