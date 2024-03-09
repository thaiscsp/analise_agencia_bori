document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
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
            $('#graficos').append('<div id ="'+graficos[i]+'">'+data+'</div>');
        },
        error: function (status, error) {
            console.error('Erro ao carregar o gráfico:', status, error);
        }
    });
}
});
