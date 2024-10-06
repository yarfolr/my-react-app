
import Counter from './commponents/Counter'
import List from './commponents/List'
import Header from './commponents/Header'

function App() {


  return (
		<>
			<div>
				<Header />
				<Counter />

				<List title={'My Title'} />
			</div>
		</>
	)
}

export default App
