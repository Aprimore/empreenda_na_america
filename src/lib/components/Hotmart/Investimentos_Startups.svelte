<script lang="ts">
	import { onMount } from 'svelte';

	// Função para carregar o script e o CSS do Hotmart
	function loadHotmart() {
		// Carregar o script do widget
		const script = document.createElement('script');
		script.src = 'https://static.hotmart.com/checkout/widget.min.js';
		script.async = true;
		document.head.appendChild(script);

		// Carregar o CSS do Hotmart
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
		document.head.appendChild(link);
	}

	// Carregar o script e o CSS ao montar o componente
	onMount(() => {
		loadHotmart();
	});
</script>

<!-- O botão que irá usar o widget do Hotmart -->
<!-- onclick="return false;" -->
<a
	href="https://pay.hotmart.com/D93514468N?checkoutMode=2"
	class="hotmart-fb hotmart__button-checkout"
>
	<img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Buy Now" />
</a>
