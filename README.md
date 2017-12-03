# Directed Graph Map

[![CircleCI](https://circleci.com/gh/wehriam/directed-graph-map.svg?style=svg)](https://circleci.com/gh/wehriam/directed-graph-map) [![npm version](https://badge.fury.io/js/directed-graph-map.svg)](http://badge.fury.io/js/directed-graph-map) [![codecov](https://codecov.io/gh/wehriam/directed-graph-map/branch/master/graph/badge.svg)](https://codecov.io/gh/wehriam/directed-graph-map)

Directed graph data structure [implemented](https://github.com/wehriam/directed-graph-map/blob/master/src/index.js) using native `Map` and `Set` objects. Similiar to multi-key maps or bidirectional maps.

```js
const dg = new DirectedGraphMap();
                      //  A
dg.addEdge('A', 'X'); //  ├── X
dg.addEdge('A', 'Y'); //  ├── Y
dg.addEdge('A', 'Z'); //  └── Z

dg.getTargets('A');   //  X, Y, Z

```

## Install

`yarn add directed-graph-map`

## Usage

```js

const DirectedGraphMap = require('directed-graph-map');

const dgm = new DirectedGraphMap([['A', 'B']]);

//  A
//  └── B

dgm.hasEdge('A', 'B'); // true

dgm.addEdge('B', 'C');

//  A
//  └── B
//      └── C

dgm.hasEdge('B', 'C'); // true
dgm.getTargets('A'); // new Set(['B']);
dgm.getTargets('B'); // new Set(['C']);
dgm.getTargets('C'); // new Set();
dgm.getSources('A'); // new Set();
dgm.getSources('B'); // new Set(['A']);
dgm.getSources('C'); // new Set(['B']);

dgm.removeSource('A');

//  B
//  └── C

dgm.hasEdge('A', 'B'); // false
dgm.getTargets('A'); // new Set();

dgm.removeTarget('C');

//  Empty

dgm.getTargets('B'); // new Set();
dgm.hasEdge('B', 'C'); // false

dgm.addEdge('A', 'B');

//  A
//  └── B

dgm.hasEdge('A', 'B'); // true

dgm.removeEdge('A', 'B');

//  Empty

dgm.hasEdge('A', 'B'); // false
```

<a name="DirectedGraphMap"></a>

## API

* [DirectedGraphMap](#api)
    * [new DirectedGraphMap([edges])](#new_DirectedGraphMap_new)
    * [.addEdge(source, target)](#api+addEdge) ⇒ <code>void</code>
    * [.removeEdge(source, target)](#api+removeEdge) ⇒ <code>void</code>
    * [.hasEdge(source, target)](#api+hasEdge) ⇒ <code>boolean</code>
    * [.removeSource(source)](#api+removeSource) ⇒ <code>void</code>
    * [.removeTarget(target)](#api+removeTarget) ⇒ <code>void</code>
    * [.getSources(target)](#api+getSources) ⇒ <code>Set.&lt;string&gt;</code>
    * [.getTargets(source)](#api+getTargets) ⇒ <code>Set.&lt;string&gt;</code>

<a name="new_DirectedGraphMap_new"></a>

### new DirectedGraphMap([edges])
Create a directed graph map.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [edges] | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | <code>[]</code> | Array of source -> target pairs |

<a name="DirectedGraphMap+addEdge"></a>

### dgm.addEdge(source, target) ⇒ <code>void</code>
Add an edge to the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#api)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+removeEdge"></a>

### dgm.removeEdge(source, target) ⇒ <code>void</code>
Remove an edge from the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#api)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+hasEdge"></a>

### dgm.hasEdge(source, target) ⇒ <code>boolean</code>
Test if a edge exists in the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#api)
**Returns**: <code>boolean</code> - - Whether the edge exists in the graph map.

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+removeSource"></a>

### dgm.removeSource(source) ⇒ <code>void</code>
Remove all edges from a source.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#api)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |

<a name="DirectedGraphMap+removeTarget"></a>

### dgm.removeTarget(target) ⇒ <code>void</code>
Remove all edges to a target.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#api)

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+getSources"></a>

### dgm.getSources(target) ⇒ <code>Set.&lt;string&gt;</code>
Get all sources with edges to a target.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#api)
**Returns**: <code>Set.&lt;string&gt;</code> - - Set of sources

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+getTargets"></a>

### dgm.getTargets(source) ⇒ <code>Set.&lt;string&gt;</code>
Get all targets with edges from a soruce.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#api)
**Returns**: <code>Set.&lt;string&gt;</code> - - Set of targets

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |