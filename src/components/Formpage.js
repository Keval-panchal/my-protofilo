import React from 'react';
import emailjs from 'emailjs-com';
export default function Formpage() {

    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm('Keval@9537311628', 'template_xvccgsm', e.target, 'user_6uXGX1rDgvPdtz2gyJtan')
            .then((result) => {

                console.log(result.text);
                console.log("########################################");
            }, (error) => {
                console.log(error.text);
                console.log("______________________________________________________")
            });
        e.target.reset()
    }
    return <div>
        <div className="form-container">
            <h1 className="mb-5">Do you like my work? Want to get in touch? <br />Send me an Email: kevalpanchal615@gmail.com or<br /> use the form below!</h1>
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <label className="label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" required />

                </div>
                <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" required />

                </div>
                <div className="form-group">
                    <label className="label" htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" required />

                </div>
                <div className="form-group">
                    <label className="label" htmlFor="password">Message</label>
                    <textarea type="text" className="form-control" name="message" rows="5" />

                </div>

                <br />

                <div className="text-ce">
                    <button type="submit" className="btn btn-primary">send</button>
                </div>
            </form>
        </div>
    </div>;


}

