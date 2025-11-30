# EaxGridView.getCellType

EaxGridView.getCellType
-


**


# EaxGridView.getCellType


## Синтаксис


getCellType(coord: [PP.Ui.TabSheetCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheetCoord/TabSheetCoord.htm));


## Параметры


*coord.* Координата ячейки
 таблицы. Если параметр не указан, то по умолчанию используется координата
 под текущим положением курсора мыши.


## Описание


Метод getCellType** возвращает
 тип ячейки таблицы по координате.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Определим тип ячейки таблицы с координатой
 (3, 5):


var coord = new PP.Ui.TabSheetCoord({
    ColIndex: 5,
    RowIndex: 3});
console.log("Cell type: " + expressBox.getDataView().getGridView().getCellType());

В результате выполнения данного примера в консоли браузера будет выведена
 строка с текстом:


Cell type: LeftHeader


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
