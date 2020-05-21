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
                        export AWS_ACCESS_KEY_ID=AKIAXCOAPUPYZE5ZFGU5
                        export AWS_SECRET_ACCESS_KEY=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
                        sudo npm install -g serverless
                        cd Lambda
                        sls deploy --stage prod
                        
                    '''
                    stash name: "node-modules", includes: "node_modules/**/*"
                }
            }
        }

    }

}