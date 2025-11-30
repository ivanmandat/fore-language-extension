# IPPSpeedometerSectors.Add

IPPSpeedometerSectors.Add
-


# IPPSpeedometerSectors.Add


## Синтаксис


Add(Value: [IPPSpeedometerSector](../IPPSpeedometerSector/IPPSpeedometerSector.htm)):
 Integer;


## Параметры


Value. Добавляемый сектор.


## Описание


Метод Add добавляет сектор в
 коллекцию.


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

	    Sectors: IPPSpeedometerSectors;

	    Sector: IPPSpeedometerSector;

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

	    // Получим коллекцию секторов шкалы

	    Sectors := Scale.Sectors;

	    // Выведем размер коллекции секторов

	    Debug.WriteLine("Секторов до удаления: " + Sectors.Count.ToString);

	    // Очистим коллекцию секторов

	    Sectors.RemoveAll;

	    // Создадим новый сектор

	    Sector := New PPSpeedometerSector.Create;

	    // Установим значения начала и конца сектора

	    Sector.StartValue := 15000;

	    Sector.EndValue := 20000;

	    // Установим толщину начала и конца сектора

	    Sector.StartSize := 20;

	    Sector.EndSize := 60;

	    // Определим единицу измерения смещения - проценты

	    Scale.IsAbsoluteSectorOffset := False;

	    // Установим смещение сектора

	    Sector.Offset := 0.1;

	    // Настроим цвет заливки фона сектора

	    Sector.EnableBrush := True;

	    Color := New GxColor.CreateRGB(0,255,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Sector.Background := SolidBrush;

	    // Добавим новый сектор в коллекцию

	    Sectors.Add(Sector);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен размер
 коллекции секторов. Коллекция секторов будет очищена, после чего будет
 создан, настроен и добавлен в коллекцию новый сектор.


См. также:


[IPPSpeedometerSectors](IPPSpeedometerSectors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
