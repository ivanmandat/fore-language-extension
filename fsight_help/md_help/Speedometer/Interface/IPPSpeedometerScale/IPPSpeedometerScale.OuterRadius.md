# IPPSpeedometerScale.OuterRadius

IPPSpeedometerScale.OuterRadius
-


# IPPSpeedometerScale.OuterRadius


## Синтаксис


OuterRadius: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm);


## Описание


Свойство OuterRadius определяет
 область отрисовки шкалы относительно её центра.


## Комментарии


Диапазон допустимых значений [0, 1]. Чем меньше значение, тем ближе к
 центру расположена шкала.


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC». Аналитическая панель должна содержать
 спидометр.


Добавьте ссылки на системные сборки: Adhoc, Drawing, Express, Metabase
 и Speedometer.


	Sub UserProc;

	Var

	    Speedometer: IPPSpeedometer;

	    MB: IMetabase;

	    AdhocReport: IAdhocReport;

	    EaxSpeedometer: IEaxSpeedometer;

	    Enalyzer: IEaxAnalyzer;

	    DsObjs: IAdhocDataSourceObjects;

	    Scales: IPPSpeedometerScales;

	    Scale: IPPSpeedometerScale;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим аналитическую панель

	    AdhocReport := MB.ItemById("ADHOC").Edit As IAdhocReport;

	    // Получим источники данных аналитической панели

	    DsObjs := AdhocReport.DataSourceObjects;

	    // Получим спидометр

	    Enalyzer := DsObjs.Item(0).GetSourceObject As IEaxAnalyzer;

	    EaxSpeedometer := Enalyzer.Speedometer;

	    // Получим параметры спидометра

	    Speedometer := EaxSpeedometer.Speedometer;

	    // Получим коллекцию шкал спидометра

	    Scales := Speedometer.Scales;

	    // Получим шкалу данных

	    Scale := Scales.DataScale;

	    // Изменим угол наклона начала шкалы

	    Scale.StartAngle := 45;

	    // Изменим шаг размещения дополнительных маркеров

	    Scale.Step_ := 2000;

	    // Изменим область отрисовки шкалы

	    Scale.OuterRadius.Height := 0.6;

	    Scale.OuterRadius.Width := 0.7;

	    // Выведем координаты центра шкалы

	    Debug.Writeline("Координаты центра шкалы: " + Scale.CenterPosition.X.ToString +

	        ":" + Scale.CenterPosition.Y.ToString);

	    // Выведем текст всплывающей подсказки

	    Debug.Writeline("Текст подсказки: " + Scale.ToolTip);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут изменены область отрисовки шкалы,
 шаг размещения промежуточных маркеров, угол наклона шкалы. В окно консоли
 будут выведены координаты центра шкалы и текст всплывающей подсказки.


См. также:


[IPPSpeedometerScale](IPPSpeedometerScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
