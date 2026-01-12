pipeline {
    agent any

    parameters {
        string(name: 'ROLLBACK_VERSION', defaultValue: '', description: 'Build number to rollback')
    }

    environment {
        APP_NAME = "portfolio"
        PORT = "8085"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vigneshsivasubramaniyan/vignesh-portfolio.git'
            }
        }

        stage('Build Image') {
            when {
                expression { params.ROLLBACK_VERSION == '' }
            }
            steps {
                sh """
                docker build --no-cache -t $APP_NAME:${env.BUILD_NUMBER} .
                """
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def imageTag = params.ROLLBACK_VERSION ?: env.BUILD_NUMBER

                    sh """
                    docker stop $APP_NAME || true
                    docker rm $APP_NAME || true

                    docker run -d \
                      --name $APP_NAME \
                      --restart=unless-stopped \
                      -p $PORT:80 \
                      $APP_NAME:$imageTag
                    """
                }
            }
        }
    }
}
