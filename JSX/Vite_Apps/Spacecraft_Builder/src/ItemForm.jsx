import { useState } from "react"

function ItemForm({ addItem }) {
    const initialFormData = {
        name: '',
        qty: '',
        purpose: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addItem({ ...formData })
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Item Name: </label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="qty">Quantity: {formData.qty}</label>
            <input
                id="qty"
                type="range"
                min={1}
                max={100}
                name="qty"
                value={formData.qty}
                onChange={handleChange}
            />
            <label htmlFor="purpose">Purpose: </label>
            <input
                id="purpose"
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}

export default ItemForm
