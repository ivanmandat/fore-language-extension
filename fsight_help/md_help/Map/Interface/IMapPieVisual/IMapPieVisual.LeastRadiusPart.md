# IMapPieVisual.LeastRadiusPart

IMapPieVisual.LeastRadiusPart
-


# IMapPieVisual.LeastRadiusPart


## Синтаксис


LeastRadiusPart: Double;


## Описание


Свойство LeastRadiusPart определяет
 долю минимального радиуса.


## Комментарии


Диапазон возможных значений [0..1]. Актуально при использовании в качестве
 [радиуса частей](IMapPieVisual.Radius.htm) [числовой
 шкалы](../IMapNumericScale/IMapNumericScale.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT, содержащего на первом листе только карту
 с круговым показателем на слое «Regions».


Добавьте ссылки на системные сборки: Map, Metabase Report,Tab.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    MetabaseObject: IMetabaseObject;

	    Report: IPrxReport;

	    Table: IPrxTable;

	    Obj: ITabObjects;

	    Layer: IMapLayer;

	    Map: IMap;

	    Visual: IMapPieVisual;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("REPORT").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Table := Report.Sheets.Item(0) As IPrxTable;

	    Obj := Table.TabSheet.Objects;

	    // Определим карту на листе отчета

	    Map := Obj.Item(0).Extension As IMap;

	    Layer := Map.Layers.FindByName("Regions");

	    // Определим показатель

	    Visual := Layer.Visuals.Item(0) As IMapPieVisual;

	    // Зададим долю минимального радиуса

	    Visual.LeastRadiusPart := 0.6;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера будет определена доля минимального радиуса
 кругового показателя.


См. также:


[IMapPieVisual](IMapPieVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
