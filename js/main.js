function onInit() {
    renderProjects();
}

function renderProjects() {
    var projects = getProjects();
    var elPortfolio = document.querySelector('#portfolio-content');
    var strHtmls = projects.map(function (project) {
        return `
                <div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${project.id}')" href="#portfolioModal">
                    <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                    </div>
                    <img class="img-fluid portfolio-img" src="${project.imgUrl}" alt="">
                </a>
                <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted">${project.title}</p>
                </div>
                </div>
        `;
    });
    elPortfolio.innerHTML = strHtmls.join('');
}

function renderModal(id){
    var project = getProjectById(id);
    console.log(project);
    var elModal = document.querySelector('#portfolioModal');
    var strHtml = `
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
            <div class="lr">
                <div class="rl"></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                    <h2>${project.name}</h2>
                    <p class="item-intro text-muted">${project.title}</p>
                    <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="">
                    <p>${project.desc}</p>
                    <ul class="list-inline">
                    <li><b>Links: </b>
                    <a href="${project.url[1]}">Repository</a> / <a href="${project.url[0]}">Page</a> </li>
                    <li>Date: ${project.createdAt}</li>
                    <li>Category: ${project.category}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    `;
    elModal.innerHTML = strHtml
}

function submitMail(){
    var elEmailVal = document.querySelector('#exampleInputEmail1').value;
    var elSubjectVal = document.querySelector('#inputsubject').value;
    var elTextVal = document.querySelector('#textarea-input').value;
    return window.open(
        `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${elEmailVal}&su=${elSubjectVal}&body=${elTextVal}`,
        'GMAIL_SUBMIT'
    );   
}