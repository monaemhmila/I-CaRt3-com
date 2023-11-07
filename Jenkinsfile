pipeline {
    agent any
    /* tools{
        nodejs 'frant'
    }*/
    
   /* environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }*/
    stages {
        stage('GIT') {
            steps {
                checkout scm
            }
        }

         
        
        stage(' UNIT TESTES AND NOTIF') {
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
           
        }
        
       stage('SONARQUBE') {
            steps {
                dir('DevOpsBackend-main') {
                sh 'mvn sonar:sonar -Dsonar.host.url=http://localhost:9000 -Dsonar.login=admin -Dsonar.password=0000'
            }
            }
        }
      stage('NEXUS') {
            steps {
                dir('Back') {
                sh 'mvn clean deploy -DskipTests'
            }
            }
        }
        
       /* stage('BBUILD FRONT') {
            steps {
                dir('Frant') {
                    script {
                        
                        
                        sh 'npm install -g @angular/cli'
                        sh  'npm install' 
                        sh 'ng build'      
                    }
                }
            }
        }*/

      /*  stage('LOGIN DOCKER') {
        steps {
        script {
            sh 'echo ghazi1234 | docker login -u ghazi11 --password-stdin'
                }
            }
        } */     
        
        

        /*stage('CREATE DOCKER IMAGE BACK') {
            steps {
                dir('Back') {
                    script {
                        sh 'docker build -t ghazi11/back1 .'
                        sh 'docker push ghazi11/back1'
                    }
                }
            }
        }*/
        /*stage('CREATE DOCKER IMAGE FRONT') {
            steps {
                dir('Frant') {
                    script {
                        sh 'docker build -t ghazi11/frant .'
                        sh 'docker push ghazi11/frant'
                        
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





