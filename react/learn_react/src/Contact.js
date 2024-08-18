import React from "react"
// import imge from "./assest/cat1.png"

export default function Contact({img, name, no, email}) {
    return (
        <section className="container">
        <div className="box">
        <div className="contact-card">
            <img src={require(`./assest/${img}`)} alt="cat" width={200} height={200}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={require(`./assest/phone-icon.png`)}/>
                <p>{no}</p>
            </div>
            <div className="info-group">
                <img src={require(`./assest/mail.png`)}/>
                <p>{email}</p>
            </div>
        </div>
        </div>
        </section>
    )
}
