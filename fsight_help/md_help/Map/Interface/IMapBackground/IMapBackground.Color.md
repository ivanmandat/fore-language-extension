# IMapBackground.Color

IMapBackground.Color
-


# IMapBackground.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет
 цвет сплошной заливки фона легенды.


## Комментарии


Данное свойство актуально, если свойство [IMapBackground.Type](IMapBackground.Type.htm)
 имеет значение MapBackgroundType.Color.


## Пример


Для выполнения примера предполагается наличие на форме компонентов ReportBox,
 UiReport с наименованиями ReportBox1 и UiReport1 соответственно. UiReport1
 является источником данных для ReportBox1. Также необходимо наличие регламентного
 отчета, содержащего карту с включенной легендой, и который является источником
 данных для «UiReport1».


Добавьте ссылки на системные сборки: Drawing, Map, Report, Tab.


	Sub UserProc;

	Var

	    regrep: IPrxReport;

	    sheet: IPrxSheet;

	    table: IPrxTable;

	    objects: ITabObjects;

	    map: IMap;

	    legend: IMapLegend;

	    background: IMapBackground;

	Begin

	    // Получим регламентный отчет

	    regrep := UiReport1.Report;

	    // Получим карту из регламентного отчета

	    sheet := regrep.Activesheet;

	    table := sheet As IPrxTable;

	    objects := table.TabSheet.Objects;

	    map := objects.Item(0).Extension As IMap;

	    // Получим легенду карты

	    legend := map.View.Legend;

	    // Получим фон легенды на карте

	    background := legend.Background;

	    // Установим тип сплошной заливки легенды

	    background.Type := MapBackgroundType.Color;

	    // Зададим цвет заливки легенды

	    background.color := New GxColor.CreateRGB(120, 0, 120);

	    // Обновим карту

	    map.Refresh;

	End Sub UserPRoc;


После выполнения примера изменится цвет фона легенды.


См. также:


[IMapBackground](IMapBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
