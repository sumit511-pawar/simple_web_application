pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/sumit511-pawar/simple_web_application.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Add build commands if needed (e.g., npm install, mvn package)
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands if available (e.g., npm test, pytest)
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add deployment steps here (e.g., Docker, cloud deployment)
            }
        }
    }
}
