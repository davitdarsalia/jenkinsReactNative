pipeline {
    agent any

    stages {
        stage('Checkout') {
             steps {
                checkout scm
             }
        }

        stage('Install Dependencies') {
            steps {
                echo "Step 2: Install Dependencies stage"
                sleep 10
            }
        }

        stage('Lint') {
            steps {
                echo "Step 3: Lint code"
                sleep 10
            }
        }

        stage('Test') {
            steps {
                echo "Step 4: Test the app"
                sleep 10
            }
        }

        stage('Build') {
            steps {
                echo "Step 5: Build app"
                sleep 10
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}