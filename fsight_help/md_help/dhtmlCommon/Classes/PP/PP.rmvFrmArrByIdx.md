# PP.rmvFrmArrByIdx

PP.rmvFrmArrByIdx
-


**


# PP.rmvFrmArrByIdx


## Синтаксис


rmvFrmArrByIdx(arr: Array, first: Number, last: Number);


## Параметры


*arr.* Исходный массив элементов;


*first.* Индекс первого удаляемого элемента;


*last.* Индекс второго удаляемого элемента.


## Описание


Метод rmvFrmArrByIdx** удаляет элементы из массива в указанном диапазоне.


## Комментарии


Метод возвращает значение true в случае успешного удаления элементов из массива, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Определим массив целых чисел и удалим из него элементы с индексами от 2 до 4 включительно:


// Определим массив целых чисел
var elements = [5, 9, 6, 7, 2];
console.log("Исходный массив элементов: [" + elements + "]");
// Удалим из массива элементы с индексами от 2 до 4 включительно:
var first = 2;
var last = 4;
if (elements.length <= first | elements.length <= last) {
    throw PP.OutOfRangeException("Incorrect element index", this);
};
if (first > last) {
    throw PP.NotSupportedException("First element must be less then last element", this);
};
PP.rmvFrmArrByIdx(elements, 2, 4);
console.log("Изменённый массив элементов: [" + elements + "]");

В результате выполнения примера из заданного массива были удалены элементы с индексами от 2 до 4 включительно:


Исходный массив элементов: [5,9,6,7,2]


Изменённый массив элементов: [5,9]


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
