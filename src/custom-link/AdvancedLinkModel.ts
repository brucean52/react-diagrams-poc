import { DefaultLinkModel } from '@projectstorm/react-diagrams';

export default class AdvancedLinkModel extends DefaultLinkModel {
	constructor() {
		super({
			type: 'advanced',
			width: 4
		});
	}
}