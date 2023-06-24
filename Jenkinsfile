#!groovy

pipeline {
  agent any
  
  options {
    // if you have a powerful server you can enable concurrent builds
    disableConcurrentBuilds()
    timeout(time: 5, unit: "MINUTES")
  }
  
  environment {
    NODE_ENV = "production"
    IMAGE_NAME = "cicltechnikum/conint-sem-frontend"
    IMAGE_TAG = "latest"
    DOCKER_HUB_CREDS = credentials('docker_hub_credentials') // saves username:password
    // automatically creates DOCKER_HUB_CREDS_USR and DOCKER_HUB_CREDS_PSW
    AWS_SSH_CREDS = credentials('aws_ssh_creds')
  }
  
  stages {
    stage("LINT-TEST") {
      agent {
        docker {
          image "node:alpine"
        }
      }
      
      steps {
        script {
          sh "npm ci --also=dev"
          sh "npm run lint"
          sh "npm run test"
        }
      }
    }

    stage("BUILD") {
      // build docker image
      steps {
        script {
          sh "docker build -t $IMAGE_NAME:$IMAGE_TAG ."
        }
      }
    }

    stage("DELIVER") {
      // push to docker hub
      steps {
        script {
          sh "echo $DOCKER_HUB_CREDS_PSW | docker login -u $DOCKER_HUB_CREDS_USR --password-stdin"
          sh "docker push $IMAGE_NAME:$IMAGE_TAG"
        }
      }
    }

    stage("DEPLOY") {
      def remote = [:]
      remote.name = 'frontend'
      remote.host = "$AWS_SSH_CREDS_USR"
      remote.user = 'ubuntu'
      remote.password = "$AWS_SSH_CREDS_PSW"
      remote.allowAnyHosts = true
      // deploy to aws
      steps {
        sshCommand remote: remote, command: "echo hello_world"
      }
    }

  }
}

post { 
  always {
    sh "docker image rm $IMAGE_NAME"
    cleanWs()
  }
}