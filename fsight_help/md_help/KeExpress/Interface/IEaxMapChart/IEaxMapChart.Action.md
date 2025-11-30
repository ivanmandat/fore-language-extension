# IEaxMapChart.Action

IEaxMapChart.Action
-


# IEaxMapChart.Action


## Синтаксис


Action: String;


## Описание


Свойство Action определяет макрос
 для обработки событий карты.


## Комментарии


В зависимости от того, где находится реализация макроса, различается
 способ указания пути к макросу в данном свойстве:


	- макрос реализован в модуле/форме репозитория: <идентификатор
	 модуля/формы>.<наименование
	 макроса>;


	- макрос реализован в одном из объектов сборки репозитория: <идентификатор сборки>.<наименование макроса>.


В модулях/формах репозитория реализация пользовательских макросов должна
 производиться в глобальном пространстве имен (Global Scope).


Примечание.
 Объект среды разработки, в котором содержится реализация макроса, должен
 быть [подключен
 к регламентному отчету](KeReport.chm::/Interface/IPrxAssemblies/IPrxAssemblies.Add.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- регламентного отчета с идентификатором REG_REPORT_ACTION. Отчет
	 построен на основе источника данных - куб;


	- карты с идентификатором MAP, в которой находится территория
	 с идентификатором RF.


В примере необходимо наличие макроса «Action», который будет использоваться
 в качестве обработчика событий.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Report,
 Tab, Topobase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Module: IMetabaseObjectDescriptor;

	    ActiveSheet: IPrxSheet;

	    Assemb: IPrxAssemblies;

	    i: Integer;

	    Table: IPrxTable;

	    Objects: ITabObjects;

	    AddObj: ITabObject;

	    Obj: IPrxVisualizer;

	    DA: IEaxDAtaArea;

	    Slice: IEaxDataAreaSlice;

	    SlObj: IEaxObject;

	    MapChart: IEaxMapChart;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REG_REPORT_ACTION").Edit As IPrxReport;

	    // Подключим модуль с макросом к регламентному отчету

	    Module := MB.ItemById("IEAXMAPCHART_ACTION");

	    Assemb := Report.Assemblies;

	    i := Assemb.Add(Module);

	    // Создадим новый объект «визуализатор»

	    ActiveSheet := Report.ActiveSheet;

	    Table := ActiveSheet As IPrxTable;

	    Objects := Table.TabSheet.Objects;

	    AddObj := Objects.Add("PrxVisualizer", New GxRectF.Create(0, 0, 100, 100));

	    Obj := AddObj.Extension As IPrxVisualizer;

	    // Получим аналитическую область данных

	    DA := Report.DataArea;

	    // Получим срез данных

	    Slice := DA.Slices.Item(0);

	    // В качестве визуализатора добавим карту

	    SlObj := Slice.Views.AddByType(EaxObjectType.MapChart) As IEaxVisualizer;

	    Obj.EaxVisualizer := SlObj As IEaxVisualizer;

	    MapChart := Obj.EaxVisualizer As IEaxMapChart;

	    MapChart.Enabled := True;

	    MapChart.Visible := True;

	    MapChart.Topobase := MB.ItemById("MAP").Edit As ITopobase;

	    // Определим макрос для обработки событий

	    MapChart.Action := "REG_REPORT_ACTION.Action";

	    MapChart.DoAction("RF");

	    // Обновим карту

	    MapChart.Refresh;

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


	// Обработчик событий

	Public Sub Action(n: Variant);

	Var

	    Table: IPrxTable;

	    Objects: ITabObjects;

	    Object: IPrxVisualizer;

	    MapChart: IEaxMapChart;

	    Map: IVZMapChart;

	    i: Integer;

	    RootLayer: IVZMapChartLayer;

	    Shapes: IVZMapChartShapes;

	Begin

	    If n.IsNull Or n.IsEmpty Then

	        Return;

	    End If;

	    // Получим карту в качестве визуализатора

	    Table := PrxReport.ActiveReport.ActiveSheet As IPrxTable;

	    Objects := Table.TabSheet.Objects;

	    Object := Objects.Item(0).Extension As IPrxVisualizer;

	    MapChart := Object.EaxVisualizer As IEaxMapChart;

	    Map := MapChart.MapChart;

	    // Получим слой карты

	    RootLayer := Map.RootLayer.LayerById("Regions");

	    // Получим территории карты

	    Shapes := RootLayer.Shapes;

	    // В ячейке G8 будет отображаться идентификатор территории

	    If n.VarType = ForeVariantType.String Then

	        For i := 0 To Shapes.Count - 1 Do

	        If Shapes.Item(i).Name = (n As String) Then

	            Table.TabSheet.Cell(7, 7).Value := Shapes.Item(i).Name;

	        End If;

	        End For;

	    End If;

	End Sub Action;


После выполнения примера в регламентном отчете будет создан визуализатор
 на основе карты. Карта будет использовать обработчик событий, который
 реализует щелчок кнопки мыши по территории с идентификатором RF. В результате
 в ячейку G8 выведется наименование территории.


См. также:


[IEaxMapChart](IEaxMapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
