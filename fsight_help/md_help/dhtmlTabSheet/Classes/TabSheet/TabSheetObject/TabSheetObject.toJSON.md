# TabSheetObject.toJSON

TabSheetObject.toJSON
-


# TabSheetObject.toJSON


## Синтаксис


toJSON();


## Описание


Метод toJSON преобразовывает
 объект в JSON-объект.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](TabSheetObject.htm)
 с наименованием «tabSheetObject» (см. страницу «[Конструктор
 TabSheetObject](Constructor_TabSheetObject.htm)»). Преобразуем объект «tabSheetObject» в JSON-объект:


// Получим параметры объекта в формате JSON
objJSON = tabSheetObject.toJSON();

В результате выполнения примера в консоли браузера будут выведены параметры
 объекта «tabSheetObject» в формате JSON:


Object {@I: "tabSheetHomeIconObject",
 @CN: "PP.Ui.TabSheetObject", @LC: 1, @TR: 0, @L: 0…}


См. также:


[TabSheetObject](TabSheetObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
