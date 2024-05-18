function WorkSub({ values }) {
    return (
        <>
            <h3>Work Experience</h3>
            <br />
            {values.work.map((job, index) => {
                return (
                    <div key={index}>
                        Company: <h2>{job.company}</h2>
                        <br />
                        Position: <h2>{job.position}</h2>
                        <br />
                        Responsibilities: <h2>{job.resp}</h2>
                        <br />
                        Start date: <h2>{job.start}</h2>
                        <br />
                        End date: <h2>{job.end}</h2><br /><br />
                    </div>
                );
            })}
        </>
    );
}

export default WorkSub;
