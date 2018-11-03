import THREE from '../node_modules/@types/three';

export const ClassificationScheme: {

	DEFAULT: {
		// never classified
		0: THREE.Vector4,

		// unclassified
		1: THREE.Vector4,

		// ground
		2: THREE.Vector4,

		// low vegetation
		3: THREE.Vector4,

		// med vegetation 
		4: THREE.Vector4,

		// high vegetation
		5: THREE.Vector4,

		// building
		6: THREE.Vector4,

		// noise
		7: THREE.Vector4,

		// key point
		8: THREE.Vector4,

		// water
		9: THREE.Vector4,

		// overlap
		12: THREE.Vector4,

		// everything else
		'DEFAULT': THREE.Vector4
	}
};