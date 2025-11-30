# IPrxDimensionDrill.ActionType

IPrxDimensionDrill.ActionType
-


# IPrxDimensionDrill.ActionType


## Синтаксис


ActionType: [TabHyperlinkActionType](TabSheet.chm::/Enums/TabHyperlinkActionType.htm);


## Описание


Свойство ActionType определяет
 тип действия, выполняемого при щелчке по гиперссылке.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REGULAR_REPORT. В отчёте имеется два листа с
 наименованиями Лист1 и Лист2. На первом листе расположена область данных
 с идентификатором DATAISLAND, на втором листе - диаграмма с идентификатором
 PrxChart1. Источник, на базе которого построена область данных, имеет
 в своей структуре измерение с идентификатором D_TO.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DI: IPrxDataIsland;

	    DIC: IPrxDataIslandDimensionCommon;

	    Drill: IPrxDimensionDrill;

	    DimMode: IPrxSliceDimension;

	    Dim: IDimensionModel;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    DI := Report.DataIslands.FindById("DATAISLAND").Edit;

	    Dim := DI.Slice.Dimensions.FindById("D_TO").Dimension.Dimension;

	    DIC := DI.Properties.Dimension(Dim);

	    DIC.Drilled := TriState.OnOption;

	    Drill := DIC.Drill;

	    Drill.Mode := PrxDataDrillMode.Replace;

	    DimMode := Report.DataSources.Item(0).Slices.Item(1).Dimensions.FindById("D_TO");

	    Drill.Dimension := DimMode;

	    Drill.Index := DimMode.Dimension.Dimension.Indexes.PrimaryIndex;

	    Drill.Attribute := Dim.Attributes.Id;

	    Drill.Sheet := Null;

	    Drill.ActionType := TabHyperlinkActionType.ShowObject;

	    Drill.Action := "#Лист2!PrxChart1";

	    DI.Save;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера при нажатии на гиперссылку будет производиться
 переход на второй лист отчёта и позиционирование диаграммы по центру.


См. также:


[IPrxDimensionDrill](IPrxDimensionDrill.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
