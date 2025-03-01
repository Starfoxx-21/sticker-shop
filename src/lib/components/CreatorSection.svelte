<script>
	import creatorPic from '$assets/profile_pic.jpg';
</script>

<section class="page-section">
	<h2 class="mb-l">About the creator</h2>
	<div class="creator-container">
		<div class="creator-text">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores minima dolor dolore
				magni nihil nemo, voluptatum, fugiat doloribus voluptatibus omnis perspiciatis recusandae
				libero. Magni id labore quas animi sit. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Nesciunt enim ratione debitis iure! Facere quisquam rerum, ad enim dolore aut
				consequatur, laudantium nostrum perferendis quia consectetur repellat dolorum voluptates
				molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quas
				eligendi velit cum eum in qui blanditiis quidem rerum consequatur sint doloribus officia
				incidunt provident vitae facere voluptate delectus architecto.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatibus eos molestiae,
				laborum, iusto architecto eveniet corrupti nam reiciendis dolore sed, possimus blanditiis.
				Iste ad odit id dicta rem! Reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Eveniet ipsa corporis ad modi aspernatur impedit, numquam quis iste ipsum nisi neque
				molestiae facilis, id incidunt cupiditate dolores et voluptates harum.
			</p>
		</div>
		<img src={creatorPic} alt="Starfox" />
	</div>
</section>

<style>
    .creator-container {
      display: flex;
      justify-content: space-between;
    }
  
    .creator-container img {
      width: 40%;
	  object-fit: cover;
      border: 6px solid black;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
    }
  
    .creator-text {
      width: 55%;
	  text-align: justify;
    }
  
    .creator-text p:not(:last-of-type) {
      margin-bottom: 8px;
    }
  </style>
