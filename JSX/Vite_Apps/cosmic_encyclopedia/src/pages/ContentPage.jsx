
export default function ContentPage(data) {

    return (
        <div>
            <h1>{data.data.name}</h1>
            <p>{data.data.content}</p>
        </div>
    )
}
