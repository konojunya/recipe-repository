<template>
	<div id="app">
		<div id="side-bar">
			<header>
				<h1>レシピ作るやつ</h1>
				<nav>
					<ul>
						<li>
							<a href="#">menu1</a>
						</li>
						<li>
							<a href="#">menu2</a>
						</li>
						<li>
							<a href="#">menu3</a>
						</li>
					</ul>
				</nav>
			</header>
			<div class="directory">
				<ul>
					<li>{{this.recipeData.listItem[0].category}}</li>
					<li>category05</li>
				</ul>
			</div>
		</div>

			<recipeContents :recipeData="recipeData"/>
	</div>
</template>

<script>
import RecipeContents from './components/RecipeContents'
import axios from 'axios'

// import store from './api/search/store'

export default {
  name: 'app',
  data () {
    return {
      // Jsonのデータを格納
      recipeData: []
    }
  },
  components: {
    RecipeContents
  },
  async created () {
    try {
      let res = await axios.get('src/api/dummydata.json')
      this.recipeData = res.data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="sass">
$listBorderColor : #dfdfdf





@charset "utf-8"
@import url('https://fonts.googleapis.com/css?family=Merriweather:300')

* 
	margin: 0
	padding: 0
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale

html, body, #app, #app > *
	height: 100vh

body
	font-family: Merriweather,YuGothic
	font-size: 12.5px
	background: #f9f9f9


li
	list-style: none


#app
	display: grid
	grid-template-columns: 150px 1fr
	overflow: hidden

h1
	font-size: 100%

#side-bar
	border-right: 1px solid $listBorderColor

	li
		line-height: 35px
		border-bottom: 1px solid $listBorderColor
		padding: 3px 5px
		font-size: 11px


#container
	display: grid
	grid-template-columns: 280px 1fr
	overflow: hidden

#explorer
	overflow-y: scroll
	position: relative


	.sort
		border-bottom: 1px solid $listBorderColor
		padding: 5px

		ul > li
			display: inline

	.card
		background: rgba(0,0,0,.05)
		padding: 5px
		margin: 20px 10px
		border: 1px solid $listBorderColor
		font-size: 90%

		h2
			font-size: 120%

		.tag
			ul > li
				display: inline


#article
	position: relative
	padding: 50px 10%

	h3
		display: none

	.nav
		.tag
			ul
				li
					display: inline-block

	.make-history
		position: absolute
		top: 0
		right: 0

	.recipes
		display: grid
		grid-template-columns: repeat(auto-fill, 150px)
		grid-column-gap: 2vw

		.recipe-content p
			font-weight: bold
		
		.supplement
			li 
				font-size: 90%
				padding-top: 5px
				color: #999

</style>
