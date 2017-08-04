node("docker") {
    docker.withRegistry('ersagun', 'ersagun') {
    
        git url: "https://github.com/ersagun/ersagun.ga.git", credentialsId: 'ersagun'
    
        sh "git rev-parse HEAD > .git/commit-id"
        def commit_id = readFile('.git/commit-id').trim()
        println commit_id
    
        stage "build"
        def app = docker.build "ersagun.ga"
    
        stage "publish"
        app.push 'master'
        app.push "${commit_id}"
    }
}