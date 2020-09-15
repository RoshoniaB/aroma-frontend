# `flickcritic.`

## `Description:`

"Aroma" is for every wine enthusiast over the age of 21 obviously. In a fictional world where you can order wine online, this app would be for them. This app gives you a detailed description of any bottle you are deciding on.  

### `Technologies Used:`

HTML/CSS/JS/React/Node/Django/Python/Bootstrap

### `Installation Instructions:`

1. Fork and clone this repository.
1. Change into the new directory and create a development branch to work on.



### `Favorite Function:`
```javascript
	useEffect(() => {
		const id = props.match.params.wine;
		const getWine = async () => {
			const url = `https://aroma-backend.herokuapp.com/wines/${id}`;
			const result = await axios.get(url);
			setWine(result.data);
		};
		getWine();
	}, [props.match.params.wine]);
```
When a user clicks on the a wine card this block of code is the magic that matches the information with the array in the api and brings you a the right wine.
### `Roadmap:`
- additional styling
- a cart component
- login/authentication

## Contributing

If you want to contribute to this project, you can [submit an issue](https://github.com/aroma-frontend/issues) on this repository.

## Authors

- **Roshonia Brooks** - [RoshoniaB](https://github.com/RoshoniaB)

## Acknowledgments
- [Wine Searcher](https://www.wine-searcher.com/)