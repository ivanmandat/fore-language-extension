# TabSheet.getVisibleHeight

TabSheet.getVisibleHeight
-


**


# TabSheet.getVisibleHeight


## Синтаксис


getVisibleHeight();


## Описание


Метод getVisibleHeight** возвращает видимую высоту таблицы в пикселях.


## Комментарии


Метод возвращает значение Number.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим значение видимой ширины и высоты таблицы:


// Получим значение видимой ширины таблицы
var visibleWidth = tabSheet.getVisibleWidth();
console.log("Видимая ширина таблицы: " + visibleWidth);
// Получим значение видимой высоты таблицы
var visibleHeight = tabSheet.getVisibleHeight();
console.log("Видимая высота таблицы: " + visibleHeight);

В результате выполнения примера в консоли браузера были выведены ширина и высота таблицы:


Видимая ширина таблицы: 334

Видимая высота таблицы: 174


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
