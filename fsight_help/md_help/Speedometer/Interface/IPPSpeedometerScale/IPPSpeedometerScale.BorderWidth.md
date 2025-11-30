# IPPSpeedometerScale.BorderWidth

IPPSpeedometerScale.BorderWidth
-


# IPPSpeedometerScale.BorderWidth


## Синтаксис


BorderWidth: Double;


## Описание


Свойство BorderWidth определяет
 толщину границы шкалы.


## Комментарии


Свойство BorderWidth актуально,
 если у свойства [IPPSpeedometerScale.EnableBorder](IPPSpeedometerScale.EnableBorder.htm)
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

	    // Получим шкалу

	    Scale := Scales.Item(0);

	    // Настроим границу шкалы

	    Scale.EnableBorder := True;

	    // Настроим цвет границы

	    Color := New GxColor.CreateRGB(255,0,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Scale.BorderBrush := SolidBrush;

	    // Настроим ширину границы

	    Scale.BorderWidth := 5;

	    // Настроим стиль отрисовки границы

	    Scale.BorderStyle := GxDashStyle.Dash;

	    // Настроим заливку фона

	    Scale.EnableBrush := True;

	    // Настроим цвет заливки

	    Color := New GxColor.CreateRGB(0,255,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Scale.Background := SolidBrush;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут настроены граница и фон шкалы.


См. также:


[IPPSpeedometerScale](IPPSpeedometerScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
