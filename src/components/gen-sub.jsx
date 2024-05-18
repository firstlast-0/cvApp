function GenSub({ values }) {
    return (
        <>
            <h3>General Information</h3><br />
            Name: <h1>{values.name}</h1><br />
            Email: <h2>{values.email}</h2><br />
            Phone: <h2>{values.phone}</h2>
        </>
    );
}

export default GenSub;
