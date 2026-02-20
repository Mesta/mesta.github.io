import "./App.css";

function App() {
	return (
		<div className="about">
			{/* Hero */}
			<section className="hero">
				<img src="/logo.svg" alt="Mesta" className="hero__logo" />
				<h1 className="hero__name">Jeremy Lardet</h1>
				<h2 className="hero__title">Tech Leader orienté Produit</h2>
				<p className="hero__tagline">
					Je construis des produits et des équipes. Des systèmes qui résolvent
					des problèmes réels, de la manière la plus élégante et efficace
					possible.
				</p>
			</section>

			<hr className="divider" />

			{/* Mission & Vision */}
			<section className="section">
				<div className="section__inner">
					<span className="section__label">Mission</span>
					<h2 className="section__heading">
						Créer des systèmes et des produits qui résolvent des problèmes réels
					</h2>
					<p className="section__text">
						De la manière la plus élégante et efficace possible. Le faire avec
						une équipe où chacun trouve sa place et grandit.
					</p>
					<p className="section__text">
						Mon ambition : devenir un CTO confirmé et serial entrepreneur,
						reconnu pour sa capacité à construire des produits et des équipes.
						Bâtir une réputation de confiance et de crédibilité — un track
						record qui parle de lui-même.
					</p>
				</div>
			</section>

			<hr className="divider" />

			{/* Values */}
			<section className="section">
				<div className="section__inner">
					<span className="section__label">Valeurs</span>
					<h2 className="section__heading">Ce qui guide mes décisions</h2>
					<div className="values">
						<div className="value-card">
							<h3 className="value-card__title">Ownership</h3>
							<p className="value-card__desc">
								Prendre ses responsabilités, assumer ses décisions et leurs
								conséquences. Attendre la même chose des autres.
							</p>
						</div>
						<div className="value-card">
							<h3 className="value-card__title">Impact</h3>
							<p className="value-card__desc">
								Privilégier ce qui crée de la valeur réelle. Pas de l'activité
								pour l'activité, mais des résultats concrets.
							</p>
						</div>
						<div className="value-card">
							<h3 className="value-card__title">Rigueur</h3>
							<p className="value-card__desc">
								Faire les choses bien, dans le détail. La qualité n'est pas
								négociable.
							</p>
						</div>
						<div className="value-card">
							<h3 className="value-card__title">Esprit d'équipe</h3>
							<p className="value-card__desc">
								Construire ensemble, faire grandir les gens, créer un
								environnement où chacun donne le meilleur de lui-même.
							</p>
						</div>
					</div>
				</div>
			</section>

			<hr className="divider" />

			{/* Pillars */}
			<section className="section">
				<div className="section__inner">
					<span className="section__label">Expertises</span>
					<h2 className="section__heading">
						Les sujets sur lesquels je m'exprime
					</h2>
					<p className="section__text">
						À l'intersection entre leadership technique, construction produit et
						scaling d'équipes. Des retours d'expérience concrets et
						pédagogiques, sans bullshit.
					</p>
					<div className="pillars">
						<span className="pillar-tag">Management d'équipe</span>
						<span className="pillar-tag">Construction produit</span>
						<span className="pillar-tag">Choix technologiques</span>
						<span className="pillar-tag">Architecture</span>
						<span className="pillar-tag">Side projects</span>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="footer__links">
					<a
						className="footer__link"
						href="https://github.com/mesta"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<a
						className="footer__link"
						href="https://linkedin.com/in/jlardet"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</div>
				<p className="footer__copy">© {new Date().getFullYear()} Mesta</p>
			</footer>
		</div>
	);
}

export default App;
