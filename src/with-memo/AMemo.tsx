import { memo } from 'react'

import { BMemo } from './BMemo'

export const AMemo = memo(() => {
	console.log('A Memo')

	return <BMemo />
})

AMemo.displayName = 'AMemo'
