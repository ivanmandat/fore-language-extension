# TabSheetObject.getContainer

TabSheetObject.getContainer
-


**


# TabSheetObject.getContainer


## Синтаксис


getContainer();


## Описание


Метод getContainer** возвращает
 DOM-элемент контейнера, в котором расположен объект.


## Комментарии


Метод возвращает значение типа HTMLDivElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](TabSheetObject.htm)
 с наименованием «tabSheetObject» (см. страницу «[Конструктор
 TabSheetObject](Constructor_TabSheetObject.htm)»). Получим DOM-элемент контейнера, в котором расположен
 объект:


// Получим DOM-элемент контейнера, в котором расположен объект
domElement = tabSheetObject.getContainer();

В результате выполнения примера в консоли браузера будет выведен DOM-элемент
 контейнера, в котором расположен объект «tabSheetObject»:


<div id="tabSheet1" class="PPUiTabSheetContainer
 PPC" tabindex="null" enabled="enabled" style="height:
 350px; width: 650px;">…</div>


См. также:


[TabSheetObject](TabSheetObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
