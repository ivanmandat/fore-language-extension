# TabSheetObjectSelection.getSelectedObjects

TabSheetObjectSelection.getSelectedObjects
-


# TabSheetObjectSelection.getSelectedObjects


## Синтаксис


getSelectedObjects(): Array;


## Описание


Метод getSelectedObjects возвращает
 массив выделенных объектов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](../TabSheetObject/TabSheetObject.htm)
 (см. страницу «[Конструктор
 TabSheetObject](../TabSheetObject/Constructor_TabSheetObject.htm)»). Выделите данный объект. Получим идентификатор выделенного
 объекта:


// Получим выделение объекта в таблице
var objSelection = tabSheet.getObjectSelection();
// Получим массив с выделенным объектом
objArray = objSelection.getSelectedObjects();
// Обратимся к объекту
object = objArray[0].Object;
// Получим идентификатор объекта
object.getIdent();

В результате выполнения примера в консоли браузера будет выведено сообщение
 с идентификатором выделенного объекта.


См. также:


[TabSheetObjectSelection](TabSheetObjectSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
