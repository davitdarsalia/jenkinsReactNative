pipeline {
    agent any

    stages {
        stage('Checkout') {
             steps {
                echo 'Step 1: Checkout stage executed.'
             }
        }

        stage('Install Dependencies') {
            steps {
                echo "Step 2: Install Dependencies stage"
            }
        }

        stage('Lint') {
            steps {
                echo "Step 3: Lint code"
            }
        }

        stage('Test') {
            steps {
                echo "Step 4: Test the app"
            }
        }

        stage('Build') {
            steps {
                echo "Step 5: Build app"
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