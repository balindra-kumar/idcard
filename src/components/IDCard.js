
const IDCard = ({ data, format }) => {
  
    console.log('formate getting', format)
    return (
        <>
        
       
        <div className={`id-card ${format}`}>
            {format === 'format1' && (
                <> <img src={data.ImageURL} alt={`${data.Name}'s ID`} className="id-card-image" />
                    <h2>Name: {data.Name}</h2>
                    <p>ID: {data.ID}</p>
                    <p>Email: {data.Email}</p>
                    <p>Phone: {data.Phone}</p>
                </>
            )}

            {format === 'format2' && (
                <table>
                    <tr>
                        <td colSpan={2}>  <img src={data.ImageURL} alt={`${data.Name}'s ID`} className="id-card-image" /></td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{data.Name}</td>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <td>{data.ID}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{data.Email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{data.Phone}</td>
                    </tr>
                </table>
            )}

            {format === 'format3' && (
                <div className="card-style-3">
                     <img src={data.ImageURL} alt={`${data.Name}'s ID`} className="id-card-image" />
                    <h3>Employee ID Card</h3>
                    <p><strong>Name:</strong> {data.Name}</p>
                    <p><strong>ID:</strong> {data.ID}</p>
                    <p><strong>Email:</strong> {data.Email}</p>
                </div>
            )}

            {format === 'format4' && (
                <div className="card-style-4">
                     <img src={data.ImageURL} alt={`${data.Name}'s ID`} className="id-card-image" />
                    <h2>{data.Name}</h2>
                    <p>ID: {data.ID}</p>
                    <div>
                        <span>Email: {data.Email}</span>
                        <span>Phone: {data.Phone}</span>
                    </div>
                </div>
            )}

            {format === 'format5' && (
                <div className="card-style-5">
                    <img src={data.ImageURL} alt={`${data.Name}'s ID`} className="id-card-image" />
                    <h4>ID Card</h4>
                    <h2>{data.Name}</h2>
                    <p><strong>ID:</strong> {data.ID}</p>
                    <p><strong>Contact:</strong> {data.Phone}</p>
                </div>
            )}
        </div>
        </>
    );
};

export default IDCard;
