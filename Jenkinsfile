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
                // Add commands to build your app if needed
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands if available
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add deployment steps here (Docker, local server, cloud, etc.)
            }
        }
    }
}
