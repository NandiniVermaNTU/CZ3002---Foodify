import React, { useRef} from 'react';
import emailjs from 'emailjs-com';

const key="wPYUMGO_n9yaA9IRe";
const name="Yen";
const from_name="Foodify";
const message="expiring in 3 days";
const email="yenlinh.2902@gmail.com";

var templateParams = {
    name: 'Yen',
    from_name: 'Foodify',
    message: 'Test foodify',
    email: 'yenlinh.2902@gmail.com'
  };

export default function Notification() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

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
        // <div>
        //     <div className="container">
        //     <form onSubmit={sendEmail}>
        //             <div className="row pt-5 mx-auto">
        //                 <div className="col-8 form-group mx-auto">
        //                     <input type="text" className="form-control" placeholder="Name" name="name"/>
        //                 </div>
        //                 <div className="col-8 form-group pt-2 mx-auto">
        //                     <input type="email" className="form-control" placeholder="Email Address" name="email"/>
        //                 </div>
        //                 <div className="col-8 form-group pt-2 mx-auto">
        //                     <input type="text" className="form-control" placeholder="Subject" name="subject"/>
        //                 </div>
        //                 <div className="col-8 form-group pt-2 mx-auto">
        //                     <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
        //                 </div>
        //                 <div className="col-8 pt-3 mx-auto">
        //                     <input type="submit" className="btn btn-info" value="Send Message"></input>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>

    );
}