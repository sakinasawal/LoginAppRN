import { StyleSheet } from "react-native";


export const homeStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 32,
		fontWeight: '700',
		marginBottom: 12,
	},
	subtitle: {
		fontSize: 16,
		color: '#555',
		textAlign: 'center',
		marginBottom: 24,
	},
	button: {
		backgroundColor: '#007AFF',
		paddingVertical: 14,
		paddingHorizontal: 28,
		borderRadius: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
});