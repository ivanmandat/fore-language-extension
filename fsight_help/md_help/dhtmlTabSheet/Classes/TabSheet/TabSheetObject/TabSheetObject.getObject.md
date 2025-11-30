# TabSheetObject.getObject

TabSheetObject.getObject
-


# TabSheetObject.getObject


## Синтаксис


getObject();


## Описание


Метод getObject возвращает DOM-элемент
 объекта.


## Комментарии


Метод возвращает значение типа HTMLDivElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](TabSheetObject.htm)
 с наименованием «tabSheetObject» (см. страницу «[Конструктор
 TabSheetObject](Constructor_TabSheetObject.htm)»). Получим DOM-элемент объекта:


// Получим DOM-элемент объекта
domElement = tabSheetObject.getObject();

В результате выполнения примера в консоли браузера будет выведен DOM-элемент
 объекта «tabSheetObject»:


<div class="PPTSObjFullPart" style="left:
 0px; top: 0px;">…</div>


См. также:


[TabSheetObject](TabSheetObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
