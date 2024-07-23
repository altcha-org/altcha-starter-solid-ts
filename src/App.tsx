import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing altcha package will introduce a new element <altcha-widget>
import 'altcha'

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': globalThis.JSX.IntrinsicElements['altcha-widget']
    }
  }
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">

        <form action="#">
          <fieldset>
            <label>Name:</label>
            <input type="text" name="name" />
          </fieldset>

          <fieldset>
            <label>Message:</label>
            <textarea name="message"></textarea>
          </fieldset>

          <fieldset>
            {/*Configure your `challengeurl` and remove the `test` attribute, see docs: https://altcha.org/docs/website-integration/#using-altcha-widget */}
            <altcha-widget
              style={{'--altcha-max-width': '100%'}}
              debug
              test
            ></altcha-widget>
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
