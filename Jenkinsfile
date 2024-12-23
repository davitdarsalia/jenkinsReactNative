@Library('pipeline-caching') _

pipeline {
     agent { label 'macos' }

     environment {
        GRAPHQL_API_URL = "URL_TO_GRAPHQL_API"
        BASIC_AUTH_CREDS_BASE_64 = "BASIC_AUTH_CREDS_BASE_64"
     }

    stages {
        stage('Checkout Repository') {
            steps {
                checkout scm
            }
        }

        stage('Checksum') {
             env.CHECKSUM = sh(script: "sha256sum package-lock.json | awk '{print \$1}'", returnStdout: true).trim()
             echo "Computed CHECKSUM: ${env.CHECKSUM}"
        }

        stage('Install OpenJDK 17') {
            steps {
                sh '''
                  sudo apt-get update && sudo apt-get install -y openjdk-17-jdk
                  sudo update-alternatives --set java /usr/lib/jvm/java-17-openjdk-amd64/bin/java
                  sudo update-alternatives --set javac /usr/lib/jvm/java-17-openjdk-amd64/bin/javac
                  echo 'export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64' >> ~/.bashrc
                '''

            }
        }

        stage('Install Dependencies with Cache') {
            steps {
                cache(
                    key: "node-modules-${env.CHECKSUM}",
                    path: "node_modules",
                    restoreKeys: ["node-modules-"]

                ) {
                    sh 'npm install --loglevel verbose'
                }
                
            }
        }

        stage('Download Android Dependencies') {
            steps {
                cache(
                    key: "jars-${env.GRADLE_CHECKSUM}",
                    path: "${env.HOME}/.gradle",
                    restoreKeys: ["jars-"]
                ) {
                    sh 'cd android && ./gradlew androidDependencies'
                }
                
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
