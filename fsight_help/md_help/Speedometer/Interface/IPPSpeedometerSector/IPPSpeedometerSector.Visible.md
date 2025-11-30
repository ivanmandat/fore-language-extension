# IPPSpeedometerSector.Visible

IPPSpeedometerSector.Visible
-


# IPPSpeedometerSector.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 видимость сектора.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Сектор отображается;


	- False. Сектор не отображается.


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC». Аналитическая панель должна содержать
 спидометр с расположенным на шкале данных сектором.


Добавьте ссылки на системные сборки: Adhoc, Express, Metabase и Speedometer.


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

	    Sectors: IPPSpeedometerSectors;

	    Sector: IPPSpeedometerSector;

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

	    // Получим сектор шкалы

	    Sectors := Scale.Sectors;

	    Sector := Sectors.Item(0);

	    // Скроем сектор

	    Sector.Visible := False;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера сектор будет скрыт.


См. также:


[IPPSpeedometerSector](IPPSpeedometerSector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
