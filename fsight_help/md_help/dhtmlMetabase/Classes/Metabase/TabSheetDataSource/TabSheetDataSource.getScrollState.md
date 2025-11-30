# TabSheetDataSource.getScrollState

TabSheetDataSource.getScrollState
-


# TabSheetDataSource.getScrollState


## Синтаксис


getScrollState = function ()


## Описание


Метод getScrollState возвращает
 расположения полос прокрутки в таблице.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox.htm)
 с наименованием «grid» (см. «[Пример
 размещения компонента GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox_example.htm)»).


Добавим кнопку в теге BODY:


<button
 onclick="loadData()">Load Data</button>


Добавим функцию, которая будет выполняться при нажатии на кнопку:


function loadData() {


    prxMbService.setViewSettings(prxReport);

    grid.refresh();

    var tSource = grid.getTabSheet().getModel().getDataSource()


    console.log(tSource.getScrollState());


};


После
 выполнения примера при нажатии на кнопку в консоли будут возвращены данные
 о положении полос прокрутки в таблице.


См. также:


[TabSheetDataSource](TabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
