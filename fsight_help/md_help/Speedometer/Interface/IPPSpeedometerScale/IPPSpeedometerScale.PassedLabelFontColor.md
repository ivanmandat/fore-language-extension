# IPPSpeedometerScale.PassedLabelFontColor

IPPSpeedometerScale.PassedLabelFontColor
-


# IPPSpeedometerScale.PassedLabelFontColor


## Синтаксис


PassedLabelFontColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство PassedLabelFontColor
 определяет цвет текста, расположенного в пройденных указателем подписях
 данных шкалы.


## Комментарии


Для определения параметров шрифта текста, расположенного в пройденных
 указателем подписях данных шкалы, используйте свойство [IPPSpeedometerScale.PassedLabelFont](IPPSpeedometerScale.PassedLabelFont.htm).


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

	    Font: IGxFont;

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

	    // Настроим размер шрифта текста, отображаемого в пройденных подписях
	 данных

	    Font := New GxFont.Create("Arial",9);

	    Scale.PassedLabelFont := Font;

	    // Настроим цвет текста, отображаемого в пройденных подписях
	 данных

	    Color := New GxColor.CreateRGB(255,0,0);

	    Scale.PassedLabelFontColor := Color;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет изменен размер и цвет текста,
 расположенного в пройденных указателем подписях данных шкалы.


См. также:


[IPPSpeedometerScale](IPPSpeedometerScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
