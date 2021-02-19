import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h2>Welcome to the Avicenna Tech Test!</h2>
        <p>More information about the task can be found in the readme.</p>
      </header>
      <table>
        <thead>
          <tr>
            <th>Pharmacy Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Services Offered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A. N. Pharmacy</td>
            <td>123 Fake Street<br />Faketon<br />FK1 234</td>
            <td>0161 320 1234</td>
            <td>
              <ul>
                <li>Medicines use review</li>
                <li>Prescription collection from GP</li>
                <li>Stop smoking voucher service</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
