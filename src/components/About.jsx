import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <br />

        <p className="text-xl py-4 ">
          สวัสดีครับ ผมขอแนะนำตัวเองให้ทุกคนได้รู้จัก ผม นาย ธนดล พงศ์เจษฎา ชื่อเล่น ดล ยินดีที่ได้รู้จักทุกคนครับ <br />
          ขณะนี้กำลังศึกษาอยู่ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ระดับ ปริญญาตรี ชั้นปีที่ 4 <br />
          คณะ วิทยาลัยเทคโนโลยีอุตสาหกรรม หลักสูตร วิศวกรรมศาสตรบัณฑิต สาขาวิชาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ <br />
         


        </p>
      </div>
    </div>
  );
};

export default About;
