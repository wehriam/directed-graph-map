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
    this.sources = new Map();
    this.targets = new Map();
    edges.forEach(([source       , target       ]) => this.addEdge(source, target));
  }

  /**
   * Add an edge to the graph map.
   * @param {string} source - Source of the edge
   * @param {string} target - Target of the edge
   * @return {void}
   */
  addEdge(source       , target       )      {
    const sources = this.sources.get(source) || new Set();
    const targets = this.targets.get(target) || new Set();
    sources.add(target);
    targets.add(source);
    this.sources.set(source, sources);
    this.targets.set(target, targets);
  }

  /**
   * Remove an edge from the graph map.
   * @param {string} source - Source of the edge
   * @param {string} target - Target of the edge
   * @return {void}
   */
  removeEdge(source       , target       )      {
    const sources = this.sources.get(source);
    const targets = this.targets.get(target);
    if (!sources || !targets) {
      return;
    }
    sources.delete(target);
    targets.delete(source);
    if (sources.size === 0) {
      this.sources.delete(source);
    }
    if (targets.size === 0) {
      this.targets.delete(target);
    }
  }

  /**
   * Test if a edge exists in the graph map.
   * @param {string} source - Source of the edge
   * @param {string} target - Target of the edge
   * @return {boolean} - Whether the edge exists in the graph map.
   */
  hasEdge(source       , target       )         {
    const sources = this.sources.get(source);
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
    if (!this.sources.has(source)) {
      return;
    }
    const sources = this.sources.get(source);
    if (sources) {
      for (const target of sources) { // eslint-disable-line no-restricted-syntax
        this.removeEdge(source, target);
      }
    }
    this.sources.delete(source);
  }

  /**
   * Remove all edges to a target.
   * @param {string} target - Target of the edge
   * @return {void}
   */
  removeTarget(target       )      {
    if (!this.targets.has(target)) {
      return;
    }
    const targets = this.targets.get(target);
    if (targets) {
      for (const source of targets) { // eslint-disable-line no-restricted-syntax
        this.removeEdge(source, target);
      }
    }
    this.targets.delete(target);
  }

  /**
   * Get all sources with edges to a target.
   * @param {string} target - Target of the edge
   * @return {Set<string>} - Set of sources
   */
  getSources(target       )             {
    return this.targets.get(target) || new Set();
  }

  /**
   * Get all targets with edges from a soruce.
   * @param {string} source - Source of the edge
   * @return {Set<string>} - Set of targets
   */
  getTargets(source       )             {
    return this.sources.get(source) || new Set();
  }
}

module.exports = DirectedGraphMap;
