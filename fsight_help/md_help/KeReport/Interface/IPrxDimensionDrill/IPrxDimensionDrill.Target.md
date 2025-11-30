# IPrxDimensionDrill.Target

IPrxDimensionDrill.Target
-


# IPrxDimensionDrill.Target


## Синтаксис


Target: [TabHyperlinkTarget](TabSheet.chm::/Enums/TabHyperlinkTarget.htm);


## Описание


Свойство Target определяет способ
 загрузки страницы при переходе по ссылке.


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report : IPrxReport;

	    DI : IPrxDataIsland;

	    DIC : IPrxDataIslandDimensionCommon;

	    Drill : IPrxDimensionDrill;

	    DimMode : IPrxSliceDimension;

	    Dim : IDimensionModel;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("OBJ42729").Edit;

	    Report := MObj As IPrxReport;

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

	        Drill.Action := "http://www.example.com";

	        Drill.ActionType:= TabHyperlinkActionType.OpenURL;

	        Drill.Target:= TabHyperlinkTarget.Self;

	    DI.Save;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера при щелчке по гиперссылке страница будет открыта
 в новом окне браузера.


См. также:


[IPrxDimensionDrill](IPrxDimensionDrill.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
