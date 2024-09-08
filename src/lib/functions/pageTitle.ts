// src/lib/pageTitles.ts

export function getPageTitle(pagePath: string): string {
	const isPortuguese = pagePath.startsWith('/pt/');
	const isSpanish = pagePath.startsWith('/es/');
	if (isPortuguese) {
		if (pagePath === '/pt/') return 'Início | Top Tier';
		// if (pagePath.startsWith('/pt/about')) return 'Sobre Nós | Top Tier';
		// if (pagePath.startsWith('/pt/products')) return 'Produtos | Top Tier';
		// if (pagePath.startsWith('/pt/contact')) return 'Contato | Top Tier';
		// if (pagePath.startsWith('/pt/solutions')) return 'Soluções | Top Tier';
		// if (pagePath.startsWith('/pt/customers_and_partners')) return 'Clientes e Parceiros | Top Tier';
		// if (pagePath.startsWith('/pt/resources')) return 'Recursos | Top Tier';
		// if (pagePath.startsWith('/pt/company')) return 'Empresa | Top Tier';
		if (pagePath.startsWith('/pt/privacy')) return 'Política de Privacidade | Top Tier';
		if (pagePath.startsWith('/pt/terms')) return 'Termos de Serviço | Top Tier';
		if (pagePath.startsWith('/pt/cookies')) return 'Cookies | Top Tier';
	}
	if (isSpanish) {
		if (pagePath === '/es/') return 'Inicio | Top Tier';
		// if (pagePath.startsWith('/es/about')) return 'Sobre Nós | Top Tier';
		// if (pagePath.startsWith('/es/products')) return 'Produtos | Top Tier';
		// if (pagePath.startsWith('/es/contact')) return 'Contato | Top Tier';
		// if (pagePath.startsWith('/es/solutions')) return 'Soluções | Top Tier';
		// if (pagePath.startsWith('/es/customers_and_partners')) return 'Clientes e Parceiros | Top Tier';
		// if (pagePath.startsWith('/es/resources')) return 'Recursos | Top Tier';
		// if (pagePath.startsWith('/es/company')) return 'Empresa | Top Tier';
		if (pagePath.startsWith('/es/privacy')) return 'Política de Privacidad | Top Tier';
		if (pagePath.startsWith('/es/terms')) return 'Términos de Servicio | Top Tier';
		if (pagePath.startsWith('/es/cookies')) return 'Cookies | Top Tier';
	} else {
		if (pagePath === '/en/') return 'Home | Top Tier';
		// if (pagePath.startsWith('/en/about')) return 'Sobre Nós | Top Tier';
		// if (pagePath.startsWith('/en/products')) return 'Produtos | Top Tier';
		// if (pagePath.startsWith('/en/contact')) return 'Contato | Top Tier';
		// if (pagePath.startsWith('/en/solutions')) return 'Soluções | Top Tier';
		// if (pagePath.startsWith('/en/customers_and_partners')) return 'Clientes e Parceiros | Top Tier';
		// if (pagePath.startsWith('/en/resources')) return 'Recursos | Top Tier';
		// if (pagePath.startsWith('/en/company')) return 'Empresa | Top Tier';
		if (pagePath.startsWith('/en/privacy')) return 'Privacy Policy | Top Tier';
		if (pagePath.startsWith('/en/terms')) return 'Terms of Service | Top Tier';
		if (pagePath.startsWith('/en/cookies')) return 'Cookies | Top Tier';
	}

	return 'Top Tier';
}
