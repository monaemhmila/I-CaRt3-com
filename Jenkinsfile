pipeline {
    agent any
     tools{
        nodejs 'DevOpsfrontend'
    }
    
   /*environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhubpwd')
    }*/
    
    stages {
       /* stage('GIT') {
            steps {
                checkout scm
            }
        }*/

         
     
       /* stage(' UNIT TESTES AND NOTIF') {
            steps {
                dir('DevOpsBackend-main') {
                    script {
                        try {
                            sh 'mvn clean install'
                        } catch (Exception e) {
                            currentBuild.result = 'FAILURE'
                            error("Build failed: ${e.message}")
                        }
                    }
                }
            }
           
        }*/
        
       /*stage('SONARQUBE') {
            steps {
                dir('DevOpsBackend-main') {
                sh 'mvn sonar:sonar -Dsonar.host.url=http://localhost:9000 -Dsonar.login=admin -Dsonar.password=0000'
            }
            }
        }*/
      /*stage('NEXUS') {
            steps {
                dir('DevOpsBackend-main') {
                sh 'mvn clean deploy -DskipTests'
            }
            }
        }*/
        
       /* stage('BBUILD FRONT') {
            steps {
                dir('DevOpsfrontend') {
                    script {
                        
                        
                        sh 'npm install -g @angular/cli'
                        sh  'npm install' 
                        sh 'ng build'      
                    }
                }
            }
        }*/

      stage('LOGIN DOCKER') {
        steps {
        script {
            withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhub-pwd')]) {
            sh 'docker login -u monaem.hmila@esprit.tn -p ${dockerhub-pwd}'
                }
            }
        }    
      }

       /* stage('CREATE DOCKER IMAGE BACK') {
            steps {
                dir('DevOpsBackend-main') {
                    script {
                        sh 'docker build -t monaemhamila/DevOps_BackEnd .'
                        sh 'docker push monaemhamila/DevOps_BackEnd'
                    }
                }
            }
        }
        stage('CREATE DOCKER IMAGE FRONT') {
            steps {
                dir('DevOpsfrontend') {
                    script {
                        sh 'docker build -t monaemhamila/DevOpsfrontend .'
                        sh 'docker push monaemhamila/DevOpsfrontend'
                        
                    }
                }
            }
        }*/
        
       /*stage('DEPLOY APP') {
            steps {
                
                script {
                    sh 'docker-compose -f docker-compose.yml up -d' 
                    sh 'docker-compose -f docker-compose.yml start'                       
                }
                
            }
        }*/
}
}





