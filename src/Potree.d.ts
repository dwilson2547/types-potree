export * from './Actions';
export * from "./AnimationPath.js";
export * from "./Annotation.js";
export * from "./defines.js";
export * from "./Enum.js";
export * from "./EventDispatcher.js";
export * from "./Features.js";
export * from "./KeyCodes.js";
export * from "./LRU.js";
export * from "./PointCloudGreyhoundGeometry.js";
export * from "./PointCloudGreyhoundGeometryNode.js";
export * from "./PointCloudOctree.js";
export * from "./PointCloudOctreeGeometry.js";
export * from "./PointCloudTree.js";
export * from "./Points.js";
export * from "./Potree_update_visibility.js";
export * from "./PotreeRenderer.js";
export * from "./ProfileRequest.js";
export * from "./TextSprite.js";
export * from "./utils.js";
export * from "./Version.js";
export * from "./WorkerPool.js";
export * from "./XHRFactory.js";

export * from "./materials/ClassificationScheme.js";
export * from "./materials/EyeDomeLightingMaterial.js";
export * from "./materials/Gradients.js";
export * from "./materials/NormalizationEDLMaterial.js";
export * from "./materials/NormalizationMaterial.js";
export * from "./materials/PointCloudMaterial.js";

export * from "./loader/POCLoader.js";
export * from "./loader/GreyhoundBinaryLoader.js";
export * from "./loader/GreyhoundLoader.js";
export * from "./loader/PointAttributes.js";

export * from "./utils/Box3Helper.js";
export * from "./utils/ClippingTool.js";
export * from "./utils/ClipVolume.js";
export * from "./utils/GeoTIFF.js";
export * from "./utils/Measure.js";
export * from "./utils/MeasuringTool.js";
export * from "./utils/Message.js";
export * from "./utils/PointCloudSM.js";
export * from "./utils/PolygonClipVolume.js";
export * from "./utils/Profile.js";
export * from "./utils/ProfileTool.js";
export * from "./utils/ScreenBoxSelectTool.js";
export * from "./utils/SpotLightHelper.js";
export * from "./utils/toInterleavedBufferAttribute.js";
export * from "./utils/TransformationTool.js";
export * from "./utils/Volume.js";
export * from "./utils/VolumeTool.js";

export * from "./viewer/viewer.js";
export * from "./viewer/Scene.js";

import "./extensions/OrthographicCamera.js";
import "./extensions/PerspectiveCamera.js";
import "./extensions/Ray.js";

import {PointColorType} from "./defines";
import {Enum} from "./Enum";
import {LRU} from "./LRU";
import {POCLoader} from "./loader/POCLoader";
import {GreyhoundLoader} from "./loader/GreyhoundLoader";
import {PointCloudOctree} from "./PointCloudOctree";
import {WorkerPool} from "./WorkerPool";

export const workerPool: WorkerPool;
export const version: {
    major: number,
    minor: number,
    suffix: string
}

export let lru: LRU;

export let pointBudget: number;
export let framenumber: number;
export let numNodesLoading: number;
export let maxNodesLoading: number;
export const debug: any;

export const {scriptPath, resourcePath};

export function loadPointCloud(path: string, name: string, callback: Function): void;