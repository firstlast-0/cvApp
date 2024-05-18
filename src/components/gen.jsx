
function Gen({ values, setters }) {
    return (
        <>
            <h3>General Information</h3><br /><br />
            Name: <input type="text" value={values.name} onChange={(event) => setters.setName(event.target.value)} /><br />
            Email: <input type="text" value={values.email} onChange={(event) => setters.setEmail(event.target.value)} /><br />
            Phone: <input type="text" value={values.phone} onChange={(event) => setters.setPhone(event.target.value)} />
        </>
    );
}

export default Gen;
