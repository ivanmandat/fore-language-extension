# IPPSpeedometer.BorderWidth

IPPSpeedometer.BorderWidth
-


# IPPSpeedometer.BorderWidth


## Синтаксис


BorderWidth: Double;


## Описание


Свойство BorderWidth определяет
 толщину границы области спидометра.


## Комментарии


Свойство BorderWidth актуально,
 если у свойства [IPPSpeedometer.EnableBorder](IPPSpeedometer.EnableBorder.htm)
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

	    // Настроим параметры границы области спидометра

	    Speedometer.EnableBorder := True;

	    Speedometer.BorderWidth := 10;

	    Speedometer.BorderStyle := GxDashStyle.Dot;

	    // Настроим цвет границы области спидометра

	    Color := New GxColor.CreateRGB(255,0,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Speedometer.BorderBrush := SolidBrush;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет добавлена граница области спидометра.
 Будут настроены ширина, стиль и цвет линии границы.


См. также:


[IPPSpeedometer](IPPSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
