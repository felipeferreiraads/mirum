CustomField é um componente para ser usado em conjunto com o Field do
[React Final Form](https://github.com/final-form/react-final-form).

O CustomField já inclui uma label e mensagens de erro de validação.

Veja um exemplo de Field usando CustomField:

```js static
<Field
    name='username'
    component={CustomField}
    label='Nome do usuário'
    placeholder='Digite algo'
/>
```

O exemplo acima, renderizaria algo do tipo:

```
<CustomField
    input={{}}
    meta={{}}
    placeholder='Digite algo'
    label='Nome do usuário'
    name='username'
/>
```

E no caso de um erro de validação, CustomField adicionaria a LabelError automaticamente:

```
<CustomField
    input={{}}
    meta={{ touched: true, error: 'Algum erro de validação' }}
    placeholder='Digite algo'
    label='Nome do usuário'
    name='username'
/>
```

E o mais importante, CustomField não está restrito apenas ao componente Input.
É possível usar qualquer componente em conjunto com o CustomField, como o React Select
no exemplo abaixo:

```
const Select = require('components/Select').default

;<CustomField
    component={Select}
    options={[
        { label: 'Opção 1', value: 1 }, 
        { label: 'Opção 2', value: 2 }, 
        { label: 'Opção 3', value: 3 }, 
    ]}
    input={{}}
    meta={{}}
    placeholder='Selecione algum item'
    label='Exemplo com select'
    name='username'
/>
```
