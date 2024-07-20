import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // diretório de saída para os arquivos construídos
    allowJs: true,
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
        page31: "./Paginas/receitassaciantes/index.html",


        page32: './Paginas/dietajejum/naoconseguirjejuar/index.html', // página inicial
        page33: './Paginas/receitassaciantes/modousar/index.html', // página inicial
        page34: './Paginas/receitassaciantes/cafe/index.html', // página inicial
        page35: './Paginas/receitassaciantes/almoco/index.html', // página inicial
        page36: './Paginas/receitassaciantes/cafetarde/index.html', // página inicial


        page37: "./Paginas/receitassaciantes/jantar/index.html",
        page38: "./Paginas/receitassaciantes/sobremesas/index.html",
        page39: "./Paginas/receitassaciantes/bebidas/index.html",

        page41: "./Paginas/exercicio/mulheres/treinos/quadriceps/iniciante.html",
        page42: "./Paginas/exercicio/mulheres/treinos/quadriceps/intermediario.html",
        page43: "./Paginas/exercicio/mulheres/treinos/quadriceps/avancado.html",

        page44: "./Paginas/exercicio/mulheres/treinos/peitotriceps/iniciante.html",
        page45: "./Paginas/exercicio/mulheres/treinos/peitotriceps/intermediario.html",
        page46: "./Paginas/exercicio/mulheres/treinos/peitotriceps/avancado.html",

        page47: "./Paginas/exercicio/mulheres/treinos/posterior/iniciante.html",
        page48: "./Paginas/exercicio/mulheres/treinos/posterior/intermediario.html",
        page49: "./Paginas/exercicio/mulheres/treinos/posterior/avancado.html",

        page50: "./Paginas/exercicio/mulheres/treinos/costasbracos/iniciante.html",
        page51: "./Paginas/exercicio/mulheres/treinos/costasbracos/intermediario.html",
        page52: "./Paginas/exercicio/mulheres/treinos/costasbracos/avancado.html",

        page53: "./Paginas/dietajejum/exerciciosjejum/index.html",

        page54: "./Paginas/exercicio/cardio/index.html",
        page55: "./Paginas/exercicio/mulheres/cardio/index.html",
        page56: "./Paginas/exercicio/comousar/index.html",
        page57: "./Paginas/exercicio/mulheres/comousar/index.html",
        page58: "./Paginas/exercicio/treinos/diasDeTreino/index.html",
        page59: "./Paginas/exercicio/mulheres/diasDeTreino/index.html",

        dados: "./Paginas/receitassaciantes/almoco/dados.js",

        page21: './Paginas/exercicio/mulheres/index.html', // página inicial

        page60: './Paginas/exercicio/treinos/costaBracoAbdomen/avancado.html', // página inicial
        page61: './Paginas/exercicio/treinos/costaBracoAbdomen/iniciante.html', // página inicial
        page62: './Paginas/exercicio/treinos/costaBracoAbdomen/intermediario.html', // página inicial
        page63: './Paginas/exercicio/treinos/ombroAntebraco/avancado.html', // página inicial
        page64: './Paginas/exercicio/treinos/ombroAntebraco/iniciante.html', // página inicial
        page65: './Paginas/exercicio/treinos/ombroAntebraco/intermediario.html', // página inicial


        
      },
    },
  },
});