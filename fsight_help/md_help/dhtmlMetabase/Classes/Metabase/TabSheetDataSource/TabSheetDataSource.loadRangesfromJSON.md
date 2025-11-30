# TabSheetDataSource.loadRangesfromJSON

TabSheetDataSource.loadRangesfromJSON
-


# TabSheetDataSource.loadRangesfromJSON


## Синтаксис


loadRangesfromJSON (tabSheetDataResult, ranges)


## Параметры


tabSheetDataResult. JSON-объект
 с данными, которые нужно загрузить;


ranges. Диапазон ячеек, в который
 будут загружены данные.


## Описание


Метод loadRangesfromJSON загружает
 данные в таблицу из JSON-объекта.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox.htm)
 с наименованием «grid» (см. «[Пример
 размещения компонента GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox_example.htm)»).


Добавим кнопку в теге BODY:


<button
 onclick="loadData()">Load Data</button>


Добавим функцию, которая будет выполняться при нажатии на кнопку:


function
 loadData() {


    var
 testData = { ranges: { Part: { sheet: { TabSheetData: { Cells: { Cell:
 [{ L: 1, T: 1, CellData: { V: "test",
 FT: "test"}}]}}}}} };


    grid.getControl().getModel().getDataSource().loadRangesfromJSON(testData,
 grid.getControl().getRange(1, 1, 1, 1))


};


Добавим обработчик события [TabSheetDataSource.RangeLoaded](TabSheetDataSource.RangeLoaded.htm):


var tSource
 = grid.getControl().getModel().getDataSource()


tSource.[RangeLoaded](TabSheetDataSource.RangeLoaded.htm).add(function ()


{


    console.log(tSource.[isLoaded](TabSheetDataSource.isLoaded.htm)(), tSource.[getSelection](TabSheetDataSource.getSelection.htm)())


})


После выполнения примера при нажатии на кнопку в ячейку с адресом A1
 будет загружен текст «test». В консоль браузера будет выведено значение
 true - результат выполнения метода [TabSheetDataSource.isLoaded](TabSheetDataSource.isLoaded.htm)
 и объект с описанием выделенного диапазона ячеек - результат выполнения
 метода [TabSheetDataSource.getSelection](TabSheetDataSource.getSelection.htm).


См. также:


[TabSheetDataSource](TabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
