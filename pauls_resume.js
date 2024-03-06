document.addEventListener('DOMContentLoaded', animateSkills);

document.getElementById('downloadButton').addEventListener('click', function() {
    window.open('resume.txt', '_blank');
});
    // Function to animate skill bars
    function animateSkills() {
    const skills = [
        {id: 'skillPython', level: '95%'}, 
        {id: 'skillC#', level: '90%'},
        {id: 'skill.NET', level: '90%'},
        {id: 'skillHTML', level: '90%'},
        {id: 'skillCSS', level: '90%'},
        {id: 'skillJavaScript', level: '75%'},
        {id: 'skillJava', level: '80%'},
        {id: 'skillSQL', level: '85%'},
        {id: 'skillC++', level: '80%'},
        {id: 'skillMl', level: '85%'},
        {id: 'skillAI', level: '85%'},
        {id: 'skillNetworkSecurity', level: '75%'},
        {id: 'skillNetworking', level: '90%'},
        {id: 'skillSysAdmin', level: '80%'},
        {id: 'skillCloud', level: '80%'},  
        {id: 'skillDataAnalysis', level: '85%'},
        {id: 'skillDataVisualization', level: '90%'},
        {id: 'skillDatabaseManagement', level: '80%'},
        {id: 'skillIT', level: '90%'},
        {id: 'skillShellScripting', level: '85%'},
        {id: 'skillDocker', level: '75%'},
        {id: 'skillProjectManagement', level: '75%'},
        {id: 'skillComputerHardwareSoftware', level: '90%'},
        {id: 'skillAPIDevelopment', level: '75%'},
        {id: 'skillSoftwareLeadership', level: '85%'},
        {id: 'skillSystemsArchietect', level: '75%'}
    ];
    
    skills.forEach(skill => {
        const skillElement = document.getElementById(skill.id);
        let animation = skillElement.animate([
            { width: '0%' },
            { width: skill.level }
        ], {
            duration: 3000,
            fill: 'forwards'
        });

    animation.onfinish = function() {
            skillElement.textContent = skillElement.id.slice(5) + ' (' + skill.level + ')';
        };
    });
}

    // JavaScript to expand sections
    function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

    function toggleDescription(id, button) {
    var description = document.getElementById(id);
    description.classList.toggle('show');
    button.classList.toggle('show');
    button.setAttribute('aria-expanded', button.classList.contains('show'));
}
