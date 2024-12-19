pipeline {
    agent any

    stages {
        stage('Checkout Repository') {
            steps {
                echo "Hello"
            }
        }
      
    }
    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
