# IPPSpeedometerScale.MajorTick

IPPSpeedometerScale.MajorTick
-


# IPPSpeedometerScale.MajorTick


## Синтаксис


MajorTick: [IPPSpeedometerMarkerBase](../IPPSpeedometerMarkerBase/IPPSpeedometerMarkerBase.htm);


## Описание


Свойство MajorTick определяет
 параметры отрисовки основных маркеров шкалы.


## Комментарии


Для определения параметров отрисовки промежуточных маркеров шкалы используйте
 свойство [IPPSpeedometerScale.MinorTick](IPPSpeedometerScale.MinorTick.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC». Аналитическая панель должна содержать
 спидометр.


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

	    Marker: IPPSpeedometerMarkerBase;

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

	    // Изменим размер основных маркеров

	    Marker := Scale.MajorTick;

	    Marker.Size := 30;

	    // Изменим размер промежуточных маркеров

	    Marker := Scale.MinorTick;

	    Marker.Size := 15;

	    // Изменим размер пройденных указателем
	 основных маркеров

	    Marker := Scale.PassedMajorTick;

	    Marker.Size := 15;

	    // Изменим размер пройденных указателем
	 промежуточных маркеров

	    Marker := Scale.PassedMinorTick;

	    Marker.Size := 10;

	    // Скроем подписи

	    Scale.DisplayLabels := False;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут изменены размеры основных и промежуточных
 маркеров шкалы. Подписи данных шкалы не будут отображаться.


См. также:


[IPPSpeedometerScale](IPPSpeedometerScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
