# Gerando Carteiras Bitcoin Testnet com Node.js e Electrum

## Passos Iniciais

1. **Instalar Node.js**
   - Baixe e instale o Node.js no seu PC seguindo as instruções do [site oficial](https://nodejs.org/).

2. **Abrir a Pasta do Projeto**
   - Crie uma pasta para o projeto e navegue até ela:
     ```bash
     mkdir PROJETOS
     cd PROJETO-CARTEIRA
     ```

3. **Verificar Instalação do Node.js e npm**
   - Verifique se o Node.js está instalado corretamente:
     ```bash
     node -v
     ```
   - Verifique também o npm:
     ```bash
     npm -v
     ```

4. **Iniciar o Projeto**
   - Inicie o projeto com:
     ```bash
     npm init -y
     ```

5. **Instalar Dependências**
   - Instale as bibliotecas necessárias:
     ```bash
     npm install bip39 bip32@2.0.6 bitcoinjs-lib --save
     ```

## Configuração do Código

1. **Criar a Pasta `src`**
   - Dentro do diretório do projeto, crie uma pasta chamada `src`:
     ```bash
     mkdir src
     ```

2. **Criar o Arquivo `createWallet.js`**
   - Crie o arquivo JavaScript responsável pela geração da carteira:
     ```bash
     touch src/createWallet.js
     ```

3. **Rodar o Código**
   - Execute o script para gerar a carteira:
     ```bash
     node src/createWallet.js
     ```

## Configuração do Electrum

1. **Baixar o Electrum**
   - Baixe o gerenciador de carteiras Electrum [aqui](https://electrum.org/#download).

2. **Configurar para Testnet**
   - Clique com o botão direito do mouse no ícone do Electrum, vá em "Propriedades", e no campo "Destino", adicione `--testnet` ao final do caminho:
     ```
     "...electrum.exe" --testnet
     ```

3. **Criar Carteira de Teste**
   - No Electrum, crie uma nova carteira de teste importando a chave privada ou o endereço gerado no Node.js.

## Exemplo de Carteiras Geradas

### Para vincular uma carteira no Electrum
    -Ao criar crie uma nova carteira e nas opçoes apresentadas clique em importar endereço ou chave privada de uma carteira específica.

### Carteira 1

- **Seed (BIP39):**  
  `orient clump change document card replace mansion ticket stem buzz pyramid timber`

- **Endereço:**  
  `minaygHmzaUqSjUjuET3YCgUkzwRrAJYr3`

- **Chave Privada:**  
  `cT2UQCa24WdgB9V6GKQKhVZvdR1cdRineFg5gmSCy369uAqJ7yPw`

- **Seed (Electrum):**  
  `orient clump change document card replace mansion ticket stem buzz pyramid timber`

### Carteira 2

- **Seed (BIP39):**  
  `warrior enough consider stable hip profit lecture stamp come focus bar future`

- **Endereço:**  
  `muqXybCLbXT4ZKJMufqpHU3x2i6SCPpiPR`

- **Chave Privada:**  
  `cNzetsxHharZqBj2REsQVokk6pzQmhXhyzxvVL1bUasjZnGaELNW`

- **Seed (Electrum):**  
  `menu subject pole increase fluid maple candy card acoustic exotic fossil leaf`

### Carteira 3

- **Seed (BIP39):**  
  `zero leaf report grace member appear atom fly such bounce later turkey`

- **Endereço:**  
  `tb1qjg59e679uf5jqa692e9r0y472dmrqp9za5ccft`

- **Chave Privada:**  
  `cMxrLXcVKrXtDM6rNoxBMoMsVCJq9wShYd7MdUBHj7fe8SNy6Rq7`

- **Seed (Electrum):**  
  `already frown simple december hold calm diesel nominee soft federal fun right`

### Carteira 4

- **Seed (BIP39):**  
  `garlic ketchup federal hazard equal custom coyote arrange cram approve snow rain`

- **Endereço:**  
  `tb1qrrkdk0c2sapdchy0xjwqksrrlk7x6a2ucknywl`

- **Chave Privada:**  
  `cViMXwyiGDBjM4CrYHyiyTGe8nq7xPmy1tWGaaAZwFB4vKhKfZyo`

## Verificação das Carteiras

1. **Verificar Endereço no Block Explorer**
   - Acesse [BlockExplorer](https://blockexplorer.one/bitcoin/testnet/) e insira o endereço da carteira para verificar o saldo e as transações.

2. **Receber Bitcoin Testnet**
   - Acesse o [Bitcoin Testnet Faucet](https://bitcoinfaucet.uo1.net/) para solicitar bitcoin de teste para sua carteira.

- Neste exemplo utilizamos a carteira de número 3 para ser a principal.