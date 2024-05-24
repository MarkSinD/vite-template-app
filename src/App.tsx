import './App.css'
import { useState } from 'react'

import { useGetPokemonByNameQuery } from './pokemon'
import { A } from './pure/A'
import { AMemo } from './with-memo/AMemo'

const App = () => {
	const { data } = useGetPokemonByNameQuery('ditto')
	const [count, setCount] = useState(0)

	return (
		<>
			<span>{data?.name}</span>
			<img alt="pic" src={data?.sprites?.front_default} />
			<A />
			<AMemo />
			<span>{count}</span>
			<button onClick={() => setCount(c => c + 1)}>Add</button>
		</>
	)
}

export default App
