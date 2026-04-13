const livros = [

{
titulo:"A República",
autor:"Platão",
categoria:"Filosofia"
},

{
titulo:"Meditações",
autor:"Marco Aurélio",
categoria:"Filosofia"
},

{
titulo:"Elementos",
autor:"Euclides",
categoria:"Matemática"
}

];

function mostrarLivros(lista){

const area = document.getElementById("livros");
area.innerHTML="";

lista.forEach(livro => {

area.innerHTML += `
<div class="livro">
<h3>${livro.titulo}</h3>
<p>${livro.autor}</p>
<p>${livro.categoria}</p>
</div>
`;

});

}

mostrarLivros(livros);

document.getElementById("busca").addEventListener("input", function(){

const termo = this.value.toLowerCase();

const filtrados = livros.filter(livro =>
livro.titulo.toLowerCase().includes(termo) ||
livro.autor.toLowerCase().includes(termo)
);

mostrarLivros(filtrados);

});
