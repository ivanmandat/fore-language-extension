# TabSheet.ObjectSelectionChanged

TabSheet.ObjectSelectionChanged
-


# TabSheet.ObjectSelectionChanged


## Синтаксис


ObjectSelectionChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ObjectSelectionChanged
 наступает при выделении объекта в таблице.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](../TabSheetObject/TabSheetObject.htm)
 (см. страницу «[Конструктор
 TabSheetObject](../TabSheetObject/Constructor_TabSheetObject.htm)»). Обработаем событие, наступающее при выделении объекта,
 расположенного в таблице:


tabSheet.ObjectSelectionChanged.add(function (sender, args) {
// Получим идентификатор выделенного объекта
    console.debug(tabSheetObject.getIdent());
});

В результате выполнения примера при выделении компонента TabSheetObject
 в консоли браузера будет выведено сообщение с идентификатором объекта.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
