pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }
    agent none
    environment {
                AWS_ACCESS_KEY_ID="AKIAXCOAPUPY5MW4PEPS"
                AWS_SECRET_ACCESS_KEY="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"
            }
    stages {

        stage('NPM Dependency Install') {
            agent {
                docker { image 'node:lts-alpine3.9' }
            }

            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                    sh '''
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