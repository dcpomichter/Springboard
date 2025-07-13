import { useState } from "react"

function ItemForm({ addItem }) {
    const initialFormData = {
        name: '',
        qty: '',
        purpose: ''
    }

    const [formData, setFormData] = useState(initialFormData)
    const [invalidItem, setInvalidItem] = useState({
        name: true,
        qty: true,
        purpose: true
    })
    const [touchedItem, setTouchedItem] = useState({
        name: false,
        qty: false,
        purpose: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        if (value !== '') {
            setInvalidItem(invalidItem => ({ ...invalidItem, [name]: false }))
        } else {
            setInvalidItem(invalidItem => ({ ...invalidItem, [name]: true }))
        }
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!invalidItem.name && !invalidItem.qty && !invalidItem.purpose) {
            addItem({ ...formData })
            setFormData(initialFormData)
        } else {
            alert("Please fill out all Fields correctly")
        }
    }

    const handleFocus = (event) => {
        const { name, value } = event.target

        setTouchedItem(touchedItem => ({ ...touchedItem, [name]: true }))
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
                onFocus={handleFocus}
            />
            {invalidItem.name && touchedItem.name && <span style={{ color: "red" }}>Required</span>}
            <br />
            <label htmlFor="qty">Quantity: {formData.qty}</label>
            <input
                id="qty"
                type="range"
                min={1}
                max={50}
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                onFocus={handleFocus}
            />
            {invalidItem.qty && touchedItem.qty && <span style={{ color: "red" }}>Required</span>}
            <br />
            <label htmlFor="purpose">Purpose: </label>
            <textarea
                id="purpose"
                type="text"
                name="purpose"
                value={formData.purpose}
                rows={4}
                cols={50}
                onChange={handleChange}
                onFocus={handleFocus}
            />
            {invalidItem.purpose && touchedItem.purpose && <span style={{ color: "red" }}>Required</span>}
            <br />
            <button>Add</button>
        </form>
    )
}

export default ItemForm
