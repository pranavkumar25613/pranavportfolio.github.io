import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'Asian International Pvt School',
    subtitle: 'CBSE X Boards, Ruwais',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Asian International Pvt School',
    subtitle: 'CBSE XII Boards, Ruwais',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'IIIT Delhi',
    subtitle: 'B.Tech CSE (Pursuing)',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -10),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]