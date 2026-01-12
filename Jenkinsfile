pipeline {
    agent any

    parameters {
        string(name: 'ROLLBACK_VERSION', defaultValue: '', description: 'Build number to rollback')
    }

    environment {
        APP_NAME = 'Portfolio'
        EXPOSE_PORT = '8085'
        DOCKER_IMAGE = "portfolio:${ROLLBACK_VERSION}"
        DOCKERFILE = 'Dockerfile'
    }
    
    stages {
        stage('checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vigneshsivasubramaniyan/vignesh-portfolio.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                docker stop ${APP_NAME} || true
                docker rm ${APP_NAME} || true
                docker run -d -p ${EXPOSE_PORT}:80 --restart unless-stopped --name ${APP_NAME} ${DOCKER_IMAGE}
                '''
            }
        }
    }
}