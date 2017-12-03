## Directed Graph Map

Directed graph data structure implemented using native ES6 `Map` and `Set` objects.

Similiar to multi-key maps or bidirectional maps.

### Install

yarn install directed-graph-map --save

### Usage

```js

const DirectedGraphMap = require('directed-graph-map');

const directedGraphMap = new DirectedGraphMap([['A', 'B']]);

directedGraphMap.hasEdge('A', 'B'); // returns true
directedGraphMap.addEdge('B', 'C');
directedGraphMap.hasEdge('B', 'C'); // returns true
directedGraphMap.getTargets('A'); // returns new Set(['B']);
directedGraphMap.getTargets('B'); // returns new Set(['C']);
directedGraphMap.getTargets('C'); // returns new Set();
directedGraphMap.getSources('A'); // returns new Set();
directedGraphMap.getSources('B'); // returns new Set(['A']);
directedGraphMap.getSources('C'); // returns new Set(['B']);
directedGraphMap.removeSource('A');
directedGraphMap.hasEdge('A', 'B'); // returns false
directedGraphMap.getTargets('A'); // returns new Set();
directedGraphMap.removeTarget('C');
directedGraphMap.getTargets('B'); // returns new Set();
directedGraphMap.hasEdge('B', 'C'); // returns false
directedGraphMap.addEdge('A', 'B');
directedGraphMap.hasEdge('A', 'B'); // returns true
directedGraphMap.removeEdge('A', 'B');
directedGraphMap.hasEdge('A', 'B'); // returns false
```

### API
<a name="DirectedGraphMap"></a>

## DirectedGraphMap
Class representing a Directed Graph Map

**Kind**: global class

* [DirectedGraphMap](#DirectedGraphMap)
    * [new DirectedGraphMap([edges])](#new_DirectedGraphMap_new)
    * [.addEdge(source, target)](#DirectedGraphMap+addEdge) ⇒ <code>void</code>
    * [.removeEdge(source, target)](#DirectedGraphMap+removeEdge) ⇒ <code>void</code>
    * [.hasEdge(source, target)](#DirectedGraphMap+hasEdge) ⇒ <code>boolean</code>
    * [.removeSource(source)](#DirectedGraphMap+removeSource) ⇒ <code>void</code>
    * [.removeTarget(target)](#DirectedGraphMap+removeTarget) ⇒ <code>void</code>
    * [.getSources(target)](#DirectedGraphMap+getSources) ⇒ <code>Set.&lt;string&gt;</code>
    * [.getTargets(source)](#DirectedGraphMap+getTargets) ⇒ <code>Set.&lt;string&gt;</code>

<a name="new_DirectedGraphMap_new"></a>

### new DirectedGraphMap([edges])
Create a directed graph map.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [edges] | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | <code>[]</code> | Array of source -> target pairs |

<a name="DirectedGraphMap+addEdge"></a>

### directedGraphMap.addEdge(source, target) ⇒ <code>void</code>
Add an edge to the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+removeEdge"></a>

### directedGraphMap.removeEdge(source, target) ⇒ <code>void</code>
Remove an edge from the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+hasEdge"></a>

### directedGraphMap.hasEdge(source, target) ⇒ <code>boolean</code>
Test if a edge exists in the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Returns**: <code>boolean</code> - - Whether the edge exists in the graph map.

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+removeSource"></a>

### directedGraphMap.removeSource(source) ⇒ <code>void</code>
Remove all edges from a source.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |

<a name="DirectedGraphMap+removeTarget"></a>

### directedGraphMap.removeTarget(target) ⇒ <code>void</code>
Remove all edges to a target.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+getSources"></a>

### directedGraphMap.getSources(target) ⇒ <code>Set.&lt;string&gt;</code>
Get all sources with edges to a target.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Returns**: <code>Set.&lt;string&gt;</code> - - Set of sources

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+getTargets"></a>

### directedGraphMap.getTargets(source) ⇒ <code>Set.&lt;string&gt;</code>
Get all targets with edges from a soruce.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Returns**: <code>Set.&lt;string&gt;</code> - - Set of targets

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |