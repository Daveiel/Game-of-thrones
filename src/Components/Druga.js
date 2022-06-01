import "../styles.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
export default class Druga extends Component {
  state = {
    ime: "",
    prezime: "",
    Email: "",
    lozinka: "",
    spol: "muško",
    spol1: "žensko",
    sposbnosti: "",
    raz_edukacije: ""
  };
  onSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="drugi">
        <table className="tab1">
          <tr>
            <td className="stup1">
              <Link to="/" className="pod_L1">
                {" "}
                NASLOVNA
              </Link>
            </td>
            <td className="stup1">
              <Link to="/prva" className="pod_L1">
                {" "}
                GLUMCI
              </Link>
            </td>
            <td className="stup1">
              <Link to="/galerija" className="pod_L1">
                {" "}
                GALERIJA
              </Link>
            </td>
            <td className="stup2">
              <Link to="/druga" className="pod_L1">
                {" "}
                PRIJAVA
              </Link>
            </td>
          </tr>
        </table>
        <div className="forma">
          <h2 className="tekst13">PRIJAVITE SE ZA ULOGU</h2>
          <h3 className="ispis">Vaše ime: {this.state.ime}</h3>
          <h3 className="ispis1">Vaše prezime: {this.state.prezime}</h3>
          <h3 className="ispis2">Vaš E-mail: {this.state.Email}</h3>
          <h3 className="ispis3">Vaša lozinka: {this.state.lozinka}</h3>
          <form>
            <input
              placeholder="ime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}
              className="fr1"
            />
            <br />
            <br />
            <input
              placeholder="prezime"
              value={this.state.prezime}
              onChange={(e) => this.setState({ prezime: e.target.value })}
              className="fr1"
            />
            <br />
            <br />
            <input
              placeholder="E-mail"
              value={this.state.Email}
              onChange={(e) => this.setState({ Email: e.target.value })}
              className="fr1"
            />
            <br />
            <br />
            <input
              placeholder="lozinka"
              value={this.state.lozinka}
              onChange={(e) => this.setState({ lozinka: e.target.value })}
              className="fr1"
            />
            <br />
            <br />
            <p className="spol1">Mušarac</p>
            <p className="spol2">Žena</p>
            <input
              type="radio"
              value={this.state.spol}
              onChange={(e) => this.setState({ spol: e.target.value })}
              className="spol"
            />
            <input
              type="radio"
              value={this.state.spol1}
              onChange={(e) => this.setState({ spol1: e.target.value })}
              className="spol"
            />
            <br />
            <br />
            <textarea
              placeholder="Upišite vaše talente, uspjehe..."
              value={this.state.sposbnosti}
              onChange={(e) => this.setState({ sposbnosti: e.target.value })}
            />
            <br />
            <br />
            <p className="rad1">Osnovna škola</p>
            <p className="rad2">Srednja škola</p>
            <p className="rad3">Fakultet</p>
            <input
              type="checkbox"
              value={this.state.raz_edukacije}
              onChange={(e) => this.setState({ raz_edukacije: e.target.value })}
              required
            />
            <br />
            <br />
            <input
              type="checkbox"
              value={this.state.raz_edukacije}
              onChange={(e) => this.setState({ raz_edukacije: e.target.value })}
            />
            <br />
            <br />
            <input
              type="checkbox"
              value={this.state.raz_edukacije}
              onChange={(e) => this.setState({ raz_edukacije: e.target.value })}
            />
            <br />
            <br />
            <button onClick={() => this.onSubmit()}> Prijavite se</button>
          </form>
        </div>
      </div>
    );
  }
}
