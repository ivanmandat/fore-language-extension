# IMapColorScale.AutoSetup

IMapColorScale.AutoSetup
-


# IMapColorScale.AutoSetup


## Синтаксис


AutoSetup(


Layer: [IMapLayer](../IMapLayer/IMapLayer.htm);


DataAdapter: Object;


StartColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


EndColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm));


## Параметры


Layer. Слой карты;


DataAdapter. Значение из куба,
 соответствующее территории;


StartColor. Начальный цвет
 градиента;


EndColor. Конечный цвет градиента.


## Описание


Метод AutoSetup производит автонастройку
 цветовой шкалы: применяет градиентную заливку и производит расчет значений
 ([Value](../IMapScale/IMapScale.Value.htm)) для делений шкалы
 с сохранением заданного количества интервалов ([Count](../IMapScale/IMapScale.Count.htm)).


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.
 На листе регламентного отчета должна быть расположена карта, для которой
 создан картографический показатель.


Добавьте ссылки на системные сборки: Drawing, Map, Report, Tab.


	Sub UserProc;

	Var

	    Report: IPrxReport;

	    Map : IMap;

	    Layer : IMapLayer;

	    Visual: IMapAreaVisual;

	    MapScale : IMapColorScale;

	    a,b : IGxColor;

	Begin

	    Map := (Report.Sheets.Item(0) As IPrxTable).TabSheet.Objects.Item(0).Extension As IMap;

	    Layer := Map.Layers.FindByName("Regions");

	    Visual := Layer.Visuals.Item(0) As IMapAreaVisual;

	    a := New GxColor.CreateRGB(120, 125, 225);

	    b := New GxColor.CreateRGB(170, 115, 225);

	    MapScale := Report.Scales.Item(0).MapScale As IMapColorScale;

	    MapScale.AutoSetup(Layer, Visual.DataAdapter, a, b);

	End Sub UserProc;


После выполнения примера для цветовой шкалы будут рассчитаны значения
 делений и задан градиент.


См. также:


[IMapColorScale](IMapColorScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
