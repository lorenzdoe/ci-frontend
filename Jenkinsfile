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
    DOCKER_HUB_PW = credentials('docker_hub_credentials').password
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
          sh "echo $DOCKER_HUB_PW | docker login -u cicltechnikum --password-stdin"
          sh "docker push $IMAGE_NAME:$IMAGE_TAG"
        }
      }
    }

  }
}
