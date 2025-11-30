# TabSheetCoord.equals

TabSheetCoord.equals
-


**


# TabSheetCoord.equals


## Синтаксис


equals(coord: PP.Ui.[TabSheetCoord](TabSheetCoord.htm));


## Параметры


*coord. Координаты для сравнения.*


## Описание


Метод equals** проверяет равенство двух координат.


## Комментарии


Метод возвращает значение true, если сравниваемые координаты равны, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Создадим новые объекты координат таблицы и сравним их по следующим условиям: равность, больше, больше или равно, меньше, меньше или равно. Проверим валидность координат, разберем строку в новые значения координат:


// Определим новые объекты координат таблицы
var coord1 = new PP.Ui.TabSheetCoord(0, 0);
var coord2 = new PP.Ui.TabSheetCoord(1, 1);
console.log("Координаты coord1: (" + coord1.rowIndex + "," + coord1.colIndex + ")")
console.log("Координаты coord2: (" + coord2.rowIndex + "," + coord2.colIndex + ")")
console.log("Координаты coord1 и coord2 " + (coord1.equals(coord2) ? "равны" : "неравны"));
console.log("Координаты coord1 " + (coord1.isGreaterThan(coord2) ? "больше координат" : "не больше или равны координатам") + " coord2");
console.log("Координаты coord1 " + (coord1.isGreaterThanOrEqualTo(coord2) ? "больше или равны координатам" : "не больше координат") + " coord2");
console.log("Координаты coord1 " + (coord1.isLessThan(coord2) ? "меньше координат" : "больше или равны координатам") + " coord2");
console.log("Координаты coord1 " + (coord1.isLessThanOrEqualTo(coord2) ? "меньше или равны координатам" : "больше координат") + " coord2");
// Проверим валидность координат coord1
console.log("Валидность координат coord1: " + coord1.isValid());
// Определим строку для последующего разбора
var coordString = "2_2";
// Разберем строку в новые значения координат
coord1.parse(coordString);
// Выведем новые значения координат
console.log("Новые значения координат: (" + coord1.rowIndex + "," + coord1.colIndex + ")");

В результате выполнения примера в консоли браузера был выведен результат сравнения координат, результат проверки на валидность, новые значения координат:


Координаты coord1: (0,0)


Координаты coord2: (1,1)


Координаты coord1 и coord2 неравны


Координаты coord1 не больше или равны координатам coord2


Координаты coord1 не больше координат coord2


Координаты coord1 меньше координат coord2


Координаты coord1 меньше или равны координатам coord2


Валидность координат coord1: true


Новые значения координат: (2,2)


См. также:


[TabSheetCoord](TabSheetCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
