# IMapImageVisual.StartAngle

IMapImageVisual.StartAngle
-


# IMapImageVisual.StartAngle


## Синтаксис


StartAngle: Double;


## Описание


Свойство StartAngle определяет
 угол поворота показателя.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT, содержащего на первом листе только карту
 с пиктографическим показателем на слое «Regions».


Добавьте ссылки на системные сборки: Map, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    MetabaseObject: IMetabaseObject;

	    Report: IPrxReport;

	    Table: IPrxTable;

	    Obj: ITabObjects;

	    Layer: IMapLayer;

	    Map: IMap;

	    ImageVisual: IMapImageVisual;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("REPORT").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Table := Report.Sheets.Item(0) As IPrxTable;

	    Obj := Table.TabSheet.Objects;

	    // Определим карту на листе отчета

	    Map := Obj.Item(0).Extension As IMap;

	    Layer := Map.Layers.FindByName("Regions");

	    // Определим угол
	 поворота показателя

	    ImageVisual := Layer.Visuals.Item(0) As IMapImageVisual;

	    ImageVisual.StartAngle := 50;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера будет определен начальный угол поворота пиктографического
 показателя.


См. также:


[IMapImageVisual](IMapImageVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
