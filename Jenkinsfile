pipeline {
    agent any

    stages {
        stage('Checkout Repository') {
            steps {
                echo "Hello"
            }
        }
        stage('Install Node.js and Verify npm') {
            steps {
                sh '''
                # Install Node.js if not already installed
                if ! [ -x "$(command -v node)" ]; then
                    echo "Installing Node.js..."
                    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
                    sudo apt-get install -y nodejs
                fi

                # Verify npm version
                echo "Node.js and npm installed. Verifying versions..."
                node -v
                npm --version
                '''
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
