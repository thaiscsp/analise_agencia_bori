<!-- Arquivo principal.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal</title>
</head>
<body>

    <h1>Página Principal</h1>

    <?php
    graficos = ['completude_quantidade',
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
    
    foreach (graficos as grafico) {
        <?php include grafico.'.html'; ?>
    }
    ?>

</body>
</html>
