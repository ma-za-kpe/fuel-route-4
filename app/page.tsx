// Generated from the crew's page by trusted code (T-0914); edit the page, not this file.
import Link from "next/link";

export default function Page() {
  return (
    <>
      <meta name="description" content="Fuel Route is a concept product for logistics and real estate teams and customers in Ethiopia, shown as a demonstration. The problem it addresses is drawn from research by StartupTribunal." />
      <meta property="og:title" content={"Fuel Route — a concept product for Ethiopia's logistics and real estate teams"} />
      <meta property="og:description" content="A demonstration concept product for logistics and real estate teams and customers in Ethiopia, with the problem drawn from research by StartupTribunal." />
      <title>
        {"Fuel Route — a concept product for Ethiopia's logistics and real estate teams"}
      </title>
      <header className="site-header">
        {"\n"}
        <div className="wrap header-row">
          {"\n"}
          <Link className="brand" href="/" prefetch={false}>
            {"\n"}
            <svg className="brand-mark" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
              {"\n"}
              <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 5"></circle>
              {"\n"}
              <circle cx="16" cy="16" r="5.5" fill="currentColor"></circle>
              {"\n"}
            </svg>
            {"\n"}
            <span className="brand-name">
              Fuel Route
            </span>
            {"\n"}
          </Link>
          {"\n"}
          <nav className="site-nav" aria-label="Main">
            {"\n"}
            <Link href="/" prefetch={false} aria-current="page">
              Home
            </Link>
            {"\n"}
            <Link href="/problem" prefetch={false}>
              Problem
            </Link>
            {"\n"}
            <Link href="/research" prefetch={false}>
              Research
            </Link>
            {"\n"}
          </nav>
          {"\n"}
        </div>
        {"\n"}
      </header>
      {"\n"}
      <main className="wrap">
        {"\n"}
        <p className="demo-badge">
          Demonstration
        </p>
        {"\n"}
        <section className="hero">
          {"\n"}
          <h1>
            Fuel Route
          </h1>
          {"\n"}
          <p className="lede">
            A concept product for logistics and real estate teams and customers in Ethiopia.
          </p>
          {"\n"}
          <p className="note">
            This site is a demonstration. Fuel Route is a concept product, not a running service.
          </p>
          {"\n"}
          <p className="hero-cta">
            {"\n"}
            <Link className="cta" href="/research" prefetch={false}>
              Read the StartupTribunal research behind this concept
            </Link>
            {"\n"}
          </p>
          {"\n"}
        </section>
        {"\n"}
        <section className="section">
          {"\n"}
          <h2>
            Who it is for
          </h2>
          {"\n"}
          <ul className="fact-list">
            {"\n"}
            <li className="fact-card">
              Logistics and real estate teams and customers in Ethiopia.
            </li>
            {"\n"}
          </ul>
          {"\n"}
        </section>
        {"\n"}
        <section className="section">
          {"\n"}
          <h2>
            Explore the concept
          </h2>
          {"\n"}
          <div className="cards">
            {"\n"}
            <Link className="card" href="/problem" prefetch={false}>
              {"\n"}
              <span className="card-title">
                The problem
              </span>
              {"\n"}
              <span className="card-text">
                The supply situation this concept is meant to address, as described in the research.
              </span>
              {"\n"}
              <span className="card-link">
                Go to Problem
              </span>
              {"\n"}
            </Link>
            {"\n"}
            <Link className="card" href="/research" prefetch={false}>
              {"\n"}
              <span className="card-title">
                The research
              </span>
              {"\n"}
              <span className="card-text">
                The StartupTribunal research this concept is based on, and how it is credited.
              </span>
              {"\n"}
              <span className="card-link">
                Go to Research
              </span>
              {"\n"}
            </Link>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
      </main>
      {"\n"}
      <footer className="site-footer">
        {"\n"}
        <div className="wrap">
          {"\n"}
          <p className="footer-status">
            Fuel Route is a concept product shown as a demonstration, not a running service.
          </p>
          {"\n"}
          <p className="footer-credit">
            {"Research by StartupTribunal. "}
            <a href="https://startuptribunal.com/catalog/ethiopian-fuel-supply-blocked-without-petroleum-pipeline">
              Read the research
            </a>
            .
          </p>
          {"\n"}
        </div>
        {"\n"}
      </footer>
    </>
  );
}
