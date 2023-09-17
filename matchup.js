class Matchup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div>
            <button type="button" onclick="makePick(this)" class="team">Team 1</button>
            <button type="button" onclick="makePick(this)">Draw</button>
            <button type="button" onclick="makePick(this)" class="team">Team 2</button>
        </div>
      `;
    }
}

customElements.define('matchup-row', Matchup)