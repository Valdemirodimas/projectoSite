# 📸 PASTA PUBLIC - SUAS FOTOS E MÚSICA AQUI

## 🎯 O QUE É ESTA PASTA?

Esta é a pasta onde você deve colocar **TODAS as imagens e áudio** do projeto:
- Fotos do carrossel
- Música de fundo
- Fotos de fundo
- Ícones
- Qualquer outra imagem ou áudio

## 📋 ARQUIVOS NECESSÁRIOS

### 🖼️ FOTO DE BOAS-VINDAS (OBRIGATÓRIO)

```
public/
└── welcome-photo.jpg  ← Foto da tela de boas-vindas
```

**Formato:** JPG, PNG ou WebP
**Tamanho:** 1920x1080 ou maior
**Peso:** Máximo 2 MB (ideal: < 1 MB)
**Nome exato:** `welcome-photo.jpg` (minúsculas, sem espaços)

**Dica:** Esta é a PRIMEIRA foto que aparece ao abrir o site!
Use uma foto especial do casal.

### 🎵 MÚSICA DE FUNDO (OBRIGATÓRIO)

```
public/
└── music.mp3  ← Música de fundo do site
```

**Formato:** MP3
**Tamanho:** Máximo 10 MB (ideal: 3-5 MB)
**Duração:** 3-5 minutos (repete automaticamente)
**Nome exato:** `music.mp3` (minúsculas, sem espaços)

### 🎁 FOTO DO PRESENTE (OBRIGATÓRIO)

```
public/
└── gift-photo.jpg  ← Foto do presente/surpresa
```

**Formato:** JPG, PNG ou WebP
**Tamanho:** 1000x1000 ou maior (quadrado ideal)
**Peso:** Máximo 1 MB
**Nome exato:** `gift-photo.jpg` (minúsculas, sem espaços)

**Dica:** Esta foto aparece na tela especial quando o usuário
clica para "Abrir a surpresa". Use uma foto do presente que você
está dando ou imagem representando a surpresa!

### 📸 FOTOS DO CARROSSEL (OBRIGATÓRIO)

Você precisa adicionar **5 fotos** com estes nomes EXATOS:

```
public/
├── carousel-1.jpg  ← Primeira foto do carrossel
├── carousel-2.jpg  ← Segunda foto
├── carousel-3.jpg  ← Terceira foto
├── carousel-4.jpg  ← Quarta foto
└── carousel-5.jpg  ← Quinta foto
```

## ⚠️ IMPORTANTE - NOMES DOS ARQUIVOS

Os nomes devem ser **EXATAMENTE** como acima:
- ✅ `carousel-1.jpg` (correto)
- ✅ `carousel-2.jpg` (correto)
- ❌ `Carousel-1.jpg` (errado - maiúscula)
- ❌ `carousel 1.jpg` (errado - tem espaço)
- ❌ `foto1.jpg` (errado - nome diferente)

## 📐 TAMANHOS RECOMENDADOS

### Fotos do Carrossel:
- **Ideal:** 1920 x 1080 pixels (proporção 16:9)
- **Aceitável:** Qualquer tamanho com proporção 16:9
- **Tamanho máximo:** 1 MB por foto

### Como verificar o tamanho:
1. Windows: Clique direito → Propriedades → Detalhes
2. Mac: Clique direito → Obter Informações
3. Linux: Clique direito → Propriedades

### Como redimensionar (se necessário):
- **Online:** https://www.iloveimg.com/resize-image
- **Photoshop:** Image → Image Size
- **GIMP:** Image → Scale Image

## 🗜️ COMPRIMIR FOTOS (IMPORTANTE!)

Fotos muito grandes deixam o site lento!

### Ferramentas Grátis:
1. **TinyPNG** (recomendado)
   - https://tinypng.com/
   - Arraste suas fotos
   - Baixe as versões comprimidas
   - Use as comprimidas no projeto

2. **Squoosh**
   - https://squoosh.app/
   - Upload da foto
   - Ajuste a qualidade
   - Download

3. **CompressJPEG**
   - https://compressjpeg.com/
   - Até 20 fotos por vez

### Meta ideal:
- Cada foto: **< 500 KB**
- Qualidade visual: Ainda excelente
- Resultado: Site rápido! ⚡

## 🎨 FORMATOS ACEITOS

### ✅ RECOMENDADOS:
- `.jpg` ou `.jpeg` - Para fotos normais
- `.png` - Se precisar de transparência
- `.webp` - Melhor qualidade e menor tamanho (requer conversão)

### ❌ NÃO USE:
- `.bmp` - Muito pesado
- `.tiff` - Não funciona em navegadores
- `.gif` - Só para animações

## 🔄 CONVERTER PARA WEBP (OPCIONAL)

WebP é um formato moderno: menor tamanho + melhor qualidade!

### Como converter:
1. Acesse: https://cloudconvert.com/jpg-to-webp
2. Upload suas fotos
3. Converta
4. Baixe as versões `.webp`
5. Renomeie: `carousel-1.webp`, `carousel-2.webp`, etc.

### Se usar WebP, atualize o código:
No arquivo `components/PhotoCarousel.tsx`:
```typescript
{
  src: '/carousel-1.webp',  // ← .webp ao invés de .jpg
  // ...
}
```

## 📝 PASSO A PASSO RÁPIDO

### 1. Escolher 5 fotos do casal
Escolha momentos especiais, felizes, bonitos!

### 2. Comprimir (se necessário)
Use TinyPNG ou Squoosh para reduzir o tamanho

### 3. Renomear
- `foto1.jpg` → `carousel-1.jpg`
- `foto2.jpg` → `carousel-2.jpg`
- etc...

### 4. Colocar nesta pasta
Copie os arquivos para `public/`

### 5. Personalizar títulos
Abra `components/PhotoCarousel.tsx` e edite os títulos/descrições

### 6. Testar!
```bash
npm run dev
```

## 🎁 FOTOS ADICIONAIS (OPCIONAL)

Você pode adicionar mais fotos com qualquer nome:

```
public/
├── carousel-1.jpg       ← Carrossel (obrigatórias)
├── carousel-2.jpg
├── carousel-3.jpg
├── carousel-4.jpg
├── carousel-5.jpg
├── background.jpg       ← Opcional: Imagem de fundo
├── foto-casal.jpg       ← Opcional: Foto do Hero
├── momento1.jpg         ← Opcional: Para decoração
└── momento2.jpg         ← Opcional: Para decoração
```

E depois usar no código conforme o guia `ADICIONAR_FOTOS.md`

## 🧪 USAR PLACEHOLDERS PARA TESTAR

Se ainda não tem as fotos, use imagens temporárias:

### Opção 1 - Baixar placeholders online:
1. Acesse: https://picsum.photos/
2. Baixe fotos de teste
3. Renomeie para `carousel-1.jpg`, etc.

### Opção 2 - URLs diretas (temporário):
No `PhotoCarousel.tsx`, use:
```typescript
{
  src: 'https://picsum.photos/1920/1080?random=1',
  // ...
}
```

**⚠️ Lembre-se:** Substitua por fotos reais antes de compartilhar!

## ✅ CHECKLIST

Antes de testar:

```
□ FOTO DE BOAS-VINDAS escolhida
□ Foto comprimida (< 2 MB)
□ Foto renomeada para welcome-photo.jpg
□ Foto colocada em public/
□ FOTO DO PRESENTE escolhida
□ Foto comprimida (< 1 MB)
□ Foto renomeada para gift-photo.jpg
□ Foto colocada em public/
□ Música escolhida
□ Música convertida para MP3
□ Música comprimida (< 5 MB)
□ Música renomeada para music.mp3
□ Música colocada em public/
□ 5 fotos do carrossel escolhidas
□ Fotos comprimidas (< 500 KB cada)
□ Fotos renomeadas corretamente
□ Fotos colocadas na pasta public/
□ Nomes verificados (sem erros de digitação)
□ Formato correto (.jpg, .png ou .webp)
```

## 🆘 PROBLEMAS COMUNS

### ❌ "Foto não aparece no site"

**Possíveis causas:**
1. Nome do arquivo está errado
2. Foto não está na pasta `public/`
3. Extensão está errada (.JPG vs .jpg)
4. Há espaços no nome do arquivo

**Solução:**
- Verifique letra por letra
- Certifique-se que está em `public/`
- Reinicie o servidor (`Ctrl+C` e `npm run dev`)

### ❌ "Site está muito lento"

**Causa:** Fotos muito grandes

**Solução:**
- Comprima TODAS as fotos em https://tinypng.com/
- Meta: < 500 KB por foto

### ❌ "Foto aparece cortada/esticada"

**Causa:** Proporção diferente de 16:9

**Solução:**
- Redimensione para 1920x1080
- Ou use: https://www.iloveimg.com/crop-image

## 💡 DICAS PROFISSIONAIS

### 1. Qualidade das fotos
- Use fotos em alta resolução
- Evite fotos tremidas ou borradas
- Boa iluminação é essencial

### 2. Consistência visual
- Todas as fotos com qualidade similar
- Tente manter um "tema" visual
- Cores harmoniosas

### 3. Ordem no carrossel
- `carousel-1.jpg` - Comece com foto impactante
- `carousel-2.jpg` - Continue a história
- `carousel-3.jpg` - Momento especial
- `carousel-4.jpg` - Outro momento
- `carousel-5.jpg` - Finalize com emoção

### 4. Backup
- Guarde cópias originais das fotos
- Não delete as originais após comprimir

## 🎉 PRONTO!

Assim que colocar:
- ✅ **1 foto de boas-vindas** (`welcome-photo.jpg`)
- ✅ **1 foto do presente** (`gift-photo.jpg`)
- ✅ **1 arquivo de música** (`music.mp3`)
- ✅ **5 fotos do carrossel** (`carousel-1.jpg` até `carousel-5.jpg`)

**TOTAL: 8 arquivos na pasta public/**

O site funcionará automaticamente:
1. **Tela de boas-vindas** aparece com sua foto
2. Usuário clica em "Ver o Site"
3. **Loader** aparece com animação
4. **Música** começa a tocar
5. **Carrossel** mostra suas 5 fotos
6. **Seção Surpresa** → Tela especial com foto do presente
7. Tudo estará pronto para compartilhar! 💕

---

**Dúvidas sobre tela de boas-vindas? → `TELA_BOAS_VINDAS.md`**
**Dúvidas sobre tela do presente? → `TELA_PRESENTE.md`**
**Dúvidas sobre música? → `COMO_USAR_MUSICA.md`**
**Dúvidas sobre carrossel? → `COMO_USAR_CARROSSEL.md`**
