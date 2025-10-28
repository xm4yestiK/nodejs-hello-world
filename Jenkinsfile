pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18' // Pastikan namanya sama di Manage Jenkins > Tools
    }

    environment {
        DOCKER_IMAGE_NAME = "vitoackerman/nodejs_hello_world"
        DOCKER_CREDENTIAL_ID = "dockerhub-creds"
        CONTAINER_NAME = "nodejs_hello_world"
    }

    stages {
        
        stage('1. Checkout Code') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('2. Run Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('3. Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER} ."
            }
        }

        stage('4. Push Docker Image') {
            steps {
                echo 'Pushing image to Docker Hub...'
                withDockerRegistry(credentialsId: env.DOCKER_CREDENTIAL_ID, url: 'https://index.docker.io/v1/') {
                    sh "docker push ${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
                }
            }
        }

        stage('5. Deploy') {
            steps {
                echo "Deploying new image to server..."
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    
                    # INI ADALAH PERBAIKANNYA (Port 8081)
                    docker run -d -p 8081:8080 \
                        --name ${CONTAINER_NAME} \
                        ${DOCKER_IMAGE_NAME}:${BUILD_NUMBER}
                '''
            }
        }
    }
    
    post {
        always {
            echo "Build finished."
        }
    }
}