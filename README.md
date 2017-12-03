# Directed Graph Map

[![CircleCI](https://circleci.com/gh/wehriam/directed-graph-map.svg?style=svg)](https://circleci.com/gh/wehriam/directed-graph-map) [![npm version](https://badge.fury.io/js/directed-graph-map.svg)](http://badge.fury.io/js/directed-graph-map) [![codecov](https://codecov.io/gh/wehriam/directed-graph-map/branch/master/graph/badge.svg)](https://codecov.io/gh/wehriam/directed-graph-map)

Directed graph data structure [implemented](https://github.com/wehriam/directed-graph-map/blob/master/src/index.js) using native `Map` and `Set` objects.

Similiar to multi-key maps or bidirectional maps.

## Install

`yarn install directed-graph-map --save`

## Usage

```js

const DirectedGraphMap = require('directed-graph-map');


const directedGraphMap = new DirectedGraphMap([['A', 'B']]);

directedGraphMap.hasEdge('A', 'B'); // true

directedGraphMap.addEdge('B', 'C');
directedGraphMap.hasEdge('B', 'C'); // true
directedGraphMap.getTargets('A'); // new Set(['B']);
directedGraphMap.getTargets('B'); // new Set(['C']);
directedGraphMap.getTargets('C'); // new Set();
directedGraphMap.getSources('A'); // new Set();
directedGraphMap.getSources('B'); // new Set(['A']);
directedGraphMap.getSources('C'); // new Set(['B']);

directedGraphMap.removeSource('A');
directedGraphMap.hasEdge('A', 'B'); // false
directedGraphMap.getTargets('A'); // new Set();

directedGraphMap.removeTarget('C');
directedGraphMap.getTargets('B'); // new Set();
directedGraphMap.hasEdge('B', 'C'); // false

directedGraphMap.addEdge('A', 'B');
directedGraphMap.hasEdge('A', 'B'); // true

directedGraphMap.removeEdge('A', 'B');
directedGraphMap.hasEdge('A', 'B'); // false
```

## API

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