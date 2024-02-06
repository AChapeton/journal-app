import React from 'react'
import JournalLayout from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { ImageGallery } from '../components'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView/> */}
      <NoteView/>
    </JournalLayout>
  )
}
