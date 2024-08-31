// src/lib/pageTitles.ts

export function getPageTitle(pagePath: string): string {
	const isPortuguese = pagePath.startsWith('/pt-br/');
	if (isPortuguese) {
		if (pagePath === '/pt-br/') return 'Início | My Menthor';
		if (pagePath.startsWith('/pt-br/about')) return 'Sobre Nós | My Menthor';
		if (pagePath.startsWith('/pt-br/products')) return 'Produtos | My Menthor';
		if (pagePath.startsWith('/pt-br/contact')) return 'Contato | My Menthor';
		if (pagePath.startsWith('/pt-br/solutions')) return 'Soluções | My Menthor';
		if (pagePath.startsWith('/pt-br/customers_and_partners'))
			return 'Clientes e Parceiros | My Menthor';
		if (pagePath.startsWith('/pt-br/resources')) return 'Recursos | My Menthor';
		if (pagePath.startsWith('/pt-br/company')) return 'Empresa | My Menthor';
		if (pagePath.startsWith('/pt-br/privacy')) return 'Política de Privacidade | My Menthor';
		if (pagePath.startsWith('/pt-br/terms')) return 'Termos de Serviço | My Menthor';
		if (pagePath.startsWith('/pt-br/cookies')) return 'Cookies | My Menthor';
	} else {
		if (pagePath === '/') return 'Home | My Menthor';
		if (pagePath.startsWith('/about')) return 'About Us | My Menthor';
		if (pagePath.startsWith('/products')) return 'Products | My Menthor';
		if (pagePath.startsWith('/contact')) return 'Contact | My Menthor';
		if (pagePath.startsWith('/solutions')) return 'Solutions | My Menthor';
		if (pagePath.startsWith('/customers_and_partners'))
			return 'Customers and Partners | My Menthor';
		if (pagePath.startsWith('/resources')) return 'Resources | My Menthor';
		if (pagePath.startsWith('/company')) return 'Company | My Menthor';
		if (pagePath.startsWith('/privacy')) return 'Privacy Policy | My Menthor';
		if (pagePath.startsWith('/terms')) return 'Terms of Service | My Menthor';
		if (pagePath.startsWith('/cookies')) return 'Cookies | My Menthor';
	}

	return 'My Menthor';
}
