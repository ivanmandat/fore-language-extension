# IPPSpeedometer.OuterRadius

IPPSpeedometer.OuterRadius
-


# IPPSpeedometer.OuterRadius


## Синтаксис


OuterRadius: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm);


## Описание


Свойство OuterRadius определяет
 область отрисовки спидометра относительно его центра.


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

	    // Изменим область отрисовки спидометра

	    Speedometer.OuterRadius.Width := 120;

	    Speedometer.OuterRadius.Height := 120;

	    Debug.Writeline("Координаты центра спидометра: " + Speedometer.CenterPosition.X.ToString +

	        ":" + Speedometer.CenterPosition.Y.ToString);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет изменена область отрисовки спидометра.
 В окно консоли будет выведено сообщение с координатами центра спидометра.


См. также:


[IPPSpeedometer](IPPSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
