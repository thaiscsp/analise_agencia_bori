$(document).ready(function() {
    var graficos = ['completude_quantidade',
                'completude_percentual',
                'numero_prs_doi',
                'numero_dois_ano',
                'percentual_prs_doi',
                'percentual_dois_ano',
                'prs_por_mes',
                'prs_mes_ano',
                'dois_por_mes',
                'dois_mes_ano',
                'prs_por_categoria',
                'prs_categoria_anos',
                'prs_sobre_covid',
                'prs_covid_ano',
                'pubs_indexadas_scielo',
                'pubs_indexadas_ano',
                'instituicoes_por_regiao',
                'instituicoes_regiao_ano',
                'pubs_area_conhecimento',
                'pubs_area_ano',
                'pubs_area_geral',
                'area_geral_ano',
                'pubs_tipo_acesso',
                'pubs_acesso_ano',
                'pubs_acesso_index',
                'pubs_dourado_scielo',
                'autores_citados_posicao',
                'autores_posicao_ano',
                'autores_citados_genero',
                'autores_genero_ano',
                'autores_posicao_genero']

for (var i = 0; i <= graficos.length; i++) {
    $.ajax({
        url: graficos[i]+'.html',
        type: 'GET',
        success: function (data) {
            $('#graficos').append('<div id ="'+graficos[i]+'" style="border-radius: 25px;">'+data+'</div><br><br>');
        },
        error: function (status, error) {
            console.error('Erro ao carregar o gráfico '+graficos[i]+':', status, error);
        }
    });
}
});
