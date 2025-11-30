# IMapLayer.VisualOffset

IMapLayer.VisualOffset
-


# IMapLayer.VisualOffset


## Синтаксис


VisualOffset: Integer;


## Описание


Свойство VisualOffset определяет
 расстояние между столбиковыми и круговыми показателями, расположенными
 на одной линии.


## Комментарии


Для задания расстояния между столбиковыми и круговыми показателями необходимо,
 чтобы свойство [IMapLayer.PlaceVisualsOneByOne](IMapLayer.PlaceVisualsOneByOne.htm)
 принимало значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором «REPORT», содержащего карту. Карта содержит столбиковые
 и круговые показатели.


Добавьте ссылки на системные сборки: Map, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Map: IMap;

	    Layer: IMapLayer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    Map := (Report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IMap;

	    Layer := Map.Layers.Item(0);

	    Layer.VisualOffset := 10;

	    If Not Layer.PlaceVisualsOneByOne Then

	        Layer.PlaceVisualsOneByOne := True;

	    End If;

	End Sub UserProc;


После выполнения примера изменится расстояние между столбиковыми и круговыми
 показателями.


См. также:


[IMapLayer](IMapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
