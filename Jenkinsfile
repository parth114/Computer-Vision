pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }
    agent none
    stages {

        stage('NPM Dependency Install') {
            agent {
                docker { image 'node:lts-alpine3.9' }
            }

            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                    sh '''
                        export AWS_ACCESS_KEY_ID="AKIAXCOAPUPYZMOZQPON"
                        export AWS_SECRET_ACCESS_KEY="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"
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