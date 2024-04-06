Entar SSH

Descargar la SSH-key que hay en el repositorio rama main

Una vez descargado abrir CMD(preferiblemente Linux, Git Bash sirve como cmd con comandos de linux para windows) en modo administrador y moverse a la ubicación de la SSH-key

Ejecutar estos comandos:

eval $(ssh-agent -s)

chmod 600 ssh-key-2024-03-18.key

ssh-add ssh-key-2024-03-18.key

ssh ubuntu@89.168.118.150

-------------------------------------------------------------------

EL REPOSITORI EN ORACLE ESTÀ EN EL SEGÜENT PATH: /home/ubuntu/Transversal_TR3_2023_2024_Front_Back-damtr3-g1
