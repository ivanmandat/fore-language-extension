# TabSheet.ITabObjectCreating

TabSheet.ITabObjectCreating
-


# TabSheet.ITabObjectCreating


## Синтаксис


ITabObjectCreating: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ITabObjectCreating наступает
 при создании пользовательского объекта в таблице.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](../TabSheetObject/TabSheetObject.htm)
 с идентификатором «tabSheetObject» (см. страницу «[Конструктор
 TabSheetObject](../TabSheetObject/Constructor_TabSheetObject.htm)»). Обработаем событие, наступающее при создании объекта:


tabSheet.ITabObjectCreating.add(function (sender, args) {
    console.debug("Пользовательский объект успешно создан");
});
// Вызовем событие ITabObjectCreating
tabSheet.refreshObjects()
// Получим пользовательский объект
Obj = tabSheetObject.getITabObject();

Выполним данный пример. При создании пользовательского объекта в консоли
 браузера будет выведено сообщение о завершении создания. Будет получен
 созданный пользовательский объект.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
