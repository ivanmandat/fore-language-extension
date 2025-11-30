# PP.normalizeSize

PP.normalizeSize
-


**


# PP.normalizeSize


## Синтаксис


normalizeSize(size: [PP.Point](Point/Point.htm), basis: [PP.Point](Point/Point.htm), isAbsolute: Boolean);


## Параметры


*size.* Исходный размер;


*basis.* Размер, являющийся базисом;


*isAbsolute.* Признак нормализации размера по заданному базису. Если параметр равен значению true, то метод возвратит исходный размер, если значению false, то нормализованный размер.


## Описание


Метод normalizeSize** нормализует указанный размер по заданному базису.


## Комментарии


Метод возвращает значение типа [PP.Point](Point/Point.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файлы сценариев PP.js и PP.GraphicsBase.js. Нормализует размер (8, 6) по базису (2, 3):


// Зададим исходный размер
var sourcePoint = new PP.Point(8, 6);
console.log("Исходная длина: " + sourcePoint.getX() + ", ширина: " + sourcePoint.getY());
// Зададим размер, являющийся базисом
var basisPoint = new PP.Point(2, 3);
console.log("Длина базиса: " + basisPoint.getX() + ", ширина: " + basisPoint.getY());
// Нормализуем исходный размер по базису
var normalizePoint = PP.normalizeSize(sourcePoint, basisPoint, false);
console.log("Нормализованная длина: " + normalizePoint.getX() + ", ширина: " + normalizePoint.getY());

В результате выполнения примера в консоли браузера будут выведены исходный и нормализованный размеры, а также базис, по которому осуществлялась нормализация:


Исходная длина: 8, ширина: 6

Длина базиса: 2, ширина: 3

Нормализованная длина: 16, ширина: 18


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
