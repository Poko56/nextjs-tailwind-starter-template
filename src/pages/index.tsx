import Base from '@components/Base.component'
import styles from '@styles/Home.module.css'

function Home(): JSX.Element {
  return (
    <Base title="Home Page">
      <h1 className={styles.title}>Home Page</h1>

      <div className="pt-10">
        <button
          type="button"
          onClick={() => {
            window.alert('Button is Clicked!')
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Test Button
        </button>
      </div>
    </Base>
  )
}

export default Home
