function Person(props) {
    return (
        <>
            <span>{props.name}</span>
        </>
    );
}

function Message(props) {
    return (
        <>
            <span>{props.text}</span>
        </>
    );
}


export function Greeting(props) {
    const { text, name, user } = props;
    const { username, src, userSize } = user;
    return (
        <>
            <p>
                <Message text={text} />, <Person name={name}/>
            </p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <p>{username}</p>
                <img
                    src={src}
                    alt={"Photo of " + username}
                    style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        paddingLeft: "10px",
                    }}
                />
            </div>
        </>
    );
}