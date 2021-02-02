/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */
function sortedUniq(array) {
  return array && array.length ? baseSortedUniq(array) : [];
}
/**
  The base implementation of _.sortedUniq and _.sortedUniqBy without
  support for iteratee shorthands.
  *
  @private
  @param {Array} array The array to inspect.
  @param {Function} [iteratee] The iteratee invoked per element.
  @returns {Array} Returns the new duplicate free array.
  */
function baseSortedUniq(array, iteratee) {
  var index = -1,
    length = array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value;

    if (!index || !eq(computed, seen)) {
      var seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}
