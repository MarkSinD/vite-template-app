import { memo } from 'react'

import { CMemo } from './CMemo'

export const BMemo = memo(() => {
	console.log('B Memo')

	return <CMemo />
})

BMemo.displayName = 'AMemo'
