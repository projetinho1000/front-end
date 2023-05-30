# Documentação do Projeto

## Pré-requisitos
Antes de começar, verifique se você tem as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 18.6.0)
- npm (gerenciador de pacotes do Node.js)
- Firebase CLI (Consulte a documentação oficial do Firebase para obter instruções de instalação)

## Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com).
2. Copie as credenciais do projeto Firebase, incluindo a chave do SDK e as informações de configuração.
3. Cole as informações de configuração no arquivo `.env.local` na raiz do projeto Next.js. Você pode usar o arquivo `.env.local.example` como modelo.

## Instalação

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

2. Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação em execução.
## Estruturação de Páginas no Next.js

O Next.js é um framework de React que facilita a criação de aplicativos web modernos e otimizados para o desempenho. Uma das principais características do Next.js é sua abordagem de roteamento baseada em arquivos, em que cada arquivo na pasta `pages` representa uma rota no aplicativo.

A estruturação de páginas no Next.js segue uma convenção simples. Abaixo, descreverei a estrutura de páginas para os arquivos `create.js`, `form.js`, `listing.js` e `signin.js` do projeto:

1. **create.js** - Esta página representa a rota `/create` no aplicativo. É responsável por exibir um formulário de criação para adicionar novos elementos ao sistema. A lógica de processamento do formulário provavelmente estará presente nessa página, tratando os dados enviados pelo usuário.

2. **form.js** - Esta página representa a rota `/form` no aplicativo. Ela pode ser usada para exibir um formulário genérico que pode ser reutilizado em diferentes contextos ou para diferentes entidades. Essa página pode receber parâmetros na URL para preencher o formulário com dados existentes para edição.

3. **listing.js** - Esta página representa a rota `/listing` no aplicativo. Seu objetivo é exibir uma lista dos elementos existentes no sistema, fornecendo uma visão geral. Geralmente, essa página faz chamadas a uma API ou consulta um banco de dados para buscar os dados e exibi-los em uma tabela, lista ou outro formato.

4. **signin.js** - Esta página representa a rota `/signin` no aplicativo e é usada para lidar com o processo de autenticação e login dos usuários. Pode exibir um formulário de login ou oferecer suporte a autenticação de terceiros, como autenticação com o Google ou Facebook.

Esses arquivos de página devem estar localizados dentro da pasta `pages` do seu projeto Next.js. Quando você executa o aplicativo Next.js, ele automaticamente mapeia cada arquivo na pasta `pages` para uma rota correspondente no aplicativo.

Por exemplo, a página `create.js` será acessível em `http://localhost:3000/create`, `form.js` em `http://localhost:3000/form`, `listing.js` em `http://localhost:3000/listing` e `signin.js` em `http://localhost:3000/signin`.

Cada página pode ser criada usando componentes React e pode interagir com outros componentes, serviços ou APIs para fornecer a funcionalidade necessária.

# Auth Context

Aqui está a documentação para o código fornecido:

## Resumo
Este código implementa um contexto de autenticação utilizando o Firebase Authentication no React. Ele fornece um contexto chamado `AuthContext` que gerencia o estado de autenticação do usuário e expõe métodos para autenticação com o Google, saída e acesso ao usuário autenticado. O contexto é implementado como um componente funcional chamado `AuthContextProvider`, que é responsável por prover o contexto para os componentes filhos.

## Dependências
Este código requer as seguintes dependências:
- `firebase`: Biblioteca do Firebase que fornece a funcionalidade de autenticação.
- `react`: Biblioteca React para criação de componentes e gerenciamento de estado.

## Componentes e Hooks

### `AuthContextProvider`
Este é um componente funcional que implementa o provedor do contexto de autenticação. Ele define o estado inicial do usuário como `null` utilizando o `useState` e realiza uma verificação para carregar o usuário armazenado no armazenamento local, caso exista, durante o primeiro renderização. Ele também define duas funções assíncronas `signInWithGoogle` e `signOut` que lidam com a autenticação com o Google e a saída do usuário, respectivamente. 

#### Props
O componente `AuthContextProvider` não recebe nenhuma prop específica.

#### Uso
```jsx
<AuthContextProvider>
  {/* Componentes Filhos */}
</AuthContextProvider>
```

### `AuthContext`
Este é o contexto de autenticação criado através do `createContext`. Ele define a forma da interface `PropsAuthContext` que especifica as propriedades e métodos disponíveis no contexto.

#### Uso
```jsx
const authContext = useContext(AuthContext);
```
### `useAuth`
Este é um hook personalizado que simplifica o acesso ao contexto de autenticação fornecido pelo `AuthContextProvider`. Ele retorna o contexto de autenticação, incluindo as funções `signInWithGoogle`, `user` e `signOut`.

#### Uso
```jsx
const { signInWithGoogle, user, signOut } = useAuth();
```

## Uso Geral
1. Importe o `AuthContextProvider` e envolva os componentes que precisam ter acesso ao contexto de autenticação.
2. Importe o `useAuth` nos componentes que precisam acessar as funcionalidades de autenticação.

Exemplo de uso:

```jsx
import React from "react";
import { AuthContextProvider, useAuth } from "./path/to/authContext";

function App() {
  const { signInWithGoogle, user, signOut } = useAuth();

  // Componente renderizado com base no estado de autenticação
  if (user) {
    return (
      <div>
        <h1>Bem-vindo, {user.displayName}!</h1>
        <button onClick={signOut}>Sair</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Faça login para continuar</h1>
        <button onClick={signInWithGoogle}>Entrar com o Google</button>
      </div>
    );
  }
}

function Main() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}
```

## Considerações Finais
Este código fornece uma estrutura básica para gerenciar o estado de autenticação

 com o Firebase Authentication no React usando um contexto. Ele pode ser expandido e personalizado para atender às necessidades específicas do seu projeto. Lembre-se de consultar a documentação do Firebase e do React para obter mais informações sobre a configuração e uso avançado dessas bibliotecas.

# Services
## Código 1

```javascript
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Register } from "@Types/register";

const workCollection = collection(db, "works");

export const addWork = async (item: Register): Promise<void> => {
  await addDoc(workCollection, item);
  window.location.href = "http://localhost:3000";
};
```

Este código exporta uma função `addWork` que é responsável por adicionar um novo item de trabalho à coleção "works" no Firestore do Firebase. O código utiliza a função `addDoc` do Firebase Firestore para adicionar um novo documento com os dados fornecidos pelo parâmetro `item`. Em seguida, redireciona o navegador para a URL "http://localhost:3000". Certifique-se de que o objeto `db` seja uma instância válida do Firestore antes de utilizar este código.

## Código 2

```javascript
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const deleteWork = async (id: string): Promise<void> => {
  const workDoc = doc(db, 'works', id);
  await deleteDoc(workDoc);
};
```

Este código exporta uma função `deleteWork` que é responsável por excluir um documento específico da coleção "works" no Firestore do Firebase. O código utiliza a função `doc` para obter uma referência ao documento a ser excluído, passando o `id` fornecido como parâmetro. Em seguida, a função `deleteDoc` é chamada para excluir o documento referenciado. Certifique-se de que o objeto `db` seja uma instância válida do Firestore antes de utilizar este código.

## Código 3

```javascript
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // Configurações do Firebase
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
```

Este código exporta as instâncias do Firebase Auth, Firestore e Storage. Ele cria uma instância do Firebase App usando as configurações fornecidas em `firebaseConfig`. Se ainda não houver instâncias do Firebase App, `initializeApp` é chamado para criar uma nova instância. Caso contrário, `getApp` é usado para obter a instância existente. Em seguida, as instâncias do Firebase Auth, Firestore e Storage são obtidas usando as funções `getAuth`, `getFirestore` e `getStorage`, respectivamente. Certifique-se de fornecer as configurações corretas do Firebase em `firebaseConfig` antes de utilizar este código.

## Código 4

```javascript
import { Register } from "@Types/register";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getWork = async (): Promise<Register[]> => {
  const workCollection = collection(db, 'works');
  const snapshot = await getDocs(workCollection);
  const lwork = snapshot.docs.map((doc) => ({ id:

 doc.id, ...doc.data() } as Register));
  console.log(lwork);
  return lwork;
};
```

Este código exporta uma função `getWork` que é responsável por obter todos os documentos da coleção "works" no Firestore do Firebase. Ele utiliza a função `collection` para obter uma referência à coleção desejada, usando o objeto `db`. Em seguida, a função `getDocs` é chamada para obter um snapshot dos documentos da coleção. O código mapeia os documentos do snapshot para um array de objetos `Register`, adicionando a propriedade `id` a cada objeto usando `doc.id`. Por fim, o array resultante é retornado. Certifique-se de que o objeto `db` seja uma instância válida do Firestore antes de utilizar este código.

## Código 5

```javascript
import { Register } from "@Types/register";
import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateWork = async (item: Register): Promise<void> => {
  const workDoc = doc(db, 'works', item.name);
  await updateDoc(workDoc, item);
};
```

Este código exporta uma função `updateWork` que é responsável por atualizar um documento existente na coleção "works" no Firestore do Firebase. Ele utiliza a função `doc` para obter uma referência ao documento a ser atualizado, passando o `item.name` fornecido como parâmetro para identificar o documento pelo nome. Em seguida, a função `updateDoc` é chamada para atualizar o documento referenciado com os dados fornecidos por `item`. Certifique-se de que o objeto `db` seja uma instância válida do Firestore antes de utilizar este código.

# Considerações Finais
O projeto em questão utiliza as tecnologias Next.js e Firebase para desenvolver uma aplicação web. A estrutura do projeto é baseada no padrão de páginas do Next.js, onde cada página possui uma funcionalidade específica. As páginas existentes no projeto são: create, form, listing e signin.

O código fornecido inclui a implementação de autenticação de usuários usando o Firebase Authentication. Ele utiliza as funcionalidades de autenticação do Firebase, como `GoogleAuthProvider`, `signInWithPopup` e `signOut`, para permitir que os usuários façam login com suas contas do Google. O contexto de autenticação é gerenciado usando o `AuthContext` do React e o hook `useContext`. Além disso, o estado do usuário é armazenado localmente usando `localStorage`.

Para interagir com o banco de dados Firestore do Firebase, o projeto possui funcionalidades de adicionar, atualizar, excluir e obter itens da coleção "works". Essas funcionalidades são implementadas em diferentes arquivos de código, cada um com uma responsabilidade específica.

O código responsável por adicionar um novo item de trabalho à coleção "works" utiliza a função `addDoc` do Firebase Firestore e redireciona o usuário para uma URL específica após a adição bem-sucedida.

A exclusão de um item de trabalho é feita através da função `deleteDoc` do Firebase Firestore, que remove o documento correspondente com base no ID fornecido.

A obtenção de todos os itens de trabalho é realizada com o uso das funções `collection` e `getDocs` do Firebase Firestore. Os documentos são mapeados para objetos `Register`, com a inclusão de um ID único para cada item.

A atualização de um item de trabalho é realizada utilizando a função `updateDoc` do Firebase Firestore, que atualiza o documento correspondente com base nos dados fornecidos.

Por fim, o projeto inclui um arquivo `firebase.ts` que configura a conexão com o Firebase, inicializando a aplicação Firebase com as configurações fornecidas e fornecendo as instâncias do Firebase Auth, Firestore e Storage para serem utilizadas nos outros arquivos.

Em resumo, o projeto utiliza Next.js e Firebase para criar uma aplicação web com recursos de autenticação de usuários e interação com um banco de dados Firestore. Ele oferece funcionalidades de criação, atualização, exclusão e listagem de itens de trabalho, utilizando as APIs fornecidas pelo Firebase. A estrutura do projeto segue o padrão de páginas do Next.js, com cada página representando uma funcionalidade específica.
