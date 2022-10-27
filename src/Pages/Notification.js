import React, { useRef} from 'react';
import emailjs from 'emailjs-com';

const key="wPYUMGO_n9yaA9IRe";

var templateParams = {
    name: 'Yen',
    from_name: 'Foodify',
    message: 'Test foodify',
    email: 'ngocyen001@e.ntu.edu.sg'
  };

export default function Notification() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();    

    emailjs.send('gmail', 'template_g00zyy7', templateParams, key)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
  }



  return (
    <div class="flex justify-center lg:justify-start mt-5 px-5">
        <button class="px-4 py-3 bg-teal-500 text-white text-sm font-semibold rounded hover:bg-teal-700"
                onClick={sendEmail} >Send email</button>
    </div>

    );
}