<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const containers = document.querySelectorAll('.container');
		if (containers?.length > 0) {
			containers.forEach((container) => {
				adjustFontSize(container);
			});
		}
	});

	const adjustFontSize = (container) => {
		const containerHeight = container.clientHeight;
		const containerWidth = container.clientWidth;
		const content = container.querySelector('.content');

		if (!content) {
			console.log('No content found in container:', container);
			return;
		}

		let fontSize = parseInt(content.getAttribute('data-font-size'));
		if (isNaN(fontSize)) fontSize = 22; // Default font size if parsing fails and not a number

		console.log('Initial font size:', fontSize);
		content.style.fontSize = fontSize + 'px';

		// Adjust font size to fit content within container
		while (content.scrollHeight > containerHeight || content.scrollWidth > containerWidth) {
			fontSize -= 1;
			if (fontSize < 8) break;
			content.style.fontSize = fontSize + 'px';
		}

		console.log('Final font size:', fontSize);
	};
</script>

<div class="flex justify-center items-center h-screen bg-black">
	<div class="id-card">
		<div class="id-hero">
			<!-- top-content -->
			<div class="top-content">
				<div class="top-content-heading">
					<p>National Association of Street Vendors of India</p>
					<p>MEMB20243920</p>
				</div>
				<div class="top-content-logo">
					<img src="/images/logo.jpg" alt="" />
				</div>
			</div>

			<!-- middle-content -->
			<div class="middle-content">
				<div class="container name-container">
					<h2 class="content" data-font-size="22">Venkat Karthik Vadlapatla</h2>
				</div>
				<div class="middle-content-details-container">
					<div class="middle-content-details">
						<ul>
							<li>
								<p>Vending type</p>
								<p>Stationary</p>
							</li>
							<li>
								<p>Sells</p>
								<p>Fruits</p>
							</li>
						</ul>
						<div class="middle-content-photo">
							<!-- <img src="/images/screenshot.png" alt="" /> -->

							<img
								src="https://images.unsplash.com/photo-1725504836973-a434fa6c4753?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
							/>
						</div>
					</div>
					<ul class="middle-content-validity">
						<li>
							<p>Vending since</p>
							<p>1981</p>
						</li>
						<li>
							<p>Valid upto</p>
							<p>14-May-2025</p>
						</li>
					</ul>
				</div>
				<div class="middle-content-address container">
					<p>Vending Address</p>
					<p class="content" data-font-size="15">
						Kajpura Shivmandir, Manendragarh-Chirmiri-Bharatpur, Chhattisgarh, 800014
					</p>
				</div>
				<div class="bg-logo" />
			</div>
		</div>
		<!-- bottom-content -->
		<div class="bottom-content-container">
			<div class="container bottom-content">
				<p>Local organization</p>
				<p class="content" data-font-size="15">
					Bihar Rajya Footpath Dukandar Swawlambi Sahkari Samiti, Patna
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.id-card {
		width: 330px;
		height: 468px;
		background: #ffffff;
		border-radius: 20px;
	}

	.id-hero {
		width: 330px;
		height: 372px;
		border-radius: 20px 20px 0 0;
		background: linear-gradient(to bottom, #fff9da 0%, #ffffff 26%, #ffffff 100%);
		background-size: cover;
		padding-bottom: 12px;
		position: relative;
	}
	.name-container .content {
		max-width: 290px;
		margin: 0 auto;
		height: 30px;
		font-size: 22px;
		font-weight: 700;
		line-height: 30px;
	}
	.top-content {
		display: flex;
		align-items: center;
		padding-top: 16px;
		height: 80px;
		justify-content: space-between;
		max-width: 290px;
		margin: 0 auto;
	}

	.top-content-heading p:nth-child(1) {
		font-size: 15px;
		font-weight: 600;
		line-height: 22px;
	}

	.top-content-heading p:nth-child(2) {
		font-size: 13px;
		font-weight: 400;
		line-height: 16px;
		margin-top: 4px;
		color: #5d626c;
	}

	.top-content-logo {
		width: 59px;
		height: 56px;
	}
	.middle-content {
		max-width: 290px;
		margin: 12px auto 0 auto;
		height: 270px;
	}
	.middle-content-details-container {
		height: 150px;
		margin-top: 12px;
	}

	.container {
		width: 290px;
		box-sizing: border-box;
		white-space: normal;
		/* overflow: hidden; */
	}

	.content {
		overflow: hidden;
		white-space: normal;
		text-overflow: ellipsis;
	}

	.bottom-content .content {
		font-size: 15px;
		font-weight: 600;
		line-height: 22px;
		color: #1f2522;
		height: 44px;
	}
	.middle-content-address .content {
		font-size: 15px;
		font-weight: 500;
		line-height: 22px;
		height: 44px;
		color: #1f2522;
	}

	.middle-content-details {
		display: flex;
		justify-content: space-between;
	}

	.middle-content-details ul li:nth-child(2) {
		margin-top: 12px;
	}
	.middle-content-details ul li p:nth-child(1) {
		font-size: 13px;
		font-weight: 400;
		line-height: 16px;
		color: #5d626c;
	}

	.middle-content-details ul li p:nth-child(2) {
		font-size: 15px;
		font-weight: 500;
		line-height: 22px;
	}

	.middle-content-validity {
		margin-top: 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.middle-content-validity li p:nth-child(1) {
		font-size: 13px;
		font-weight: 400;
		line-height: 16px;
		color: #5d626c;
	}

	.middle-content-validity li p:nth-child(2) {
		font-size: 15px;
		font-weight: 500;
		line-height: 22px;
	}
	.middle-content-validity li:nth-child(2) p {
		text-align: right;
	}
	.middle-content-photo {
		width: 96px;
		height: 96px;
		object-position: center center;
	}
	.middle-content-photo img {
		width: 100%;
		object-fit: cover;
		height: 100%;
		border-radius: 4px;
	}
	.middle-content-address {
		height: 64px;
	}

	.middle-content-address p:nth-child(1) {
		margin-top: 12px;
		font-size: 13px;
		font-weight: 400;
		line-height: 16px;
		color: #5d626c;
	}

	.middle-content-address p:nth-child(2) {
		line-height: 22px;
	}

	.bottom-content-container {
		background-color: #f0f5fc;
		height: 96px;
		border-radius: 0 0 20px 20px;
	}

	.bottom-content {
		max-width: 290px;
		margin: 0 auto;
	}

	.bottom-content p:nth-child(1) {
		font-size: 13px;
		padding-top: 12px;
		font-weight: 400;
		line-height: 16px;
		color: #5d626c;
	}

	.bottom-content p:nth-child(2) {
		line-height: 22px;
		height: 44px;
	}

	.bg-logo {
		background-image: url('/images/logo.svg');
		background-repeat: no-repeat;
		width: 176px;
		height: 176px;
		bottom: 0;
		left: 0;
		position: absolute;
	}
</style>
