import React from 'react'
import NavigateBackButton from '../components/NavigateBackButton'
import { Form, redirect, useActionData } from 'react-router-dom'
import SpaceTravelApi from '../services/SpaceTravelApi'
import styles from './Construction.module.css'

export default function Construction() {
  // const data = useActionData()
  return (
    <div className='builder'>
      <h3>Build a new Spacecraft!</h3>
      <Form method='post' action='/spacecrafts/new'>
        <label className={styles.label}>
          <span>Ship Name:</span>
          <input type='text' name='name' required />
        </label>
        <br />
        <label className={styles.label}>
          <span>Capacity:</span>
          <input type='number' name='capacity' required />
        </label>
        <br />
        <label className={styles.label}>
          <span>Image URL:</span>
          <input type='url' name='pictureUrl' />
        </label>
        <br />
        <label className={styles.label}>
          <span>Description:</span>
          <textarea name='description' required></textarea>
        </label>
        <br />
        <button>Create</button>
      </Form>
      <NavigateBackButton />
    </div>
  )
}

export const constructionAction = async ({request}) => {
  const data = await request.formData()

  const submission = {
    name: data.get('name'),
    capacity: Number(data.get('capacity')),
    description: data.get('description'),
    pictureUrl: data.get('pictureUrl'),
  }
  console.log(submission)

  //send post request, simulated
  await SpaceTravelApi.buildSpacecraft(submission)
  //redirect
  return redirect('/spacecrafts')
}
