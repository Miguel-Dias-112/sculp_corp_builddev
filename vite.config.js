import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // diretório de saída para os arquivos construídos
    rollupOptions: {
      input: {
        index: './index.html', // página inicial
        page1: './Paginas/cardapio/index.html', // página inicial
        page2: './Paginas/comonaofugir/index.html', // página inicial
        page15: './Paginas/dietajejum/index.html', // página inicial

        page4: './Paginas/dietajejum/cardapioCom/index.html', // página inicial
        page5: './Paginas/dietajejum/cardapiosem/index.html', // página inicial
        page6: './Paginas/dietajejum/diasjejuar/index.html', // página inicial
        page7: './Paginas/dietajejum/horariojejuar/index.html', // página inicial
        page8: './Paginas/dietajejum/jejuminter/index.html', // página inicial
        page9: './Paginas/dietajejum/numeroRefeicoes/index.html', // página inicial
        page10: './Paginas/dietajejum/oqueejejum/index.html', // página inicial

        
        page11: './Paginas/exercicio/index.html', // página inicial
        page12: './Paginas/instrucoes/index.html', // página inicial
        page13: './Paginas/receitassaciantes/index.html', // página inicial
        page14: './Paginas/supercha/index.html', // página inicial

        page3: './Paginas/defictcalorico/index.html', // página inicial
        page16: './Paginas/defictcalorico/ajustetempo/index.html', // página inicial
        page17: './Paginas/defictcalorico/comousar/index.html', // página inicial
        page18: './Paginas/defictcalorico/descubraoseu/index.html', // página inicial
        page19: './Paginas/defictcalorico/entendendodefict/index.html', // página inicial
        page20: './Paginas/defictcalorico/monitoramento/index.html', // página inicial

        page21: './Paginas/exercicio/mulheres/index.html', // página inicial
        page22: './Paginas/exercicio/treinos/peitoTricepsAbdomen/avancado.html', // página inicial
        page27: './Paginas/exercicio/treinos/peitoTricepsAbdomen/iniciante.html', // página inicial
        page28: './Paginas/exercicio/treinos/peitoTricepsAbdomen/intermediario.html', // página inicial


        page23: './Paginas/exercicio/treinos/pernaPanturrilha/iniciante.html', // página inicial
        page29: './Paginas/exercicio/treinos/pernaPanturrilha/intermediario.html', // página inicial
        page30: './Paginas/exercicio/treinos/pernaPanturrilha/avancado.html', // página inicial
        page24: './Paginas/exercicio/index.html', // página inicial

        page25: './Paginas/listacompras/index.html', // página inicial
        page26: './Paginas/tabeladealimentos/index.html', // página inicial


      },
    },
  },
});