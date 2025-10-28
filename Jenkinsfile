pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = "vitoackerman/nodejs_hello_world"
        DOCKER_CREDENTIAL_ID = "dockerhub-creds"
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
                withDockerRegistry(credentialsId: env.DOCKER_CREDENTIAL_ID) {
                    sh "docker push ${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
                }
            }
        }

        stage('5. Deploy (Simulated)') {
            steps {
                echo "SIMULASI: Deploying image ${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER} to production."
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up local Docker images...'
            sh "docker rmi ${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
        }
    }
}