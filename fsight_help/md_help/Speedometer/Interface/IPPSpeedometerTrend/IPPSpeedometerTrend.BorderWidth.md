# IPPSpeedometerTrend.BorderWidth

IPPSpeedometerTrend.BorderWidth
-


# IPPSpeedometerTrend.BorderWidth


## Синтаксис


BorderWidth: Double;


## Описание


Свойство BorderWidth определяет
 толщину границы тренда.


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC». Аналитическая панель должна содержать
 спидометр с расположенным на шкале данных трендом.


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

	    Trends: IPPSpeedometerTrends;

	    Trend: IPPSpeedometerTrend;

	    SolidBrush: IGxSolidBrush;

	    Color: IGxColor;

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

	    // Получим тренд

	    Trends := Scale.Trends;

	    Trend := Trends.Item(0);

	    // Настроим толщину границы тренда

	    Trend.BorderWidth := 5;

	    // Настроим цвет границы тренда

	    Color := New GxColor.CreateRGB(255,0,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Trend.BorderBrush := SolidBrush;

	    // Определим единицу измерения смещения - проценты

	    Trend.IsAbsoluteLabelOffset := False;

	    // Настроим смещение текстовой
	 метки тренда

	    Trend.LabelOffset := 0.2;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут настроены граница и смещение текстовой
 метки тренда.


См. также:


[IPPSpeedometerTrend](IPPSpeedometerTrend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
