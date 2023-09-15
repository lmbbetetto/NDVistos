import style from './style.module.css'

import { AiFillPhone } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { FaFacebookSquare } from 'react-icons/fa'
import { FormEvent, useEffect, useRef, useState } from 'react'

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { toast } from 'react-toastify'

export function Contact() {
    useEffect(() => {
        document.title = 'Contato - N&D Vistos'
    })

    const form = useRef<HTMLFormElement | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const sendEmail = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm('service_5wzgnnq', 'template_z7w37fo', form.current, 'pS5AHSsqFSd69Znky')
            .then((_result: EmailJSResponseStatus) => {
                toast.success("Mensagem enviada!");
                resetForm();
            })
            .catch((_error) => {
                toast.error("Mensagem não enviada!");
                resetForm();
            });
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <>
            <div className={style.cover}>
                <h1>Contato</h1>
            </div>

            <div className={style.container}>
                <div className={style.contact}>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <AiFillPhone />
                            <span>+55 43 99174-3584</span>
                            <span>+61 451 066 072</span>
                        </div>

                        <div className={style.card}>
                            <ImLocation />
                            <span>217 Commonwealth, St Surry Hills, Sydney NSW - Austrália</span>
                        </div>

                        <div className={style.cardRS}>
                        <a href="https://www.facebook.com/people/ND-Vistos/100090691496608/?mibextid=ZbWKwL" target='_blank'><FaFacebookSquare size={30} /></a>
                        </div>
                    </div>

                    <div className={style.form}>
                        <form ref={form}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome completo"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telefone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                rows={7}
                                placeholder="Mensagem"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit" className={style.btnForm} onClick={sendEmail}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}