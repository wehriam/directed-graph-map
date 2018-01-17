//      

/**
 * Class representing a Directed Graph Map
 */
class DirectedGraphMap {
                                     
                                     

  /**
   * Create a directed graph map.
   * @param {Array<Array<string>>} [edges=[]] - Array of source -> target pairs
   */
  constructor(edges                          = []) {
    this.sourceMap = new Map();
    this.targetMap = new Map();
    edges.forEach(([source       , target       ]) => this.addEdge(source, target));
  }

  /**
   * Add an edge to the graph map.
   * @param {string} source - Source of the edge
   * @param {string} target - Target of the edge
   * @return {void}
   */
  addEdge(source       , target       )      {
    const sources = this.sourceMap.get(source) || new Set();
    const targets = this.targetMap.get(target) || new Set();
    sources.add(target);
    targets.add(source);
    this.sourceMap.set(source, sources);
    this.targetMap.set(target, targets);
  }

  /**
   * Remove an edge from the graph map.
   * @param {string} source - Source of the edge
   * @param {string} target - Target of the edge
   * @return {void}
   */
  removeEdge(source       , target       )      {
    const sources = this.sourceMap.get(source);
    const targets = this.targetMap.get(target);
    if (!sources || !targets) {
      return;
    }
    sources.delete(target);
    targets.delete(source);
    if (sources.size === 0) {
      this.sourceMap.delete(source);
    }
    if (targets.size === 0) {
      this.targetMap.delete(target);
    }
  }

  /**
   * Test if a edge exists in the graph map.
   * @param {string} source - Source of the edge
   * @param {string} target - Target of the edge
   * @return {boolean} - Whether the edge exists in the graph map.
   */
  hasEdge(source       , target       )         {
    const sources = this.sourceMap.get(source);
    if (!sources) {
      return false;
    }
    return sources.has(target);
  }

  /**
   * Remove all edges from a source.
   * @param {string} source - Source of the edge
   * @return {void}
   */
  removeSource(source       )      {
    if (!this.sourceMap.has(source)) {
      return;
    }
    const sources = this.sourceMap.get(source);
    if (sources) {
      for (const target of sources) { // eslint-disable-line no-restricted-syntax
        this.removeEdge(source, target);
      }
    }
    this.sourceMap.delete(source);
  }

  /**
   * Remove all edges to a target.
   * @param {string} target - Target of the edge
   * @return {void}
   */
  removeTarget(target       )      {
    if (!this.targetMap.has(target)) {
      return;
    }
    const targets = this.targetMap.get(target);
    if (targets) {
      for (const source of targets) { // eslint-disable-line no-restricted-syntax
        this.removeEdge(source, target);
      }
    }
    this.targetMap.delete(target);
  }

  /**
   * Get all sources with edges to a target.
   * @param {string} target - Target of the edge
   * @return {Set<string>} - Set of sources
   */
  getSources(target       )             {
    return this.targetMap.get(target) || new Set();
  }

  /**
   * Get all targets with edges from a source.
   * @param {string} source - Source of the edge
   * @return {Set<string>} - Set of targets
   */
  getTargets(source       )             {
    return this.sourceMap.get(source) || new Set();
  }

  /**
   * Array of edges
   *
   * @name DirectedGraphMap#edges
   * @type Array<Array<string>>
   * @readonly
   */
  get edges()                         {
    return [...this.sourceMap.keys()].reduce((edges, source) => edges.concat([...this.getTargets(source)].map((target) => [source, target])), []);
  }

  /**
   * Edge count
   *
   * @name DirectedGraphMap#size
   * @type number
   * @readonly
   */
  get size()        {
    return this.edges.length;
  }

  /**
   * Set of sources
   *
   * @name DirectedGraphMap#sources
   * @type Set<string>
   * @readonly
   */
  get sources()             {
    return new Set(this.sourceMap.keys());
  }

  /**
   * Set of targets
   *
   * @name DirectedGraphMap#targets
   * @type Set<string>
   * @readonly
   */
  get targets()             {
    return new Set(this.targetMap.keys());
  }
}

module.exports = DirectedGraphMap;
