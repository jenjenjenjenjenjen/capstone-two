function Event({e}) {
    return (
        <div>
            <h3>{e.title}</h3>
            {e.description === "" ? null : <p><b>Description: </b>{e.description}</p>}
                <p><b>Category: </b> {e.categories[0].title}</p>
                <p><b>Sources: </b>
                    <ul>
                        {e.sources.map((s) => (
                            <li>
                                <a href={s.url}>{s.id}</a>
                            </li>
                        ))}
                    </ul>
                </p>
        </div>
    )
}

export default Event;