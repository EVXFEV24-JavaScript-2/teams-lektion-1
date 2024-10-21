import { HomePage } from "./pages/Home";

// App
//  Pages / Views
//   Navbars, Main content, Footers
//     Buttons, Forms, Input, Titlar/Heading

// Home page
//  Header, Main, Footer

export function MainContent() {
  return <>
    <CountryTable />
  </>;
}

function CountryTable() {
  const countries = [
    /*new Country("Sweden", 324789, "Europe"),
    new Country("Finland", 372894, "Europe"),
    new Country("Argentina", 897543, "South America"),
    new Country("Egypt", 4327789, "Africa")*/
    { name: "Sweden", population: 374937, continent: "Europe" },
    { name: "Finland", population: 372894, continent: "Europe" },
    { name: "Argentina", population: 897543, continent: "South America" },
    { name: "Egypt", population: 4327789, continent: "Africa" },
  ];

  return <>
    <table>
      <th>
        <td>Name</td>
        <td>Population</td>
        <td>Continent</td>
      </th>
      {countries.map(country => <tr>
        <td>{country.name}</td>
        <td>{country.population}</td>
        <td>{country.continent}</td>
      </tr>)}
    </table>
  </>;
}

export function Header() {
  return <header>Välkommen!</header>
}

export function Footer() {
  return <footer>Tack för att du besökte sidan.</footer>
}

function App() {
  const text = "Pannkakor!";

  return <>
    <HomePage />
    {text}
  </>
}

function addNumbers(a, b) {
  return a + b;
}

class Country {
  constructor(name, population, continent) {
    this.name = name;
    this.population = population;
    this.continent = continent;
  }
}

// JSX

export default App
