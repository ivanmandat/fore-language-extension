# IMapBackground.GradientAngle

IMapBackground.GradientAngle
-


# IMapBackground.GradientAngle


## Синтаксис


GradientAngle: Double;


## Описание


Свойство GradientAngle
 определяет угол градиента фона легенды.


## Комментарии


Данное свойство актуально, если:


	- свойство [IMapBackground.Type](IMapBackground.Type.htm)
	 использует тип заливки MapBackgroundType.Gradient;


	- задан цвет градиентной заливки с помощью свойства [IMapBackground.GradientColor](IMapBackground.GradientColor.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов ReportBox,
 UiReport с наименованиями ReportBox1 и UiReport1 соответственно. UiReport1
 является источником данных для ReportBox1. Также необходимо наличие регламентного
 отчета, содержащего карту с включенной легендой, и который является источником
 данных для «UiReport1».


Также необходимо наличие регламентного отчета, содержащего карту с включенной
 легендой, и который является источником данных для «UiReport1».


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

	    // Установим градиентный тип заливки легенды

	    background.Type := MapBackgroundType.Gradient;

	    // Зададим цвет градиента

	    background.GradientColor := New GxColor.CreateRGB(120, 0, 120);

	    // Зададим угол градиента

	    background.GradientAngle := 45;

	    // Обновим карту

	    map.Refresh;

	End Sub UserProc;


После выполнения примера заливка фона легенды станет градиентной, угол
 градиента станет равным 45 градусам.


м. также:


[IMapBackground](IMapBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
