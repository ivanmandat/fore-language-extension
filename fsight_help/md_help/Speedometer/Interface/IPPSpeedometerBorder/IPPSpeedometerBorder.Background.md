# IPPSpeedometerBorder.Background

IPPSpeedometerBorder.Background
-


# IPPSpeedometerBorder.Background


## Синтаксис


Background: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство Background определяет
 кисть для отрисовки границы.


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

	    Borders: IPPSpeedometerBorders;

	    Border: IPPSpeedometerBorder;

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

	    Speedometer.EnableBorder := True;

	    // Получим границу спидометра

	    Borders := Speedometer.Borders;

	    Border := Borders.Item(0);

	    // Настроим цвет границы

	    Color := New GxColor.CreateRGB(255,0,0);

	    SolidBrush := New GxSolidBrush.Create(Color);

	    Border.Background := SolidBrush;

	    // Настроим радиус скругления

	    Border.BorderRadius.Bottom := 90;

	    Border.BorderRadius.Top := 90;

	    Border.BorderRadius.Right := 90;

	    Border.BorderRadius.Left := 90;

	    // Настроим толщину всех границ

	    Border.Width := 10;

	    // Настроим толщину границ в отдельности

	    Border.Bottom := 15;

	    Border.Top := 15;

	    Border.Right := 20;

	    Border.Left := 20;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут настроены цвет, толщина и радиус
 скругления границы.


См. также:


[IPPSpeedometerBorder](IPPSpeedometerBorder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
