// UserProfile.jsx - Bản đã sửa lỗi
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>
            <img 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                alt="Ảnh đại diện" 
                style={{ width: '100px', borderRadius: '50%' }}
            />
            <table border="1" style={{ width: '100%', marginTop: '10px' }}>
                <tbody>
                    <tr>
                        <th style={{ padding: '8px' }}>Họ tên:</th>
                        <td style={{ padding: '8px' }}>nguyễn phúc an</td>
                    </tr>
                    <tr>
                        <th style={{ padding: '8px' }}>Email:</th>
                        <td style={{ padding: '8px' }}>phucan@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;