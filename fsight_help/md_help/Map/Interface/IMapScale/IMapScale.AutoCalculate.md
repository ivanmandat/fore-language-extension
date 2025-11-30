# IMapScale.AutoCalculate

IMapScale.AutoCalculate
-


# IMapScale.AutoCalculate


## Синтаксис


AutoCalculate(Layer: [IMapLayer](../IMapLayer/IMapLayer.htm);
 DataAdapter: Object; AttributeName: String);


## Параметры


Layer. Слой карты;


DataAdapter. Значение из куба,
 соответствующее территории с заданным атрибутом;


AttributeName. Атрибут карты.


## Описание


Метод AutoCalculate производит
 автоматический расчет значений для шкалы отчета.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. Для регламентного отчета должна быть
 создана цветовая шкала, на листе отчета должна быть расположена карта,
 для которой создан картографичекий показатель.


Добавьте ссылки на системные сборки: Map, Metabase Report,Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    PrxTable: IPrxTable;

	    TabObj: ITabObjects;

	    Map: IMap;

	    Layer: IMapLayer;

	    Visual: IMapAreaVisual;

	    MapScale: IMapColorScale;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    PrxTable := Report.ActiveSheet As IPrxTable;

	    TabObj := PrxTable.TabSheet.Objects;

	    // Получим карту

	    Map := TabObj.Item(0).Extension As IMap;

	    // Найдём слой по наименованию

	    Layer := Map.Layers.FindByName("Regions");

	    // Определим показатель из коллекции

	    Visual := Layer.Visuals.Item(0) As IMapAreaVisual;

	    // Определим картографическую шкалу

	    MapScale := Report.Scales.Item(0).MapScale As IMapColorScale;

	    // Зададим признак автоматического расчёта значений для шкалы

	    MapScale.AutoCalculable := True;

	    // Зададим тип автоматического расчёта шкалы

	    MapScale.AutoScaleMode := MapAutoScaleMode.Uniform;

	    // Запустим автоматический расчёт значений для шкалы

	    MapScale.AutoCalculate(Layer, Visual.DataAdapter, Visual.AttributeName);

	End Sub UserProc;


После выполнения примера будет произведен расчет значений для шкалы
 отчета.


См. также:


[IMapScale](IMapScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
