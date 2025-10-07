// B. CONSTRUÇÃO DO DOM (Execução linear)
// ----------------------------------------------------------------------

// 1. PREENCHENDO A SEÇÃO #noticias
const secaoNoticias = document.querySelector("#noticias"); // Seleção
    
// H2 (Título da Seção)
const h2Noticias = document.createElement('h2'); // Criação
h2Noticias.innerText = "Destaque da Semana";
secaoNoticias.append(h2Noticias); // Inserção
    
// H3 (Título do Post)
const tituloPost = document.createElement('h3');
tituloPost.innerText = "Canadá recebe novos estudantes de Pernambuco";
secaoNoticias.append(tituloPost);
    
// Imagem (IMG)
const imgPost = document.createElement('img');
imgPost.setAttribute('src', "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2025/07/01/597x330/1_49caffc6_cf88_4933_9b04_52366b947bf1-34663148.jpg");
imgPost.setAttribute('alt', "Alunos embarcando para o Canadá"); 
imgPost.setAttribute('width', '40%'); 
secaoNoticias.append(imgPost);
    
// Parágrafo de Texto (P)
const pPost = document.createElement('p');
pPost.innerText = "Um grupo de 20 alunos da CESAR School embarcou neste mês para uma experiência de intercâmbio na University of Waterloo, no Canadá. A iniciativa faz parte do programa de mobilidade estudantil e visa aprofundar os conhecimentos em engenharia de software.";
secaoNoticias.append(pPost);
    
// Link (A)
const linkPost = document.createElement('a');
linkPost.setAttribute('href', "https://cesar.school/blog/");
linkPost.innerText = "Leia a notícia completa no blog";
secaoNoticias.append(linkPost);
    
    
// ----------------------------------------------------------------------
// 2. PREENCHENDO A SEÇÃO #eventos
// ----------------------------------------------------------------------
const secaoEventos = document.querySelector("#eventos");
    
// H2 (Título da Seção)
const h2Eventos = document.createElement('h2');
h2Eventos.innerText = "Próximas Atividades";
secaoEventos.append(h2Eventos);
    
// Parágrafo 1
const pAtiv1 = document.createElement('p');
pAtiv1.innerText = "Hackathon de Inovação Aberta (15/10) — Inscrições abertas!";
secaoEventos.append(pAtiv1);
    
// Parágrafo 2
const pAtiv2 = document.createElement('p');
pAtiv2.innerText = "Ciclo de Palestras sobre IA e Mercado (20/10) — Não perca!";
secaoEventos.append(pAtiv2);
    
// Parágrafo 3
const pAtiv3 = document.createElement('p');
pAtiv3.innerText = "Feira de Carreiras CESAR (05/11) — Vagas de estágio!";
secaoEventos.append(pAtiv3);
    
    
// ----------------------------------------------------------------------
// 3. ADICIONANDO INTERATIVIDADE (Evento no Botão Enviar)
// ----------------------------------------------------------------------
const botaoEnviar = document.querySelector('button[type="submit"]');
const selectTurma = document.getElementById('turma');
    
// Altera o rótulo do select "turma" para "destino"
document.querySelector('label[for="turma"]').innerText = "Seu Destino:";
    
// Adiciona evento de clique (addEventListener)
botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault(); 
        
    const mensagem = document.getElementById('mensagem').value; // Usando a propriedade .value
    const turma = selectTurma.value;
        
    if (mensagem && turma) {
        alert(`Mensagem enviada! Turma: ${turma} | Conteúdo: ${mensagem.substring(0, 20)}...`);
    } else {
        alert('Por favor, preencha a mensagem e selecione a turma.');
    }
});