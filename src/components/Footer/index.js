import React from 'react';
import { FooterBase } from "./styles";

function Footer() {
    return (
        <FooterBase className="col-12 text-center bg-dark">
            <div className="py-4">
                <a href="https://pedromartins.dev" target="_blank">Pedro Martins</a>
                <p>Baseado nos conteúdos da Imersão React Alura</p>
            </div>
        </FooterBase>
    );
}

export default Footer;