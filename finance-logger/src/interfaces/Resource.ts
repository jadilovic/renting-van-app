export enum ResourceType {
	'PLANE',
	'DOG',
	'CAR',
}

export enum ResourceColor {
	Blue = 'blue',
	Red = 'red',
	Yellow = 'yellow',
}

export interface Resource<T> {
	color: ResourceColor;
	type: ResourceType;
	name: string;
	age: number;
	uid: T;
}
