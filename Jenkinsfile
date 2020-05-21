pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }
    agent none
    
    environment {
                AWS_ACCESS_KEY_ID="AKIAXCOAPUPY5UDHQT23"
                AWS_SECRET_ACCESS_KEY="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"
            }
    parameters { choice(name: "stage", choices: ["Dev", "Prod"], description: "") }
    stages {

        stage('NPM Dependency Install') {
            agent {
                docker { image 'node:lts-alpine3.9' }
            }

            steps {
                script {
                    sh '''
                        echo "${params.stage}"
                        cd Lambda
                        ls
                        node --version
                        npm --version
                        npm install -g serverless
                        sls deploy --stage prod
                        
                    '''
                    stash name: "node-modules", includes: "node_modules/**/*"
                }
            }
        }

    }

}