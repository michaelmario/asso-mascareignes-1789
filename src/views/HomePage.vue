<template>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Ffirst.webp?alt=media&token=53ccdec4-61b9-44a9-a116-acf0cab41752"
                    alt="happy-whoman" class="img-fluid">

                <div class="container">
                    <div class="carousel-caption">
                        <h1 class="text-center text-light">Accroître la visibilité</h1>
                        <h2 class="text-center text-light">de votre association et atteindre un public plus large </h2>
                        <p>Responsables d'associations, boostez la visibilité de votre association avec un site web
                            professionnel,<br> Contactez nous dès aujourd'hui pour un devis gratuit et donnez à votre
                            association la visibilité qu'elle mérite ! </p>
                        <p><router-link to="/contact" class="text-center btn btn-lg btn-primary"
                                href="/contact">Contact</router-link></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fsecond.webp?alt=media&token=443f5572-23e2-4e18-b687-682961a5371f"
                    alt="people-learn-digital" class="img-fluid">

                <div class="container">
                    <div class="carousel-caption">
                        <h1 class="text-center text-light">Communiquer efficacement </h1>
                        <h2 class="text-center text-light">sur vos activités et actualités </h2>
                        <p>
                            Notre équipe de développeurs web spécialisés dans la création de sites pour associations est
                            là pour vous accompagner.
                            Nous créons des sites web efficaces,personnalisés et optimisés pour vos besoins spécifiques
                        </p>
                        <p><router-link to="/contact" class="text-center btn btn-lg btn-primary"
                                href="/contact">Contact</router-link></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fthird.webp?alt=media&token=83f39d50-3d7e-4541-b00b-99b05ba7859c"
                    alt="brain-storming for e commerce" class="img-fluid">

                <div class="container">
                    <div class="carousel-caption">
                        <h1 class="text-center text-light">Un site web constitue une vitrine</h1>
                        <h2 class="text-center text-light">Accessible 24 heures sur 24 et 7 jours sur 7.</h2>
                        <p>Cela permet à toute personne intéressée de découvrir vos activités, vos valeurs et vos
                            objectifs sans avoir à se déplacer </p>
                        <p><router-link to="/contact" class="text-center btn btn-lg btn-primary"
                                href="/contact">Contact</router-link></p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>

    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="text-center mb-5">Mascareignes-1789 , plateforme éducation numérique</h2>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="dflex my-3">
                    <div class="logoboxImg" data-aos="fade-right" aos-duration="2000">
                        <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fcropped-Logo-mascareigne-1789-300x300.webp?alt=media&token=0719a6e8-3091-4c6e-83b8-a9c781bf3d6b"
                            alt="logoImg">
                    </div>
                    <ul class="mx-3 my-5 firstUL">
                        <li><strong>L‘association Mascareigne-1789</strong> est un acteur clé de notre quartier
                            Oeuvrant pour le bien-être de tous. Elle s’articule autour de trois axes principaux :</li>
                    </ul>
                </div>
                <hr>
                <div class="dflex my-3">
                    <div class="boxImg" data-aos="fade-right" aos-duration="2020">
                        <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2FDesigner.webp?alt=media&token=1486435a-dc48-42f9-b6fa-18ce5e7c3cfe"
                            alt="participation citoyen">
                    </div>
                    <ul class="mx-3 my-5 firstUL">
                        <li><strong>La citoyenneté :</strong> Mascareignes-1789 encourage l’engagement citoyen
                            En proposant des activités favorisant la participation à la vie locale et le développement
                            du sens critique</li>
                    </ul>
                </div>
                <hr>
                <div class="dflex my-3">
                    <div class="boxImg" data-aos="fade-right" aos-duration="2040">
                        <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fmeeting.webp?alt=media&token=e7409294-a23e-428c-92a0-64a5ba24d5bb"
                            alt="Réunion du quartier">
                    </div>
                    <ul class="mx-3 my-5 firstUL">
                        <li><strong>Le social :</strong> L’association met en place des actions visant à renforcer le
                            lien social, à
                            lutter contre l’isolement et à favoriser l’inclusion.</li>
                    </ul>
                </div>
                <hr>
                <div class="dflex my-3">
                    <div class="boxImg" data-aos="fade-right" aos-duration="2080">
                        <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fpeople-meeting-seminar-office-concept.webp?alt=media&token=2942408a-7ccc-4737-89b1-db5764366749"
                            alt="entretien au bureau">
                    </div>
                    <ul class="mx-3 my-5 firstUL">
                        <li><strong>L’économie :</strong> En soutenant des projets locaux et en organisant des
                            événements,
                            Mascareignes-1789
                            contribue au développement économique du quartier.</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <div class="imgcropimg" data-aos="fade-left" aos-duration="2000">
                            <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2FcomputerUser.webp?alt=media&token=338d3777-f2a9-4537-9e8d-ebfbfc534d15"
                                class="card-img-top" alt="jeune et âgées partage  leur connaissance sur le numérique">
                        </div>
                        <h3 class="card-title py-2">Un accès facilité au numérique pour tous</h3>
                    </div>

                    <div class="cardBody">
                        <p class="card-text">Parallèlement à ces axes, Mascareignes-1789 propose des ateliers
                            d’initiation
                            au numérique sur notre plateforme éducation numérique ouvert à tous, des enfants aux
                            seniors.
                        </p>
                        <p class="card-text">Découvrez comment l'inclusion numérique aide les seniors à mieux s'intégrer
                            dans un monde de plus en plus digital.
                            <br>Nos solutions simplifient l'accès aux outils numériques pour tous. |
                        </p>
                        <p>Ces ateliers permettent de :</p>

                        <ul>
                            <li>Découvrir les outils numériques : Ordinateurs, tablettes, smartphones n’auront plus de
                                secrets
                                pour vous !</li>

                            <li>Acquérir des compétences en ligne : Apprenez à effectuer des démarches administratives
                                en
                                ligne,
                                à utiliser les logiciels de base et à découvrir de nouveaux outils.</li>
                            <li>Développer sa créativité numérique : Initiez-vous au coding ou à d’autres logiciels
                                créatifs.
                            </li>
                            <li>Les animateurs de l’association sont là pour vous accompagner et vous guider à votre
                                rythme.
                            </li>
                        </ul>

                        <p>En somme, Mascareignes-1789 est un lieu de vie où chacun peut apprendre, se rencontrer et
                            s’engager.</p>
                        <div class="text-center">
                            <router-link to="/contact" class="text-center btn btn-lg btn-dark" aria-label="link-contact"
                                href="/contact">Contact</router-link>

                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-12">
                <h2 class="text-center my-5">Pourquoi une plateforme éducation numérique ?</h2>
                <div class="row">
                    <div class="col-md-6 bg-dark">
                        <div class="text-light py-5">
                            <p>Alors que le numérique imprègne désormais tous les aspects de notre vie, de nombreuses
                                personnes restent exclues de ses avantages à cause de la fracture numérique.</p>

                            <p>À Mascareignes-1789, nous sommes engagés à combler ce fossé et à favoriser l’inclusion
                                numérique pour tous notre plateforme éducation numérique.</p>

                            <p>Notre action principale se concentre sur la formation au codage, une compétence clé pour
                                l’avenir.</p>

                            <p>Savoir coder permet non seulement de comprendre le monde numérique qui nous entoure, mais
                                aussi d’y participer activement et de développer de nouveaux outils.</p>

                            <p>En luttant contre la fracture numérique , nous encourageons l’épanouissement personnel,
                                l’ouverture de nouvelles opportunités d’emploi , et la créativité au sein de notre
                                communauté.</p>

                            <p>Rejoignez nous dans cette mission pour le Port connectée et inclusive !</p>
                        </div>
                    </div>
                    <div class="col-md-6 bg-dark">
                        <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2FAssociation.webp?alt=media&token=7fd3e410-afd3-4bbc-848c-569a2fb0adc9"
                            alt="Le port connecter et inclusive" class="img-fluid" />
                    </div>
                    <div class="container card my-5">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 class="text-center py-3 bg-light text-dark">Augmentez votre visibilité et boostez
                                    votre
                                    association !</h3>
                                <p>
                                    Un site internet attractif est devenu indispensable pour les associations, mais pas
                                    seulement pour collecter des dons </p>

                                <p>Que vous ayez déjà un site peu visible ou que vous partiez de zéro, un site internet
                                    bien
                                    conçu vous permettra de :</p>

                                <ul>
                                    <li> Attirer de nouveaux adhérents et bénévoles plus facilement</li>
                                    <li>partagez votre passion et vos projets !</li>
                                    <li>Améliorez votre communication et informez efficacement vos publics.</li>
                                    <li>Développez votre notoriété, faites connaître votre association et ses valeurs à
                                        un
                                        large public.</li>
                                </ul>
                                <div class="secondBoxImg">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fbrainestorme.webp?alt=media&token=ed73e972-2a96-4810-bd79-8c1d236a10d9"
                                        alt="braine storming in warm atmospher " class="img-fluid">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h3 class="text-center py-3 bg-light text-dark">Visiter notre plateforme éducation
                                    numérique
                                </h3>
                                <div class="thirdBoxImg">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fmeeting.webp?alt=media&token=e7409294-a23e-428c-92a0-64a5ba24d5bb"
                                        alt="meeting for creating projects" class="img-fluid">
                                </div>
                                <p>Nous créerons votre site de A à Z pour le rendre unique et favoriser son
                                    référencement.
                                </p>

                                <p>Vous serez ainsi certain d’obtenir un site Internet qui est à l’image de votre
                                    association et qui respecte les codes que ce sois visuels, codage ou sécuritaires
                                </p>

                                <p>Nous aiderons aussi :</p>

                                <ul>
                                    <li>La refonte de site Internet </li>
                                    <li>La création de sites e-commerce Le CMS WordPress</li>
                                    <li>L’hébergement Web La maintenance Le Webmarketing (community management, la
                                        rédaction
                                        Web, l’audit SEO, etc.)</li>
                                    <li>La création graphique (logo, brochure, flyer)</li>
                                    <li>Apprenez à gérer le site Web et à ajouter un article</li>
                                    <li>Ajouter et à supprimer les privilèges des utilisateurs( vous pouvez retrouver
                                        des
                                        tutoriels sa sur notre plateforme éducation numérique)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <section class="container-fluid justify-content-center my-5">
        <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fdigital-divide-1.webp?alt=media&token=921588f0-cf82-4220-b9d5-7db324377982"
            alt="" class="img-fluid" id="secImg">
    </section>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h3 class="display fw-normal my-5">Nos Services-Pricing</h3>
                    <p class="fs-5 text-muted">Des solutions sur mesure pour votre réussite.</p>
                </div>
                <main>
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header cardheaderPrice py-3">
                                    <h4 class="my-0 fw-normal text-white">Vitrine</h4>
                                </div>
                                <div class="card-body bg-dark text-white">
                                    <div class="card-title pricing-card-title">
                                        <small class="fw-light h5">A partir de</small>
                                        <h3 class="text-light">€10</h3>
                                    </div>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>5 pages </li>
                                        <li>1 thème au choix</li>
                                        <li> Conformité RGPD</li>
                                        <li>Google Map insére sur le site </li>
                                        <li>Formulaire contact sécurisé</li>
                                    </ul>
                                    <a href="/contact" type="button" class="w-100 btn btn-lg btn-outline-light">Plus
                                        info..</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header cardheaderPrice py-3">
                                    <h4 class="my-0 fw-normal text-white">Site E-Commerce</h4>
                                </div>
                                <div class="card-body bg-secondary text-white">
                                    <div class="card-title pricing-card-title">
                                        <small class="fw-light h5">A partir de</small>
                                        <h3>€500</h3>
                                    </div>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>1 thème au choix </li>
                                        <li>Paiement sécurisé</li>
                                        <li>Fonctionnalité de base</li>
                                        <li>Email Personnaliser</li>
                                        <li>Formulaire contact sécurisé</li>

                                    </ul>
                                    <a href="/contact" type="button"
                                        class="w-100 btn btn-lg btn-outline text-white">Plus
                                        info..</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                                <div class="card-header cardheaderPrice py-3">
                                    <h4 class="my-0 fw-normal text-white">Autre Projet</h4>
                                </div>
                                <div class="card-body">
                                    <div class="card-title pricing-card-title">
                                        <small class="fw-light h5">A la demande plus de</small>
                                        <h3>€500</h3>
                                    </div>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Application métier</li>
                                        <li> Application mobile</li>
                                        <li> Community management</li>
                                        <li>Stratégie digitale et digitalisation de contenus</li>
                                        <li>Etc et plus ...</li>
                                    </ul>
                                    <a href="/contact" type="button" class="w-100 btn btn-lg btn-outline-success">Plus
                                        info..</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 align-self-center">
                        <!--Acordion--->
                        <div class="accordion" id="accordionExample">
                            <h3 class="action text-center display fw-normal my-5">Questions fréquemment posées</h3>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button text-white bg-dark" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        <div class="text-white d-flex justify-content-between align-items-center p-1 ">
                                            <p>Creation d'une Association</p>
                                            <p> <i class="bi bi-arrow-down-circle mx-5"></i></p>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Découvrez le site "Le Port" de la Réunion, votre ressource incontournable pour
                                        la
                                        création d'associations.
                                        Explorez des outils et des conseils pratiques pour établir et gérer votre
                                        association,
                                        tout en bénéficiant d'un réseau de soutien local. Que vous soyez un nouvel
                                        entrepreneur
                                        associatif ou un membre d'une organisation existante, asso-mascareignes-1789
                                        notre
                                        plateforme vous guide à chaque étape.
                                        Rejoignez nous pour dynamiser votre engagement communautaire et faire la
                                        différence dans
                                        votre quartier
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Quels sont les aventages d'avoir un site web pour notre association
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Un site web constitue une vitrine permanente pour votre association, accessible
                                        24
                                        heures sur 24 et 7 jours sur 7.
                                        Cela permet à toute personne intéressée de découvrir vos activités, vos valeurs
                                        et vos
                                        objectifs sans avoir à se déplacer.
                                        En étant présent en ligne, vous augmentez considérablement vos chances d'attirer
                                        de
                                        nouveaux membres, bénévoles et donateurs
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Credibiliter et confiance
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        La création d'un site internet contribue à crédibiliser votre projet. Dans un
                                        monde où
                                        la présence en ligne est essentielle,
                                        un site bien conçu témoigne du sérieux de votre association. Cela inspire
                                        confiance aux
                                        potentiels partenaires et donateurs,
                                        qui sont plus enclins à soutenir une organisation ayant une visibilité
                                        professionnelle
                                        sur le web
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsefour" aria-expanded="false"
                                        aria-controls="collapsefour">
                                        Outils de communication efficace
                                    </button>
                                </h2>
                                <div id="collapsefour" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Un site web vous permet de communiquer efficacement sur vos événements, vos
                                        projets et
                                        vos actions.
                                        Vous pouvez y publier des articles, des photos, des vidéos, et des mises à jour
                                        régulières qui tiennent vos membres et le public informés.
                                        Cela facilite également la diffusion d'informations importantes et la gestion de
                                        vos
                                        projets
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsefive" aria-expanded="false"
                                        aria-controls="collapsefive">
                                        Gestion des adhesions et des dons
                                    </button>
                                </h2>
                                <div id="collapsefive" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Avec un site internet, vous pouvez simplifier le processus d'adhésion et de
                                        collecte de
                                        dons.
                                        Des formulaires en ligne peuvent être intégrés pour faciliter l'inscription de
                                        nouveaux
                                        membres et la contribution financière.
                                        Cela permet de centraliser les informations et de suivre les engagements de
                                        manière plus
                                        efficace
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Sensibilisation et Mobilisation
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Un site web est un excellent moyen de sensibiliser le public à la cause que vous
                                        défendez.
                                        Vous pouvez partager des témoignages, des études de cas et des ressources
                                        éducatives qui
                                        mettent en lumière les enjeux liés à votre mission.
                                        Cela peut également mobiliser davantage de personnes autour de vos activités et
                                        inciter
                                        à l'action
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSept" aria-expanded="false"
                                        aria-controls="collapseSept">
                                        Autonomie et indépendance
                                    </button>
                                </h2>
                                <div id="collapseSept" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        En possédant votre propre site, vous n'êtes pas dépendant des algorithmes des
                                        réseaux
                                        sociaux pour atteindre votre public.
                                        Vous contrôlez le contenu, le design et la manière dont vous souhaitez vous
                                        présenter.
                                        Cela vous permet de développer une stratégie de communication qui vous ressemble
                                        et qui
                                        répond à vos besoins spécifiques.
                                        En somme, un site web est un outil indispensable pour Mascareignes-1789,
                                        permettant non
                                        seulement d'accroître votre visibilité et votre crédibilité,
                                        mais aussi de faciliter la communication, la gestion des adhésions et la
                                        mobilisation
                                        autour de votre cause.
                                        C'est un investissement qui peut transformer votre association et renforcer son
                                        impact
                                        au sein de la communauté.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container my-5">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Flearntocode.webp?alt=media&token=dc04df3a-b160-4ec1-89a8-8e67818758bf"
                                    alt="jeune handicapé apprendre l'informatique" class="img-fluid" data-aos="fade-right" aos-duration="10000">
                            </div>
                            <div class="col-md-6">
                                <h3>Luttons contre la fracture numérique</h3>
                                <p>Mascareignes-1789, nous combattons la fracture numérique en proposant des ateliers
                                    d’inclusion numérique pour tous.</p>
                                <p>Notre objectif est de créer un monde numérique accessible où chacun peut participer
                                    et
                                    profiter des avantages de la technologie . Cela signifie proposer des outils et des
                                    formations adaptés à tous, quels que soient leurs besoins ou leurs handicaps .</p>

                                <p>En réduisant la fracture numérique, nous luttons contre l’isolement social ,
                                    favorisons
                                    l’accès à l’information et à l’éducation, et permettons à chacun de bénéficier des
                                    nouvelles
                                    opportunités professionnelles offertes par le numérique.</p>

                                <p>
                                    <a href="https://design.numerique.gouv.fr/accessibilite-numerique/" target="_blank"
                                        class="link-item"
                                        aria-label="services numériques compréhensibles">L’accessibilité numérique
                                    </a> consiste à rendre les contenus et services numériques compréhensibles et
                                    utilisables par les personnes en situation de handicap
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
   <!-- <section class="container-fluid">
        <div class="row">
            <div class="col">
                <h3 class="text-center py-5">Nos Partenaire </h3>
                <div id="news-slider" class="slide" >
                    <div class="card-group my-5" >
                   <div class="col-md-4 my-5" v-for="(quote, index) in quotes" :key="index">
                    <div class="card h-100 mx-2 post-slide">
                        <div class="card-img-top post-img">
                            <img :src="quote.img"    :alt="quote.name" class="img-fluid imgSlide">
                            <a href="#" class="over-layer"><i class="fa fa-link"></i></a>
                        </div>
                        <div class="card-body post-content">
                            <h5 class="card-title post-title">
                                <a href="#">{{ quote.author }}</a>
                            </h5>
                            <p class="card-text post-description">
                               {{ quote.text }} </p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <span class="post-date"><i class="fa fa-clock-o"></i>Out 27, 2019</span>
                            <a href="#" class="read-more">read more</a>
                        </div>
                    </div>                       
                     </div> 
                    </div>
                     <div class="my-5 py-5 text-center">
                      <button @click="prevQuote" class="prev btn btn-light">Previous</button>
                        <button @click="nextQuote" class="next btn btn-light">Next</button>
                    </div>
            </div>
        </div>
        </div>
    </section>-->
</template>
<script>
export default {
    data() {
        return {
            quotes: [
                { 
                    text: "L’Agame.re vous répare vos appareils informatiques pour prolonger leur vie et leurs usages. L’insertion de ses salariés par l’activité économique et la formation.<br> Et ils encouragent le Recyclage des appareiles informatique.",
                    author: "Agame.re",
                    img:'https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fagame.webp?alt=media&token=5d020e18-f0cc-401d-b69f-dadfa2a377d2',
                    name:'agame.re'
                },
                 
                { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", img:'https://images.unsplash.com/photo-1564979268369-42032c5ca998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500' },
                { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", img:'https://images.unsplash.com/photo-1576659531892-0f4991fca82b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501' }
            ],
            currentQuoteIndex:0,
            interval: null,

        }
    },
    head: {
        title: 'Asso-Mascareignes-1789,',
        meta: [
            {
                name: 'description',
                content: "Notre association aide les association  à renforcer leur présence en ligne grâce à des sites web, et gestion des réseaux sociaux."
            },
            {
                name: "keyword",
                content: "Comment renforcer la présence en ligne des associations,Créer un site web performant pour votre association,La gestion des réseaux sociaux pour booster les association,Stratégie newsletter, marketing par email, newsletter pour associations"
            },
            {
                name: "author",
                content: "Achille Michael Mario"
            },
            {
                name: "copyright",
                content: "asso-mascareignes-1789.com 2024"
            },
            {
                name: "language",
                content: "fr"
            }


        ]


    },
    methods: {
        startSlider() {
            this.interval = setInterval(() => {
                this.nextQuote();
            }, 10000); // Change quote every 3 seconds
        },
        nextQuote() {
            this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
            },
        prevQuote() {
            this.currentQuoteIndex =
                (this.currentQuoteIndex - 1 + this.quotes.length) % this.quotes.length;
        },
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },

    mounted() {
         this.startSlider();
    },
}
</script>
<style scoped>
.carousel-caption>h1 h2 {
    font-size: 20px;
}

.link-item {
    font-weight: bolder;
    color: #0d6efd;
}

/**************** */
/** */

#news-slider {
    margin: 80px;
}

.post-slide {
    background: #fff;
    /* margin: 20px 15px 20px; */
    border-radius: 15px;
    padding-top: 1px;
    box-shadow: 0px 14px 22px -9px #bbcbd8;
   
}

.post-slide .post-img {
    position: relative;
    overflow: hidden;

}
.post-slide .post-img img {
    width: 100%;
    height:auto;
    transform: scale(1, 1);
    transition: transform 0.2s linear;
}

.post-slide:hover .post-img img {
    transform: scale(1.1, 1.1);
}

.post-slide .over-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: linear-gradient(-45deg,
            rgba(6, 190, 244, 0.75) 0%,
            rgba(45, 112, 253, 0.6) 100%);
    transition: all 0.5s linear;
}

.post-slide:hover .over-layer {
    opacity: 1;
    text-decoration: none;
}

.post-slide .over-layer i {
    position: relative;
    top: 45%;
    text-align: center;
    display: block;
    color: #fff;
    font-size: 25px;
}

.post-slide .post-content {
    background: #fff;
    padding: 2px 20px 40px;
    border-radius: 15px;
}

.post-slide .post-title a {
    font-size: 15px;
    font-weight: bold;
    color: #333;
    display: inline-block;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
}

.post-slide .post-title a:hover {
    text-decoration: none;
    color: #3498db;
}

.post-slide .post-description {
    line-height: 24px;
    color: #808080;
    margin-bottom: 25px;
}

.post-slide .post-date {
    color: #a9a9a9;
    font-size: 14px;
}

.post-slide .post-date i {
    font-size: 20px;
    margin-right: 8px;
    color: #cfdace;
}

.post-slide .read-more {
    padding: 7px 20px;
    float: right;
    font-size: 12px;
    background: #2196f3;
    color: #ffffff;
    box-shadow: 0px 10px 20px -10px #1376c5;
    border-radius: 25px;
    text-transform: uppercase;
}

.post-slide .read-more:hover {
    background: #3498db;
    text-decoration: none;
    color: #fff;
}

.owl-controls .owl-buttons {
    text-align: center;
    margin-top: 20px;
}

.owl-controls .owl-buttons .owl-prev {
    background: #fff;
    position: absolute;
    top: -13%;
    left: 15px;
    padding: 0 18px 0 15px;
    border-radius: 50px;
    box-shadow: 3px 14px 25px -10px #92b4d0;
    transition: background 0.5s ease 0s;
}

.owl-controls .owl-buttons .owl-next {
    background: #fff;
    position: absolute;
    top: -13%;
    right: 15px;
    padding: 0 15px 0 18px;
    border-radius: 50px;
    box-shadow: -3px 14px 25px -10px #92b4d0;
    transition: background 0.5s ease 0s;
}

.owl-controls .owl-buttons .owl-prev:after,
.owl-controls .owl-buttons .owl-next:after {
    content: "\f104";
    font-family: FontAwesome;
    color: #333;
    font-size: 30px;
}

.owl-controls .owl-buttons .owl-next:after {
    content: "\f105";
}

@media only screen and (max-width: 1280px) {
    .post-slide .post-content {
        padding: 0px 15px 25px 15px;
    }
}

/********************* */

@media(max-width:768px) {
    .carousel-inner {
        margin-top: 46px;
    }

    .carousel-caption {
        right: 5%;
        left: 5%;
        padding: 10px;
        bottom: 3.25rem;
    }

    .carousel-item>img {
        top: -66px;
    }
}

@media(max-width:320px) {
    .carousel-inner {
        margin-top: 73px;
    }
}
</style>