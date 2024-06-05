jsx
import React, { useState } from 'react';
import './App.css';

function App() {
 const [isMobile, setIsMobile] = useState(false);

 const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
 };

 React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
 }, []);

 return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Web Developer Assignment</h1>
        <p>
          This is a simple webpage designed using React JS. It matches the
          above UI and adapts to the mobile version.
        </p>
      </header>
      <main>
        <section className="section">
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ultricies nunc neque, vitae euismod nunc sagittis
            eget.
          </p>
        </section>
        <section className="section">
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ultricies nunc neque, vitae euismod nunc sagittis
            eget.
          </p>
        </section>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Web Developer Assignment. All
          rights reserved.
        </p>
      </footer>
    </div>
 );
}

