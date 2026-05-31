# Set в JavaScript

## Что такое Set

`Set` — это встроенная структура данных в JavaScript для хранения **уникальных значений**.

Особенности:

* Дубликаты не хранятся
* Сохраняется порядок добавления элементов
* Можно хранить любые типы данных
* Быстрый поиск элементов

---

## Создание Set

```js
const set = new Set()
```

Также можно сразу передать массив:

```js
const set = new Set([1, 2, 3])
```

---

## Пример работы

```js
const set = new Set()

set.add(1)
set.add(2)
set.add(2)
set.add(3)

console.log(set)
```

Результат:

```js
Set(3) { 1, 2, 3 }
```

Повторное значение `2` не будет добавлено, потому что `Set` хранит только уникальные элементы.

---

# Основные методы Set

## add(value)

Добавляет новое значение в коллекцию.

```js
const set = new Set()

set.add(10)
set.add(20)

console.log(set)
```

Результат:

```js
Set(2) { 10, 20 }
```

---

## has(value)

Проверяет наличие элемента.

```js
const set = new Set([10, 20, 30])

console.log(set.has(10))
console.log(set.has(50))
```

Результат:

```js
true
false
```

---

## delete(value)

Удаляет элемент.

```js
const set = new Set([10, 20, 30])

set.delete(20)

console.log(set)
```

Результат:

```js
Set(2) { 10, 30 }
```

---

## clear()

Удаляет все элементы.

```js
const set = new Set([1, 2, 3])

set.clear()

console.log(set)
```

Результат:

```js
Set(0) {}
```

---

## size

Возвращает количество уникальных элементов.

```js
const set = new Set([1, 2, 3, 4])

console.log(set.size)
```

Результат:

```js
4
```

---

# Перебор Set

## Через for...of

```js
const set = new Set([1, 2, 3])

for (const value of set) {
  console.log(value)
}
```

Результат:

```js
1
2
3
```

---

## Через forEach

```js
const set = new Set([1, 2, 3])

set.forEach((value) => {
  console.log(value)
})
```

Результат:

```js
1
2
3
```

---

# Когда использовать Set

Используйте `Set`, если необходимо:

* Удалить дубликаты из массива
* Быстро проверить наличие элемента
* Хранить только уникальные значения
* Решать алгоритмические задачи на собеседованиях
* Отслеживать уже встречавшиеся элементы

