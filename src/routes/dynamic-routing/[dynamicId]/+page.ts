import { products } from '../data';

export const load = ({ params }) => {
	const { dynamicId } = params;
	const product = products.find((product) => product.id === Number(dynamicId));
	return {
		product
	};
};
