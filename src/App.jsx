import { useState } from "react"

export default function App() {
  const [players, setPlayers] = useState("")
  const [qtdTimes, setTimes] = useState(2)
  const [timesSorteados, setTimesSorteados] = useState([])

  const tirarTime = () => {
    const nomes = players
      .trim()
      .split("\n")
      .map(n => n.trim())
      .filter(n => n)

    if (nomes.length < qtdTimes) {
      alert("A quantidade de jogadores deve ser igual ou maior que a quantidade de times!")
      return
    }

    // embaralhar nomes
    const nomesEmbaralhados = [...nomes].sort(() => Math.random() - 0.5)
    const times = Array.from({ length: qtdTimes }, () => [])

    nomesEmbaralhados.forEach((nome, i) => {
      times[i % qtdTimes].push(nome)
    })

    setTimesSorteados(times)
  }

  return (
    <div className="content" style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Tira Time ⚽</h1>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <label htmlFor="names">Digite os nomes (um por linha):</label>
        <textarea
          rows={6}
          value={players}
          onChange={(e) => setPlayers(e.target.value)}
          placeholder={`Ex:\nXongs\nGaga\nDudu`}
        ></textarea>

        <label htmlFor="qtdTimes">Quantidade de times:</label>
        <input
          type="number"
          min={2}
          value={qtdTimes}
          onChange={(e) => setTimes(Number(e.target.value))}
        />

        <button onClick={tirarTime} style={{ padding: "10px", cursor: "pointer" }}>
          Tirar Times
        </button>

        <div className="result" style={{ marginTop: "20px" }}>
          {timesSorteados.length > 0 && (
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {timesSorteados.map((time, index) => (
                <div key={index} className="time" style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
                  <h3>Time {index + 1}</h3>
                  <ul>
                    {time.map((jogador, i) => (
                      <li key={i}>{jogador}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
