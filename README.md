Entar SSH

Descargar la SSH-key que hay en el repositorio rama main

Una vez descargado abrir CMD(preferiblemente Linux, Git Bash sirve como cmd con comandos de linux para windows) en modo administrador y moverse a la ubicación de la SSH-key

Ejecutar estos comandos:
eval $(ssh-agent -s)
chmod 600 ssh-key-2024-03-14.key
ssh-add ssh-key-2024-03-14.key
ssh opc@138.2.179.252
