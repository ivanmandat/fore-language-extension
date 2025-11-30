# TabSheetObject.isUnderCoordAndMouse

TabSheetObject.isUnderCoordAndMouse
-


**


# TabSheetObject.isUnderCoordAndMouse


## Синтаксис


isUnderCoordAndMouse(coord: PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm));


## Параметры


*coord.* Координата, принадлежность к объекту которой требуется определить.


## Описание


Метод isUnderCoordAndMouse** определяет, соответствуют ли указанные координаты объекту в таблице, и находится ли он под курсором мыши.


## Комментарии


Метод возвращает значение true, если указанные координаты соответствует объекту в таблице, и они находится под курсором мыши, иначе - значение false.


Координаты соответствуют объекту в таблице, если они совпадают с координатами его верхнего левого угла.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)») и компонента [TabSheetObject](TabSheetObject.htm) (см. страницу «[Конструктор TabSheetObject](Constructor_TabSheetObject.htm)»). Обработаем событие перемещения курсора в таблице [MouseMove](../TabSheet/TabSheet.MouseMove.htm), удаляя объекты после проведения над ними курсора:


// Обработаем событие MouseMove
tabSheet.MouseMove.add(function (sender, eventArgs) {
    // Определим координаты верхнего левого угла объекта в таблице
    var coord = tabSheetObject.getTopLeftCoord();
    if (tabSheetObject.isUnderCoordAndMouse(coord)) {
        // Удалим объект из таблицы
        tabSheetObject.remove()
    }
});

До выполнения примера таблица с добавленным в неё объектом имела следующий вид:


![](TabSheetObject.png)


В результате выполнения примера все объекты в таблице будут удалены после проведения над ними курсора мыши:


![](../TabSheet/TabSheet.addCellControl_2.png)


См. также:


[TabSheetObject](TabSheetObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
