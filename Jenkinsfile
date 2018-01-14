pipeline {
  agent any
  stages {
    stage('import') {
      steps{ 
        git 'https://github.com/Revature-1704-Java/honeybadgers.git'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Github Poll Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('clean') {
      steps{
        sh 'mvn clean'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Clean Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('install') {
      steps{
        sh 'mvn install'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Install Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('NPM Install') {
      steps{
        dir('src/main/ngapp') {
          sh 'npm install'
        }
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'NPM Install Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('package') {
      steps{
        sh 'mvn package'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Package Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
          sh 'exit 1'
        }
      }
    }
    stage('redeploy') {
      steps{
        sh 'mvn tomcat7:redeploy -Dmaven.tomcat.path=/mvnAngular'
      }
      post {
        failure {
          slackSend baseUrl: 'https://honeybadgerscave.slack.com/services/hooks/jenkins-ci/', channel: 'build', color: 'Red', message: 'Maven Deployment Failure', token: 'vZgaSxqVFuprS2RIO5AOnSBf'
        }
      }
    }
  }
}
