export default function ({ route, redirect }) {
	if (route.path === '/') {
		redirect('/auth/login')
	}

}
