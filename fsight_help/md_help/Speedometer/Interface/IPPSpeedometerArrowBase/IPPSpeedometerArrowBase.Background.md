# IPPSpeedometerArrowBase.Background

IPPSpeedometerArrowBase.Background
-


# IPPSpeedometerArrowBase.Background


## Синтаксис


Background: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство Background определяет
 кисть для заливки фона стрелки.


## Комментарии


Свойство Background актуально,
 если у свойства [IPPSpeedometerArrowBase.EnableBrush](IPPSpeedometerArrowBase.EnableBrush.htm)
 установлено значение True.


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

	    Arrows: IPPSpeedometerArrows;

	    Arrow: IPPSpeedometerArrowBase;

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

	    // Получим стрелку шкалы

	    Arrows := Scale.Arrows;

	    Arrow := Arrows.Item(0);

	    // Выведем идентификатор стрелки и наименование

	    Debug.WriteLine("Идентификатор стрелки: " + Arrow.ID);

	    // Выведем значение, на которое указывает стрелка

	    Debug.WriteLine("Значение: " + Arrow.Value.ToString);

	    // Выведем наименование шкалы, в которой расположена стрелка

	    Debug.WriteLine("Наименование шкалы: " + Arrow.Scale.Name);

	    // Изменим длину стрелки

	    Arrow.Radius := 0.9;

	    // Изменим длину хвоста стрелки

	    Arrow.Tail := 0.2;

	    // Изменим толщину стрелки

	    Arrow.Size := 3;

	    // Изменим форму стрелки

	    Arrow.Type := PPSpeedometerArrowType.Triangle;

	    // Настроим заливку фона стрелки

	    Arrow.EnableBrush := True;

	    Color := New GxColor.CreateRGB(0,128,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Arrow.Background := SolidBrush;

	    // Настроим цвет границ стрелки

	    Color := New GxColor.CreateRGB(0,0,255);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Arrow.BorderBrush := SolidBrush;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет произведена настройка параметров
 стрелки шкалы данных спидометра.


См. также:


[IPPSpeedometerArrowBase](IPPSpeedometerArrowBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
