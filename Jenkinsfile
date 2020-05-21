pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }
    agent none
    environment {
                AWS_ACCESS_KEY_ID     = "AKIAXCOAPUPYZE5ZFGU5"
                AWS_SECRET_ACCESS_KEY = "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"
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
                        npm install -g serverless@1.71.3
                        sls deploy --stage prod
                        
                    '''
                    stash name: "node-modules", includes: "node_modules/**/*"
                }
            }
        }

    }

}