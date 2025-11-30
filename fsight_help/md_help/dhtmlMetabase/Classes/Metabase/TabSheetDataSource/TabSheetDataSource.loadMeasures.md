# TabSheetDataSource.loadMeasures

TabSheetDataSource.loadMeasures
-


# TabSheetDataSource.loadMeasures


## Синтаксис


loadMeasures ()


## Описание


Метод loadMeasures загружает
 структуру электронной таблицы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox.htm)
 с наименованием «grid» (см. «[Пример
 размещения компонента GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox_example.htm)»). Загрузим структуру электронной таблицы:


var source
 = grid.getTableSource()


source.[MeasuresLoaded](TabSheetDataSource.MeasuresLoaded.htm).add(function (sender, args)


{


    console.log(args.Data,
 args.Selection)


})


source.loadMeasures()


После выполнения примера будет загружена структура электронной таблицы,
 при этом в консоль браузера будут выведены объекты с описанием структуры
 таблицы и выделенных диапазонов ячеек.


См. также:


[TabSheetDataSource](TabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
