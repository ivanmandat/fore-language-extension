# IPPSpeedometerMarkerBase.BorderWidth

IPPSpeedometerMarkerBase.BorderWidth
-


# IPPSpeedometerMarkerBase.BorderWidth


## Синтаксис


BorderWidth: Double;


## Описание


Свойство BorderWidth определяет
 толщину границы маркера.


## Комментарии


Свойство BorderWidth актуально,
 если у свойства [IPPSpeedometerMarkerBase.EnableBorder](IPPSpeedometerMarkerBase.EnableBorder.htm)
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

	    Center: IPPSpeedometerMarkerBase;

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

	    // Получим параметры маркера спидометра

	    Center := Speedometer.Center;

	    // Настроим границу маркера

	    Center.EnableBorder := True;

	    Color := New GxColor.CreateRGB(255,255,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Center.BorderBrush := SolidBrush;

	    // Настроим толщину границы маркера

	    Center.BorderWidth := 10;

	    // Настроим стиль отрисовки границы маркера

	    Center.BorderStyle := GxDashStyle.Dash;

	    // Настроим смещение маркера

	    Center.Offset := 0.1;

	    // Настроим размер маркера

	    Center.Size := 20;

	    // Настроим всплывающую подсказку маркера

	    Center.ToolTip := "Центр";

	    // Настроим заливку фона маркера

	    Center.EnableBrush := True;

	    Color := New GxColor.CreateRGB(0,255,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Center.Background := SolidBrush;

	    // Настроим форму маркера

	    Center.MarkerType := PPSpeedometerMarkerType.Circle;

	    // Настроим расположение подписи маркера

	    Center.LabelPlacementStyle := PPLabelPlacementStyle.Center;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет произведена настройка параметров
 маркера спидометра.


См. также:


[IPPSpeedometer](../IPPSpeedometer/IPPSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
