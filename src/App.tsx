import ternaImg from "./assets/terna_health.png"
import "./App.css"

const App = () => {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={ternaImg} className="base" alt="" />
        </div>
        <div>
          <p>Coming soon</p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <image href="/images/ternahealth.png" />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
