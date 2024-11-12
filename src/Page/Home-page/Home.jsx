import './home.css'

import Header from '../../Layout/Header/Header';


function Home() {
    return (
        
        <div className='homepage-container'>
            <div>
                <Header />
            </div>
            <div className='homepage-body-container'>
                <div className='inner-body-container'>
                    <div className='inner-item'>
                        <div className='item-title'>
                            <h1>กรมเชื้อเพลิงธรรมชาติ</h1>
                        </div>
                        <div className='item-description'>
                            <p>ส่วนของการแสดงเอกสารที่เกี่ยวข้องขององค์กรสำหรับหาข้อมูลรายละเอียดของกรมเชื้อเพลิงธรรมชาติ กระทรวงพลังงาน</p>
                        </div>
                        <button className='item-button' >Show Document</button>
                        {/* notfinish */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
