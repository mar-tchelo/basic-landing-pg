function getProjects(){
    const urlGitHub = 'https://api.github.com/users/mar-tchelo/repos'
    let loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET' 
    })
    .then((response)=>response.json())
    .then((response)=>{
        loadingElement.style.display = 'none'

        console.log(response)
        showProjects(response)
    })
    .catch((e)=>{
        console.log('Erro é:', e)
    }) 
}

function showProjects(data){
    let listElement = document.getElementById('list-projetos');

    for (let i = 0; i < data.length; i++) 
    {
        let a = document.createElement('a')
        a.href = data[i] ['clone_url']
        a.target = '_blank'
        a.title = data[i] ['description'] ? data[i] ['description'] : 'Sem descrição'
        let linkText = document.createTextNode(data[i] ['name'])
        a.appendChild(linkText)

        listElement.appendChild(a)
    }
}

getProjects()