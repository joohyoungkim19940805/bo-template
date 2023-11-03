BO TEAMPLATE 프로젝트

## Setting Development environment for Window

step 1 : 
- Open Window power shell

step 2 :
-  Enter Command 
``` bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

wsl --install
```
- and Reboot your computer

step 3 :
- open ubuntu
``` bash
sudo apt-get install curl

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

nvm ls  

(if not found nvm command? close and open terminal )

nvm install --lts
```
- 

step 4 :
- Open VSCODE
- Connect to... WSL
- git clone this repository
## Getting Started Command

- First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.