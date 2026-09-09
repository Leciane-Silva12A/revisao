async function buscarFilmes() {
    try {
        const resposta = await fetch("https://backendfilmes.vercel.app/")
        const filmes = await resposta.json()
        const sectionFilmes = document.querySelector(".filmes")
        
        sectionFilmes.innerHTML = ""

        filmes.forEach((filme) => {
            sectionFilmes.innerHTML += `
                <div>
                    <h2>${filme.title}</h2>
                    <p><strong>Gênero:</strong> ${filme.gender}</p>
                    <p><strong>Duração:</strong> ${filme.duration} minutos</p>
                    <p><strong>Classificação indicativa:</strong> ${filme.ageLimit}</p>

                    <button onclick="apagarFilme(${filme.id})">Apagar</button>
                </div>
            `
        })
    } catch (erro) {
        console.error("Erro ao buscar filmes:", erro)
    }
}

async function apagarFilme(id) {
    try {
        const resposta = await fetch(`https://backendfilmes.vercel.app/delete/${id}`, { method: "DELETE" })
        const respostaJS = await resposta.json()

        alert(respostaJS.message)
        window.location.reload()
    } catch (erro) {
        console.error("Erro ao apagar filme:", erro)
    }
}

buscarFilmes()