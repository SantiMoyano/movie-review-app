import { useState, useEffect } from "react";
function Welcome({ username, isLoggedIn }) {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        setShowWelcome(false);
      }
    }, 2000);
  }, [isLoggedIn, username, showWelcome]);
  return (
    <section>
      <h2>{showWelcome && isLoggedIn ? `Welcome ${username}!` : ""}</h2>
    </section>
  );
}
export default Welcome;
