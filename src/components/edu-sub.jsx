function EduSub({ values }) {
    return (
        <>
            <h3>Education</h3>
            <br />
            {values.educ.map((edu, index) => {
                return (
                    <div key={index}>
                        School: <h2>{edu.school}</h2>
                        <br />
                        Title of Study: <h2>{edu.title}</h2>
                        <br />
                        Date: <h2>{edu.date}</h2><br />
                    </div>
                );
            })}
        </>
    );
}

export default EduSub;
