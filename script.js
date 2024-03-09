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
                'autores_posicao_genero'];

    for (var i = 0; i < graficos.length; i++) {
        $('#graficos').append('<div id="'+graficos[i]+'"></div><br><br>');
        $('#'+graficos[i]).load('graficos/' +graficos[i]+ '.html');

        $('h4').append('<br>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                            </button>
                            <div id="links" class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
                        </div>');
        
        $('#links').append('<a class="dropdown-item" href="#'+graficos[i]+'">'+graficos[i]+'</a>');
    }
});
