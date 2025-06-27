import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="title">Qui sommes-nous ?</h1>
        <div className="underline"></div>
        <p className="content">
          Bienvenue sur notre site ! Nous sommes une équipe passionnée dédiée à [votre domaine ou secteur d'activité]. 
          Notre mission est de [décrire brièvement votre mission ou objectif], en fournissant des [produits/services] 
          de haute qualité qui répondent aux besoins de nos clients.
        </p>
        <p className="content">
          Depuis notre création en [année de fondation], nous avons [parler de l'évolution de l'entreprise, des réalisations ou des valeurs]. 
          Nous croyons fermement en [énoncer vos valeurs, comme l'innovation, la durabilité, la satisfaction client, etc.], 
          ce qui nous pousse à améliorer continuellement nos offres.
        </p>
        <p className="content">
          Notre équipe est composée de [mentionner les compétences ou l'expertise de l'équipe, par exemple : experts, passionnés, créatifs], 
          qui travaillent ensemble pour garantir que chaque expérience client soit exceptionnelle.
        </p>
        <p className="content">
          Nous sommes fiers de [parler d'une réalisation spécifique ou d'une contribution à la communauté], 
          et nous nous engageons à [énoncer vos engagements futurs ou aspirations].
        </p>
        <p className="content">
          Merci de nous rejoindre dans cette aventure. Nous sommes impatients de collaborer avec vous et de vous offrir le meilleur 
          de [votre domaine ou secteur d'activité].
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
