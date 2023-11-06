GIT básico

1 - Crear .gitignore y README.md

2 - Iniciar el proyecto: 
git init

3 - Configuración
git config user.name selina
git config user.email twoslym@gmail.com
git config --global core.autocrlf true (windows) o input (mac - linux)
git config --global core.editor "code --wait"

4 - Información del estado
git status

5 - Pasar al stage
git add .gitignore README.md

6 - Pasar al commit (versión 1)
git commit -m "README hasta el punto 6"
git commit -a -m "README hasta el punto 6"

preguntar como cambiar datos y que se modifique en hithub