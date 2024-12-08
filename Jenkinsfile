pipeline {
    agent any
    stages {
        stage('Checkout Repository') {
            steps {
               
                git branch: 'main',  url: 'https://github.com/davitdarsalia/jenkinsReactNative.git'
            }
        }
        stage('Verify Code') {
            steps {
              
                sh '''
                git branch
                git log -1
                '''
            }
        }
    }
}
