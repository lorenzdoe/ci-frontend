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
          sh "docker build -t cicltechnikum/conint-sem-frontend:latest"
        }
      }
    }

    stage("DELIVER") {
      // push to docker hub
      steps {
        script {
          sh "echo cicltechnikum2022 | docker login -u cicltechnikum --password-stdin"
          sh "docker push cicltechnikum/conint-sem-frontend:latest"
        }
      }
    }

  }
}
