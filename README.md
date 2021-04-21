# Docs
this docs are meant for developers who are willing to contribute in bootfront repo.
 

## Structure

```
boot-front
│   README.md
│   package.json 
│
└───public
│   │___index.html
│       favicon.ico
│       ...
│     
└───src
    │____assets
    │    |___ img.png
    |          ...
    |
    |
    |____components
    |    |
    |    |____chart.js
    |         input.js
    |         radio.js
    |
    |____containers
    |    |
    |    |____deposit.js
    |          footer.js
    |          navbar.js
    |          swap.js
    |          swap.css
    |          swap1.css
    |
    |____build
    |    |____artifacts
    |          cache
    |          typechain
    |
    |____App.js
         App.css
         index.js (Entry point)

```

## Description 

### src

#### javascript

src folder contains components which are simple element to be reused in different containers .
containers are the pages displayed and where states are managed .
right now we got two functionnal containers  ( deposit.js , swap.js )
nav.js is used in both containers  .
footer.js isnt used this page was meant for metrics and charts about the pools state 

#### css

only App.css and swap1.css are used in containers & components  .
swap.css got more css classes we may use in the future.


### build

contains artifacts and ABI i'm using with etherjs to call smart contracts .

## Snippet from deposit


```javascript

  useEffect(async() => {
    document.title = 'Boot Finance';
    await window.ethereum.enable();
   
    fetchData();
    return () => {

    }
  }, [ADDRESS_SWAP])

  async function fetchData() {
    const read = new ethers.Contract(ADDRESS_SWAP, ABI_SWAP, provider);
    const tks = await read.getTokens();

    let token_info = []

    await tks.forEach(async (tk) => {
      const readd = new ethers.Contract(tk, ABI_ERC20, provider);
      const name = await readd.name();
      const symbol = await readd.symbol();
      const el = [name , symbol]
      token_info.push(el)
  
    });
```
```bash
Everytime state of swapp pool address changes useEffect hook calls fetchData() 
fetchData() is meant to request Tokens from swap pool and iterates over them requesting name and symbol from
the deployed erc20 token.
```
```html
  const listItems = tokens.map((token, i) => (
    <div className={index == i ? "back" : "_1FzXdtA_0XfI6wMvTrGYLN"}  onClick={() => Select_token(i)}  >
      <div>
       <img className="_3Fh4OUWx7KWqKPpms0SuXW" src={myMap.get(token[0])} role="image" /> // mapping to get image of token
      </div>
      <b>{token[0]}</b> // token name 
    </div>
  ));
```


And the same process repeats in swap (similar code )



 
 
