import "./App.css";
import { useState, ChangeEvent } from "react";
/*
Zadání je jednoduché, doplňte kód tak, aby splňoval:
Při změně stavu checkboxu "Světlo svítí" se změní i hodnota range. Checkbox zapnutý -> range nastavit na 100%, checkbox vypnutý -> range nastavit na 0.
Při změně stavu range "Intenzita světla" se změni i stav checkbox. Pokud je range na nule, bude checkbox vypnutý. V ostatních případech bude checkbox zapnutý.

Prostě je to o zprovázání toho checkboxu a range, nic víc v tom nehledejte. :-)
*/

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true); //state for checkbox id=switch
  const [rangeValue, setRangeValue] = useState<number>(50); // state for input id=range

  const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsSwitchOn(checked);
    setRangeValue(checked ? 100 : 0);
  };

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRangeValue(value);
    setIsSwitchOn(!!value);
  };

  return (
    <>
      <div>
        <label htmlFor="switch">Světlo svítí</label>
        <input
          id="switch"
          type="checkbox"
          name="switch"
          checked={isSwitchOn}
          onChange={handleSwitchChange}
        />
      </div>
      <div>
        <label htmlFor="range">Intenzita světla</label>
        <input
          id="range"
          type="range"
          name="range"
          min={0}
          max={100}
          value={rangeValue}
          onChange={handleRangeChange}
        />
      </div>
    </>
  );
};

export default App;
