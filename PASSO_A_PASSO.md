# 🚀 PASSO A PASSO COMPLETO - Como Rodar o Projeto

## 📋 ANTES DE COMEÇAR

Você vai precisar de:
- ✅ Um computador (Windows, Mac ou Linux)
- ✅ Conexão com internet
- ✅ 30 minutos do seu tempo

---

## 📥 PASSO 1: INSTALAR O NODE.JS

### O que é Node.js?
É o programa que permite rodar aplicações JavaScript no seu computador.

### Como instalar:

#### 🪟 WINDOWS:

1. Acesse: https://nodejs.org/
2. Clique no botão verde **"Download Node.js (LTS)"**
3. Aguarde o download terminar (arquivo: `node-vXX.XX.X-x64.msi`)
4. Execute o arquivo baixado
5. Clique em **"Next"** em todas as telas
6. Clique em **"Finish"**
7. **Reinicie o computador** (importante!)

#### 🍎 MAC:

**Opção 1 - Usando o site (mais fácil):**
1. Acesse: https://nodejs.org/
2. Clique em **"Download Node.js (LTS)"**
3. Execute o arquivo `.pkg` baixado
4. Siga as instruções
5. Digite sua senha quando pedido

**Opção 2 - Usando Homebrew:**
```bash
# Se você tem Homebrew instalado
brew install node
```

#### 🐧 LINUX (Ubuntu/Debian):

```bash
# Atualize os pacotes
sudo apt update

# Instale o Node.js
sudo apt install nodejs npm

# Verifique a instalação
node --version
npm --version
```

### ✅ Verificar se instalou corretamente:

1. Abra o **Terminal** (Mac/Linux) ou **CMD/PowerShell** (Windows)
   - Windows: Pressione `Win + R`, digite `cmd`, aperte Enter
   - Mac: `Command + Espaço`, digite "Terminal", aperte Enter

2. Digite o comando:
```bash
node --version
```

3. Deve aparecer algo como: `v18.17.0` ou superior

4. Digite também:
```bash
npm --version
```

5. Deve aparecer algo como: `9.6.7` ou superior

**✅ Se apareceram as versões, está tudo certo!**

**❌ Se deu erro "comando não reconhecido":**
- Reinicie o computador
- Tente novamente
- Se persistir, reinstale o Node.js

---

## 📦 PASSO 2: BAIXAR E EXTRAIR O PROJETO

### 2.1 Baixar o arquivo ZIP

1. Baixe o arquivo **valentines-margarida.zip** 
2. Salve em um local fácil de encontrar (Área de Trabalho, Documentos, etc.)

### 2.2 Extrair o ZIP

#### 🪟 WINDOWS:

1. Clique com botão direito no arquivo `valentines-margarida.zip`
2. Escolha **"Extrair tudo..."**
3. Escolha onde quer extrair (exemplo: `C:\Projetos\`)
4. Clique em **"Extrair"**

#### 🍎 MAC:

1. Dê duplo clique no arquivo `valentines-margarida.zip`
2. Ele será extraído automaticamente na mesma pasta

#### 🐧 LINUX:

```bash
# No terminal, navegue até onde está o arquivo
cd ~/Downloads

# Extraia
unzip valentines-margarida.zip

# Ou use a interface gráfica
```

### 2.3 Resultado esperado:

Você terá uma pasta chamada `valentines-margarida` com esta estrutura:

```
valentines-margarida/
├── app/
├── components/
├── lib/
├── public/
├── package.json
├── README.md
└── (outros arquivos...)
```

---

## 🖥️ PASSO 3: ABRIR O TERMINAL NA PASTA DO PROJETO

### 🪟 WINDOWS:

**Método 1 - Mais fácil:**
1. Abra a pasta `valentines-margarida` no Windows Explorer
2. Clique na barra de endereço (onde está o caminho da pasta)
3. Digite `cmd` e aperte Enter
4. O terminal abrirá já na pasta certa!

**Método 2:**
1. Aperte `Win + R`
2. Digite `cmd` e aperte Enter
3. Digite o comando para ir até a pasta:
```cmd
cd C:\Projetos\valentines-margarida
```
(ajuste o caminho conforme onde você extraiu)

### 🍎 MAC:

**Método 1 - Mais fácil:**
1. Abra o Finder
2. Vá até a pasta `valentines-margarida`
3. Clique com botão direito na pasta
4. Segure a tecla `Option`
5. Escolha **"Copy valentines-margarida as Pathname"**
6. Abra o Terminal
7. Digite `cd ` (com espaço) e cole o caminho, aperte Enter

**Método 2:**
1. Abra o Terminal
2. Digite:
```bash
cd ~/Desktop/valentines-margarida
```
(ajuste conforme onde você extraiu)

### 🐧 LINUX:

1. Abra o Terminal
2. Navegue até a pasta:
```bash
cd ~/Downloads/valentines-margarida
```
(ajuste conforme onde você extraiu)

### ✅ Como saber se estou na pasta certa?

Digite:
```bash
ls
```
(Mac/Linux) ou
```cmd
dir
```
(Windows)

Você deve ver os arquivos: `package.json`, `README.md`, pastas `app`, `components`, etc.

---

## 📦 PASSO 4: INSTALAR AS DEPENDÊNCIAS

### O que são dependências?
São as bibliotecas e ferramentas que o projeto precisa para funcionar (React, Next.js, etc.)

### Como instalar:

No terminal (ainda na pasta do projeto), digite:

```bash
npm install
```

E aperte Enter.

### O que vai acontecer:

```
⏳ Downloading packages...
⏳ Installing dependencies...
⏳ Building node_modules...
```

**⏱️ AGUARDE 2-5 minutos** (depende da sua internet)

### ✅ Quando terminar:

Você verá:
```
added 300+ packages in 2m
```

E uma pasta `node_modules` será criada no seu projeto.

### ❌ Se der erro:

**Erro: "npm não é reconhecido"**
- Solução: Você não instalou o Node.js corretamente
- Volte ao PASSO 1

**Erro: "EACCES" ou "Permission denied"**
- Solução Windows: Abra o CMD como Administrador
- Solução Mac/Linux: Use `sudo npm install`

**Erro: "Network error" ou "ETIMEDOUT"**
- Solução: Problema de internet
- Tente novamente ou use:
```bash
npm install --legacy-peer-deps
```

**Erro: "gyp ERR!"**
- Ignore, não afeta o projeto
- Continue normalmente

---

## ✏️ PASSO 5: PERSONALIZAR O PROJETO

### Antes de rodar, personalize!

### 5.1 Abrir o arquivo de configuração:

**Caminho:** `valentines-margarida/lib/config.ts`

**Como abrir:**

**Opção 1 - Visual Studio Code (Recomendado):**
1. Baixe e instale: https://code.visualstudio.com/
2. Abra o VS Code
3. File → Open Folder
4. Selecione a pasta `valentines-margarida`
5. No explorador lateral, abra: `lib/config.ts`

**Opção 2 - Notepad++ (Windows):**
1. Baixe: https://notepad-plus-plus.org/
2. Abra o Notepad++
3. File → Open
4. Navegue até `lib/config.ts`

**Opção 3 - Qualquer editor de texto:**
- Bloco de Notas (Windows)
- TextEdit (Mac)
- gedit (Linux)

### 5.2 O que editar:

Você verá este código:

```typescript
export const CONFIG = {
  // EDITE AQUI: Nome da pessoa amada
  name: "Margarida Gauper",
  
  // EDITE AQUI: Data de início do relacionamento
  // Formato: "YYYY-MM-DD" (Ano-Mês-Dia)
  relationshipStartDate: "2023-08-01",
  
  // EDITE AQUI: Link da surpresa
  surpriseLink: "https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO",
  
  // EDITE AQUI: Todas as mensagens
  messages: {
    loader1: "Para Margarida Gauper…",
    loader2: "Uma história que começou em Agosto de 2023.",
    
    heroTitle: "Feliz Dia dos Namorados, Margarida Gauper ❤️",
    heroSubtitle: "Desde 01 de Agosto de 2023, o meu mundo nunca mais foi o mesmo.",
    
    declaration1: "Margarida Gauper, você transformou dias comuns em momentos extraordinários…",
    declaration2: "Cada sorriso teu é a minha paz.",
    
    surpriseButton: "Tenho uma surpresa para você 💌",
    surpriseModalText: "Guardei algo especial… um pedacinho da nossa história transformado em código.",
    surpriseModalButton: "Abrir nossa surpresa 🔐",
    
    finalMessage: "Obrigado por existir na minha vida, Margarida Gauper. Que o nosso amor continue crescendo infinitamente.",
    finalButton: "Para sempre nós 💍",
    finalText: "Eu te amo.",
  },
};
```

### 5.3 Exemplo de personalização:

```typescript
export const CONFIG = {
  name: "Ana Silva",  // ← Seu nome aqui
  
  relationshipStartDate: "2024-02-14",  // ← Sua data (Valentine's 2024)
  
  surpriseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",  // ← Seu link
  
  messages: {
    loader1: "Para Ana Silva…",  // ← Personalize
    loader2: "Uma história que começou em Fevereiro de 2024.",
    
    heroTitle: "Feliz Dia dos Namorados, Ana Silva ❤️",
    heroSubtitle: "Desde 14 de Fevereiro de 2024, tudo mudou.",
    
    // ... personalize todas as outras mensagens
  },
};
```

### 5.4 IMPORTANTE - Formato da data:

✅ **CORRETO:**
```typescript
relationshipStartDate: "2023-08-01",  // Ano-Mês-Dia
relationshipStartDate: "2024-02-14",
```

❌ **ERRADO:**
```typescript
relationshipStartDate: "01/08/2023",  // NÃO funciona
relationshipStartDate: "01-08-2023",  // NÃO funciona
```

### 5.5 Salvar o arquivo:

- `Ctrl + S` (Windows/Linux)
- `Command + S` (Mac)

---

## 🚀 PASSO 6: RODAR O PROJETO

### 6.1 Iniciar o servidor:

No terminal, digite:

```bash
npm run dev
```

E aperte Enter.

### 6.2 O que vai acontecer:

Você verá algo assim:

```
> valentines-margarida@1.0.0 dev
> next dev

  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.5s
```

**🎉 Isso significa que está funcionando!**

### 6.3 Abrir no navegador:

1. Abra seu navegador (Chrome, Firefox, Safari, Edge)
2. Digite na barra de endereço:
```
http://localhost:3000
```
3. Aperte Enter

### ✅ Resultado esperado:

Você verá:
1. Tela de carregamento com "Para [NOME]..."
2. Depois o site completo com todas as seções!

---

## 🎨 PASSO 7: TESTAR E AJUSTAR

### 7.1 O que verificar:

- ✅ O loader aparece?
- ✅ O nome está correto?
- ✅ A data do contador está certa?
- ✅ O contador está funcionando (segundos aumentando)?
- ✅ As mensagens estão personalizadas?
- ✅ O botão de surpresa abre o link correto?
- ✅ Está bonito?

### 7.2 Se quiser mudar algo:

1. Edite o arquivo `lib/config.ts` novamente
2. Salve (`Ctrl + S`)
3. O site atualiza **automaticamente**! (Hot Reload)
4. Não precisa reiniciar nada!

### 7.3 Testar em dispositivos móveis:

**Opção 1 - Chrome DevTools:**
1. No navegador, aperte `F12`
2. Clique no ícone de celular 📱 (Toggle device toolbar)
3. Escolha um dispositivo (iPhone, Galaxy, etc.)
4. Teste a navegação!

**Opção 2 - No celular de verdade:**
1. Descubra o IP do seu computador:
   - Windows: `ipconfig` no CMD
   - Mac/Linux: `ifconfig` no Terminal
   - Procure por algo como: `192.168.1.10`

2. No celular, conecte na mesma rede Wi-Fi

3. Abra o navegador do celular e digite:
```
http://192.168.1.10:3000
```
(use seu IP real)

---

## 🛑 PASSO 8: PARAR O SERVIDOR

### Quando terminar de testar:

No terminal, aperte:
```
Ctrl + C
```

Confirme com `Y` ou `S` se perguntar.

O servidor vai parar.

### Para rodar novamente:

Basta executar:
```bash
npm run dev
```

---

## 🌐 PASSO 9: COLOCAR ONLINE (OPCIONAL)

### Por que fazer deploy?

Para compartilhar um link que funciona de qualquer lugar, sem precisar do seu computador ligado!

### 9.1 Opção 1 - Vercel (RECOMENDADO)

**Passo a passo:**

1. **Criar conta no GitHub:**
   - Acesse: https://github.com/signup
   - Crie sua conta (gratuito)

2. **Instalar GitHub Desktop (opcional, mais fácil):**
   - Baixe: https://desktop.github.com/
   - Instale e faça login

3. **Upload do código:**
   
   **Com GitHub Desktop:**
   - File → Add Local Repository
   - Escolha a pasta `valentines-margarida`
   - Publish Repository
   - Deixe público ou privado (tanto faz)

   **Sem GitHub Desktop (via terminal):**
   ```bash
   # Na pasta do projeto
   git init
   git add .
   git commit -m "Meu site para Margarida"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/valentines-margarida.git
   git push -u origin main
   ```

4. **Deploy na Vercel:**
   - Acesse: https://vercel.com/signup
   - Clique "Continue with GitHub"
   - Import Project
   - Selecione `valentines-margarida`
   - Deploy

5. **Pronto!**
   - Você receberá um link: `https://valentines-margarida.vercel.app`
   - Compartilhe este link! 💕

### 9.2 Opção 2 - Netlify (Ainda mais fácil)

1. **Build local:**
   ```bash
   npm run build
   ```

2. **Acesse:**
   - https://app.netlify.com/drop

3. **Arraste a pasta `.next`** para o site

4. **Pronto!** Link gerado instantaneamente!

---

## ❓ PROBLEMAS COMUNS E SOLUÇÕES

### ❌ Problema: "npm não é reconhecido"

**Solução:**
1. Você não instalou o Node.js
2. Volte ao PASSO 1
3. Reinstale o Node.js
4. Reinicie o computador

---

### ❌ Problema: "Cannot find module"

**Solução:**
```bash
# Delete a pasta node_modules
rm -rf node_modules package-lock.json

# Reinstale
npm install
```

---

### ❌ Problema: "Port 3000 is already in use"

**Solução:**

**Opção 1 - Usar outra porta:**
```bash
npm run dev -- -p 3001
```
Depois abra: `http://localhost:3001`

**Opção 2 - Matar o processo:**

Windows:
```cmd
netstat -ano | findstr :3000
taskkill /PID <número> /F
```

Mac/Linux:
```bash
lsof -ti:3000 | xargs kill -9
```

---

### ❌ Problema: Contador não atualiza

**Causa:** Data no formato errado

**Solução:**
- Formato correto: `"2023-08-01"` (YYYY-MM-DD)
- Não use: `"01/08/2023"` ou `"01-08-2023"`

---

### ❌ Problema: Site não carrega, página branca

**Soluções:**

1. Abra o Console do navegador (F12)
2. Veja se tem erros em vermelho
3. Verifique se há erros de sintaxe no `config.ts`
4. Tente:
   ```bash
   # Pare o servidor (Ctrl + C)
   # Delete cache
   rm -rf .next
   # Rode novamente
   npm run dev
   ```

---

### ❌ Problema: Build error no deploy

**Solução:**

1. Teste o build local primeiro:
   ```bash
   npm run build
   ```

2. Se der erro, leia a mensagem
3. Geralmente é erro de sintaxe no código
4. Corrija e tente novamente

---

## ✅ CHECKLIST FINAL

Antes de compartilhar, verifique:

```
□ Node.js instalado
□ Projeto extraído
□ npm install executado sem erros
□ config.ts personalizado com:
  □ Seu nome
  □ Sua data (formato YYYY-MM-DD)
  □ Seu link da surpresa
  □ Todas as mensagens editadas
□ npm run dev funcionando
□ Site abre em localhost:3000
□ Contador está funcionando
□ Testado no desktop
□ Testado no mobile (DevTools ou celular real)
□ Tudo está bonito
□ (Opcional) Deploy feito
□ Link pronto para compartilhar
```

---

## 🎁 COMO COMPARTILHAR

### Opção 1 - Link do Deploy:
```
Amor, fiz algo especial para você! ❤️
Abre este link: https://seu-site.vercel.app
```

### Opção 2 - QR Code:
1. Gere um QR Code do link: https://www.qr-code-generator.com/
2. Imprima
3. Cole em um cartão
4. Presenteie! 🎁

### Opção 3 - Tela cheia no seu PC:
1. Chame a pessoa
2. Aperte F11 (tela cheia)
3. Deixe ela navegar! 💕

---

## 💡 DICAS EXTRAS

### Melhorar ainda mais:

1. **Adicionar fotos:**
   - Coloque fotos na pasta `public/`
   - Edite os componentes para mostrar as fotos

2. **Adicionar música:**
   - Coloque `musica.mp3` na pasta `public/`
   - Siga o guia em `CUSTOMIZATION.md`

3. **Mudar cores:**
   - Edite `lib/config.ts` → `colors: { ... }`

4. **Adicionar mais seções:**
   - Crie novos componentes em `components/`
   - Adicione em `app/page.tsx`

---

## 🆘 PRECISA DE MAIS AJUDA?

Consulte os outros guias:

- 📖 **README.md** - Documentação completa
- 🚀 **QUICK_START.md** - Resumo rápido
- 🎨 **CUSTOMIZATION.md** - Como personalizar tudo
- 📊 **GUIA_VISUAL.md** - Referência visual
- 📝 **RESUMO_PROJETO.md** - Overview do projeto

---

## 🎉 PARABÉNS!

Você configurou e rodou um projeto Next.js profissional! 

**Agora é só compartilhar e ver a mágica acontecer! 💕✨**

---

**Boa sorte e que seu amor seja tão infinito quanto esse contador! ❤️**
