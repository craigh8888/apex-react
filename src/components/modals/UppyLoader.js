import {Dashboard} from '@uppy/react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import React from 'react'

const UppyLoader =() => {

    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 1 },
        autoProceed: true,
      })
      
      uppy.use(Tus, { endpoint: '/upload' })
      
      uppy.on('complete', (result) => {
        const url = result.successful[0].uploadURL
        store.dispatch({
          type: 'SET_USER_AVATAR_URL',
          payload: { url },
        })
      })



    return (

        <Dashboard />
    )
}

export default UppyLoader