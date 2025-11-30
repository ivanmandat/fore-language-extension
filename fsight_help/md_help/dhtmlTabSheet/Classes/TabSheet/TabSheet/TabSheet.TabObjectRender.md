# TabSheet.TabObjectRender

TabSheet.TabObjectRender
-


# TabSheet.TabObjectRender


## Синтаксис


TabObjectRender: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TabObjectRender наступает
 при перерисовке объекта в таблице.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с идентификатором «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](../TabSheetObject/TabSheetObject.htm) с
 идентификатором «tabSheetObject» (см. страницу «[Конструктор
 TabSheetObject](../TabSheetObject/Constructor_TabSheetObject.htm)»). Обработаем событие, наступающее при перерисовке
 объекта, расположенного в таблице:


tabSheet.TabObjectRender.add(function (sender, args) {
// Получим идентификатор перерисовываемого объекта
    console.debug(tabSheetObject.getIdent());
});
// Вызовем событие TabObjectRender
tabSheet.refreshObjects()

В результате выполнения примера при наступлении события TabObjectRender
 в консоли браузера будет выведено сообщение c идентификатором перерисованного
 объекта.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
