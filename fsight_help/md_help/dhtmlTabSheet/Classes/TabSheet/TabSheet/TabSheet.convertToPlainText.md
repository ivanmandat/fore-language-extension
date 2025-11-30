# TabSheet.convertToPlainText

TabSheet.convertToPlainText
-


**


# TabSheet.convertToPlainText


## Синтаксис


convertToPlainText(range: PP.Ui.[TabSheetRange](../TabSheetRange/TabSheetRange.htm), onlyVisibleRange: Boolean);


## Параметры


*range.* Исходный диапазон ячеек;


*onlyVisibleRange.* Признак того, что в текст нужно преобразовать данные только видимого диапазона. Если параметр равен true, то данные диапазона будут сконвертированы в текст, иначе - не будут.


## Описание


Метод convertToPlainText** преобразует данные диапазона ячеек в текст.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Преобразуем данные диапазона (0, 0, 1, 1) в текст:


// Получим диапазон ячеек
var range = tabSheet.getRange(0, 0, 1, 1);
// Сериализуем полученный диапазон в текст
var result = tabSheet.convertToPlainText(range);
// Выведем полученный текст
console.log("Результат преобразования:");
console.log(result);

В результате выполнения примера данные диапазона, преобразованные в текст, были выведены в консоль браузера:


Результат преобразования:

16905 3912

19281 5315


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
