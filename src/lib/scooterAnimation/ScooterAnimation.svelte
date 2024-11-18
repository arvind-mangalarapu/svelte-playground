<div class="w-screen h-screen bg-black flex justify-center items-center">
	<div
		class=" bg-[#F9F3DF] overflow-hidden flex flex-col justify-center items-center border relative border-white w-[300px] h-[150px]"
	>
		<div class="absolute bottom-0 right-10">
			<img src="/images/scooterAnimationImgs/Sun.svg" alt="" />
		</div>
		<div class=" animated w-full absolute bottom-14">
			<img class="animate-bounce" src="/images/scooterAnimationImgs/birds.svg" alt="" />
			<img
				class="absolute right-0 top-6 animate-bounce"
				src="/images/scooterAnimationImgs/birds.svg"
				alt=""
			/>
		</div>
		<div class="flex justify-between w-[80%] absolute bottom-0 animated">
			<div><img src="/images/scooterAnimationImgs/trees.svg" alt="" /></div>
			<div><img src="/images/scooterAnimationImgs/trees.svg" alt="" /></div>
		</div>
		<div class="absolute bottom-[-6px] left-[94px] smoke">
			<img src="/images/scooterAnimationImgs/smoke.svg" alt="" />
		</div>
		<div class="absolute bottom-[1px] wheele">
			<img src="/images/scooterAnimationImgs/delivery-bike.svg" alt="" />
		</div>
		<div class="absolute bottom-0">
			<img src="/images/scooterAnimationImgs/road.svg" alt="" />
		</div>
	</div>
</div>

<style>
	@keyframes move {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
	@keyframes wheele {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-25deg);
		}
		50% {
			transform: translateX(50%);
		}
		75% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}
	@keyframes smoke {
		0% {
			transform: rotate(0deg);
		}

		45% {
			transform: translateX(20%);
		}
		60% {
			filter: opacity(10%);
		}
		75% {
			filter: opacity(60%);
			/* transform: translateX(-20%); */
		}

		100% {
			transform: rotate(0deg);
		}
	}
	.animated {
		animation: move 5s linear infinite;
	}
	.wheele {
		animation: wheele 4s linear infinite;
	}
	.smoke {
		animation: smoke 4s linear infinite;
	}
</style>
