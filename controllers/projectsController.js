
function showProjects(req, res) {
  res.render('../views/projects/projects');
}

function showProjectByName(req, res) {
  const projectName = req.params.name;
  res.render('../views/projects/project.' + projectName + '.pug');
}

module.exports = {
    showProjects,
    showProjectByName
    };