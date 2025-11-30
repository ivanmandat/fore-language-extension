# IEaxDataAreaSlice.TopobaseByTimePoint

IEaxDataAreaSlice.TopobaseByTimePoint
-


# IEaxDataAreaSlice.TopobaseByTimePoint


## Синтаксис


TopobaseByTimePoint(Value: Integer): [ITopobase](KeTopobase.chm::/Interface/ITopobase/ITopobase.htm);


## Параметры


Value. Индекс точки временной
 шкалы.


## Описание


Свойство TopobaseByTimePoint
 возвращает топооснову, которая отображается в указанной точке временной
 шкалы.


## Комментарии


Отображение различных топооснов в разных точках временной шкалы доступно,
 если используется версионное территориальное измерение. В этом измерении
 для элементов, актуальных в определенный период времени, указываются различные
 значения по атрибуту TOPO_ID. В качестве значений данного атрибута указываются
 ключи топооснов репозитория. При работе карты будет отображаться топооснова,
 которая определена в атрибуте TOPO_ID для элемента (если выделен один
 элемент) либо для родительского элемента (если выделены несколько элементов)
 и которая актуальна в текущей временной точке.


Для сброса топоосновы на [заданную
 в репозитории по умолчанию](KeSom.chm::/Interface/IMetabase/IMetabase.SpecialObject.htm) используйте метод [IEaxDataAreaSlice.ResetTopobase](IEaxDataAreaSlice.ResetTopobase.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_TOPOBASE. Отчет содержит в своей структуре территориальное
 измерение, построенное на базе версионного справочника. Для различных
 периодов элементов определены различные топоосновы.


Добавьте ссылки на системные сборки: Express, Map, Metabase, Topobase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    DataArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    Map: IMap;

	    Topobase: ITopobase;

	    TopoKey: Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Analyzer := MB.ItemById("EXPRESS_TOPOBASE").Edit As IEaxAnalyzer;

	    // Получим область данных

	    DataArea := Analyzer.DataArea;

	    // Получим срез данных

	    Slice := DataArea.Slices.Item(0);

	    // Получим карту

	    Map := Analyzer.Map.Map;

	    // Получим топооснову из указанной точки временной шкалы

	    Topobase := Slice.TopobaseByTimePoint(Map.TimePoint) As ITopobase;

	    // Зададим топооснову

	    Slice.Topobase := Topobase;

	    // Получим и выведем ключ из указанной точки временной шкалы

	    TopoKey := Slice.TopobaseKeyByTimePoint(Map.TimePoint);

	    Debug.WriteLine("Ключ топоосновы - " + TopoKey.ToString);

	    // Видимость объекта в отчете

	    Analyzer.MapChart.Visible := True;

	    // Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчет будет загружена та топооснова,
 которая используется картой экспресс-отчета в текущей временной точке.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
