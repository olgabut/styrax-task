import "./App.css";
/*
Zadání je jednoduché, doplňte kód tak, aby splňoval:
Při změně stavu checkboxu "Světlo svítí" se změní i hodnota range. Checkbox zapnutý -> range nastavit na 100%, checkbox vypnutý -> range nastavit na 0.
Při změně stavu range "Intenzita světla" se změni i stav checkbox. Pokud je range na nule, bude checkbox vypnutý. V ostatních případech bude checkbox zapnutý.

Prostě je to o zprovázání toho checkboxu a range, nic víc v tom nehledejte. :-)
*/

const App = () => {
  return (
    <>
      <div>
        <label htmlFor="switch">Světlo svítí</label>
        <input id="switch" type="checkbox" name="switch" />
      </div>
      <div>
        <label htmlFor="range">Intenzita světla</label>
        <input id="range" type="range" name="range" min={0} max={100} />
      </div>
    </>
  );
};

export default App;
