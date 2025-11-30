# IMap3DVisual.Height

IMap3DVisual.Height
-


# IMap3DVisual.Height


## Синтаксис


Height: [IMapVisualNumericProperty](../IMapVisualNumericProperty/IMapVisualNumericProperty.htm);


## Описание


Свойство Height определяет параметры
 высоты элементов 3D-карты.


## Комментарии


Значение свойства Height учитывается,
 если свойство [IMap3DVisual.AutoHeight](IMap3DVisual.AutoHeight.htm)
 принимает значение False.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. На активном листе отчёта создана карта,
 в которой настроен слой «Regions».


Добавьте ссылки на системные сборки: Map, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Sheet: IPrxSheet;

	    Map: IMap;

	    Map3D: IMap3DVisual;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    Sheet := Report.ActiveSheet;

	    Map := (Sheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IMap; // карта на листе отчета

	    Map3D := Map.Layers.FindByName("Regions").Visuals.Item(0) As IMap3DVisual; // показатель в 3D

	    Map3D.AutoHeight := False;

	    Map3D.Height.Value := 12;

	    Map3D.Height.Dependent := True;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут изменены параметры высоты элементов
 3D-карты.


См. также:


[IMap3DVisual](IMap3DVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
