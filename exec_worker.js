self.addEventListener('message', async ({ data: { id, cell_code, ids } }) => {
    const __vars = {}
    let instrumented_code = `${cell_code}`

    for (const id of ids) {
        instrumented_code += `\ntry { __vars['${id}'] = __toJSON(${id}) } catch (e) {}`
    }

    // try {
    //     ${ids.map((v) => `__vars['${v}'] = __toJSON(${v})`).join('\n')}
    // } catch (e) {}`

    await eval(instrumented_code)

    console.log(instrumented_code)

    postMessage({ id, value: { vars: __vars } })
})

// Adapted from https://github.com/davidmarkclements/rfdc
// function clone(o) {
//     if (typeof o !== 'object' || o === null) return o
//     if (o instanceof Date) return new Date(o)
//     if (Array.isArray(o)) return clone_array(o, clone)
//     if (o instanceof Map) return new Map(clone_array(Array.from(o), clone))
//     if (o instanceof Set) return new Set(clone_array(Array.from(o), clone))
//     const o2 = {}
//     for (let k in o) {
//         if (Object.hasOwnProperty.call(o, k) === false) continue
//         const cur = o[k]
//         if (typeof cur !== 'object' || cur === null) {
//             o2[k] = cur
//         } else if (cur instanceof Date) {
//             o2[k] = new Date(cur)
//         } else if (cur instanceof Map) {
//             o2[k] = new Map(clone_array(Array.from(cur), clone))
//         } else if (cur instanceof Set) {
//             o2[k] = new Set(clone_array(Array.from(cur), clone))
//         } else {
//             o2[k] = clone(cur)
//         }
//     }
//     return o2
// }

// function clone_array(a, fn) {
//     const keys = Object.keys(a)
//     const a2 = new Array(keys.length)

//     for (let i = 0; i < keys.length; i++) {
//         let k = keys[i]
//         let cur = a[k]

//         if (typeof cur !== 'object' || cur === null) {
//             a2[k] = cur
//         } else if (cur instanceof Date) {
//             a2[k] = new Date(cur)
//         } else {
//             a2[k] = fn(cur)
//         }
//     }
//     return a2
// }

// https://github.com/WebReflection/flatted/blob/main/esm/index.js
const { parse: $parse, stringify: $stringify } = JSON

const __Primitive = String // it could be Number
const __primitive = 'string' // it could be 'number'

const __ignore = {}
const __object = 'object'

const __noop = (_, value) => value

const __primitives = (value) => (value instanceof __Primitive ? __Primitive(value) : value)

const __Primitives = (_, value) => (typeof value === __primitive ? new __Primitive(value) : value)

const __revive = (input, parsed, output, $) => {
    const lazy = []
    for (let ke = Object.keys(output), { length } = ke, y = 0; y < length; y++) {
        const k = ke[y]
        const value = output[k]
        if (value instanceof __Primitive) {
            const tmp = input[value]
            if (typeof tmp === __object && !parsed.has(tmp)) {
                parsed.add(tmp)
                output[k] = __ignore
                lazy.push({ k, a: [input, parsed, tmp, $] })
            } else output[k] = $.call(output, k, tmp)
        } else if (output[k] !== __ignore) output[k] = $.call(output, k, value)
    }
    for (let { length } = lazy, i = 0; i < length; i++) {
        const { k, a } = lazy[i]
        output[k] = $.call(output, k, __revive.apply(null, a))
    }
    return output
}

const __set = (known, input, value) => {
    const index = __Primitive(input.push(value) - 1)
    known.set(value, index)
    return index
}

/**
 * Converts a specialized flatted string into a JS value.
 * @param {string} text
 * @param {(this: any, key: string, value: any) => any} [reviver]
 * @returns {any}
 */
const __parse = (text, reviver) => {
    const input = $parse(text, __Primitives).map(__primitives)
    const value = input[0]
    const $ = reviver || __noop
    const tmp = typeof value === __object && value ? __revive(input, new Set(), value, $) : value
    return $.call({ '': tmp }, '', tmp)
}

/**
 * Converts a JS value into a specialized flatted string.
 * @param {any} value
 * @param {((this: any, key: string, value: any) => any) | (string | number)[] | null | undefined} [replacer]
 * @param {string | number | undefined} [space]
 * @returns {string}
 */
const __stringify = (value, replacer, space) => {
    const $ =
        replacer && typeof replacer === __object
            ? (k, v) => (k === '' || -1 < replacer.indexOf(k) ? v : void 0)
            : replacer || __noop
    const known = new Map()
    const input = []
    const output = []
    let i = +__set(known, input, $.call({ '': value }, '', value))
    let firstRun = !i
    while (i < input.length) {
        firstRun = true
        output[i] = $stringify(input[i++], replace, space)
    }
    return '[' + output.join(',') + ']'
    function replace(key, value) {
        if (firstRun) {
            firstRun = !firstRun
            return value
        }
        const after = $.call(this, key, value)
        switch (typeof after) {
            case __object:
                if (after === null) return after
            case __primitive:
                return known.get(after) || __set(known, input, after)
        }
        return after
    }
}

/**
 * Converts a generic value into a JSON serializable object without losing recursion.
 * @param {any} value
 * @returns {any}
 */
const __toJSON = (value) => $parse(__stringify(value))

/**
 * Converts a previously serialized object with recursion into a recursive one.
 * @param {any} value
 * @returns {any}
 */
const __fromJSON = (value) => __parse($stringify(value))
