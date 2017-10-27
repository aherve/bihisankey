import * as d3 from 'd3'

interface BHNode {
  Xdepth?: number
  Ydepth?: number
  id: string
  name: string
  parent: string|null
  type: string
}

interface BHLink {
  source: string
  target: number
  value: number
}

declare module 'd3' {

  interface BiHiSankey {
    arrowheadScaleFactor: () => number
    collapsedNodes: () => d3.Selection<any>
    connected: (n1: any, n2: any) => boolean
    expandedNodes: () => d3.Selection<any>
    initializeNodes: (cb?: Function) => BiHiSankey
    layout: (iterations: number) => BiHiSankey
    link: () => any
    linkSpacing: () => number
    links: () => d3.Selection<any>
    nodeSpacing: () => number
    nodeWidth: () => number
    nodes: () => d3.Selection<any>
    relayout: () => BiHiSankey
    setArrowheadScaleFactor: (ahsf: number) => BiHiSankey
    setLinkSpacing: (spacing: number) => BiHiSankey
    setLinks: (links: BHLink[]) => BiHiSankey
    setNodeSpacing: (n: number) => BiHiSankey
    setNodeWidth: (width: number) => BiHiSankey
    setNodes: (nodes: BHNode[]) => BiHiSankey
    setSize: (s: number[]) => BiHiSankey
    size: () => number
    visibleLinks: () => d3.Selection<any>
  }

  export var biHiSankey: () => BiHiSankey
}
