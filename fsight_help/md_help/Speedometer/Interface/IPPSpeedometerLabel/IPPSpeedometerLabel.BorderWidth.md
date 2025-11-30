# IPPSpeedometerLabel.BorderWidth

IPPSpeedometerLabel.BorderWidth
-


# IPPSpeedometerLabel.BorderWidth


## Синтаксис


BorderWidth: Double;


## Описание


Свойство BorderWidth определяет
 толщину границы текстовой метки.


## Комментарии


Свойство BorderWidth актуально,
 если у свойства [IPPSpeedometerLabel.EnableBorder](IPPSpeedometerLabel.EnableBorder.htm)
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

	    Label: IPPSpeedometerLabel;

	    SolidBrush: IGxSolidBrush;

	    Color: IGxColor;

	    Font: IGxFont;

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

	    // Получим центральную текстовую метку спидометра

	    Label := Speedometer.CenterLabel;

	    // Настроим размер текстовой метки вручную

	    Label.AutoSize := False;

	    // Настроим ширину текстовой метки

	    Label.Width := 50;

	    // Настроим высоту текстовой метки

	    Label.Height := 20;

	    // Настроим заливку фона текстовой метки

	    Label.EnableBrush := True;

	    Color := New GxColor.CreateRGB(255,0,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Label.Background := SolidBrush;

	    // Настроим кисть для отрисовки границы текстовой метки

	    Label.EnableBorder := True;

	    Color := New GxColor.CreateRGB(0,0,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Label.BorderBrush := SolidBrush;

	    // Настроим стиль границы текстовой метки

	    Label.BorderStyle := GxDashStyle.Dash;

	    // Настроим ширину границы текстовой метки

	    Label.BorderWidth := 3;

	    // Настроим отступ текстовой метки

	    Label.Offset := 0.1;

	    // Настроим размер шрифта текста, отображаемого в текстовой метке

	    Font := New GxFont.Create("Arial",12);

	    Label.Font := Font;

	    // Настроим цвет текста

	    Color := New GxColor.CreateRGB(0,255,255);

	    Label.FontColor := Color;

	    // Настроим выравнивание текста

	    Label.TextAlign := PPSpeedometerHorizontalAlignment.Left;

	    // Получим текст, отображаемый в текстовой метке

	    Debug.WriteLine("Текст метки: " + Label.Text);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет произведена настройка параметров
 центральной текстовой метки спидометра. В окно консоли будет выведен текст,
 отображаемый в текстовой метке.


См. также:


[IPPSpeedometerLabel](IPPSpeedometerLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
