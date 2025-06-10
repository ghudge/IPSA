pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18.20.8'
        allure 'ALLURE_HOME'
    }

    stages {
        stage('Build') {
            steps {
                git branch:'main', url:'https://github.com/ghudge/IPSA.git'
            }
        }
        stage('Node install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npx wdio run ./wdio.conf.ts --spec ./features/IP02_Login.feature'
            }
        }
        stage('Report') {
            steps {
                allure includeProperties: false, jdk:'', results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: false
        }
    }
}
