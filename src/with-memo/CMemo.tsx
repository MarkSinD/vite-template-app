import { memo } from 'react'

export const CMemo = memo(() => {
	console.log('A Memo')

	return <div>123</div>
})

CMemo.displayName = 'CMemo'
