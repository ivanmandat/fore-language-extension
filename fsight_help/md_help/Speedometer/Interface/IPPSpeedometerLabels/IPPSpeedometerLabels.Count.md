# IPPSpeedometerLabels.Count

IPPSpeedometerLabels.Count
-


# IPPSpeedometerLabels.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает размер
 коллекции текстовых меток.


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

	    Labels: IPPSpeedometerLabels;

	    Color: IGxColor;

	    Font: IGxFont;

	    i: Integer;

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

	    // Получим коллекцию текстовых меток шкалы данных

	    Labels := Scale.Labels;

	    // Выведем элементы коллекции

	    For i := 0 To Labels.Count - 1 Do

	        Debug.WriteLine(Labels.Item(i).Text);

	    End For;

	    // Добавим текстовую метку

	    Labels.Add("Новая метка");

	    // Настроим размер шрифта текста, отображаемого в текстовых метках

	    Font := New GxFont.Create("Arial",12);

	    Labels.Font := Font;

	    // Настроим цвет текста

	    Color := New GxColor.CreateRGB(0,255,255);

	    Labels.FontColor := Color;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведен текст,
 расположенный в текстовых метках шкалы данных. Будет добавлена новая текстовая
 метка. Для всех текстовых меток будут произведены настройки шрифта и цвета
 текста.


См. также:


[IPPSpeedometerLabels](IPPSpeedometerLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
