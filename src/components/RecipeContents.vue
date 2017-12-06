<template>
		<div id="container">
			<div id="explorer">
				<div class="sort">
					<ul>
						<li>昇降順</li>
						<li>日付順</li>
						<li>おすすめ順</li>
						<li>作った回数順</li>
						<li>ピン留め記事を固定するか否か</li>
					</ul>
				</div>
				<!-- {{this.recipeData.listItem[0].title}} -->
				<div class="file" v-if="typeof this.recipeData === undefined">
					<p>レシピ登録しろ</p>
				</div><!-- //if -->
				<div v-else>
						<div class="card" v-for="recipe of this.recipeData.listItem" :key="recipe.id">
							<header>
								<div class="image"></div>
								<div class="outline">
									<h2>{{ recipe.title }}</h2>
									<p>{{ recipe.subscript }}</p>
								</div>
								<div class="tag">
									<ul>
										<li v-for="tag in recipe.tags" :key="tag.tagId">{{ tag }}</li>
									</ul>
									<div class="status-pin" v-bind:class="{ active: recipe.priority }">
										<button @click="recipe.priority=pin(recipe.id,recipe.priority)">pin</button>
									</div>
									<div class="status-heart">
										<p>once</p>
									</div>
								</div>
							</header>
						</div>
				</div>
			</div>

			<div class="dashbord" v-if="typeof getRecipeId === undefined">
				<Dashbord/>				
			</div>
					<!-- //d.explorer -->
		<div id="article" v-else>
				<h3>header information</h3>
				<div class="header">
					<header>
						<h2>{{recipeDataSelectedValue.title}}</h2>
						<p>{{recipeDataSelectedValue.subscript}}</p>
						<p>
							<time :datetime="recipeDataSelectedValue.timestamp">変更日　{{recipeDataSelectedValue.timestamp}}</time>
						</p>
					</header>
					<div class="nav">
						<nav>
							<div class="category">
								<p>{{recipeDataSelectedValue.category}}</p>
							</div>
							<div class="tag">
								<ul>
									<li v-for="tag of recipeDataSelectedValue.tags" :key="tag.id">
										<a href="#">{{tag}}</a>,
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<!-- //.header -->

				<div class="make-count">
					<h3>作ったボタン</h3>
					<button>作った！</button>
					<div class="make-history">
						<ul>
							<li v-for="val of recipeDataSelectedValue.makingCount" :key="val.id">
								<time :datetime="val">{{val}}</time>
							</li>
						</ul>
						<p>
							<a href="#">各レシピの作ったもの</a>
						</p>
					</div>
				</div>
				<!-- //.make-count -->

				<div class="recipes">
					<h3>レシピ</h3>
					<div class="process" v-for="(processItem, index) of recipeDataSelectedValue.process" :key="processItem.processId">
						<div class="images">
							<figure>
								<img src="assets.png" alt="">
							</figure>
						</div>
						<div class="recipe-content">
							<h4>{{index+1}}</h4>
							<p>{{processItem.content}}</p>
						</div>
						<div class="supplement">
							<ul>
								<li>{{processItem.supplement}}</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- //.recipes -->
		</div>
		<!-- //.article -->
		</div>
</template>


<script>

export default {
  name: 'RecipeContents',
  props: ['recipeData'],
  data: function () {
    return {
      order: 1, // レシピリストの昇順降順
      filterType: 'all', // レシピリストの昇順降順
      getRecipeId: 1,
      recipeDataSelectedValue: this.recipeData.listItem[0]
    }
  },
  methods: {
    pin: function (id, priority) {
// trueだったらfalse/falseだったらtrueになる
      this.priority = (this.priority = !this.priority)
      console.log('pinID:' + this.id + ' | pinFlgID:' + this.priority)
      return this.priority
    }
  }
}
</script>

<style lang="sass">


.active button
	color: #0af
</style>