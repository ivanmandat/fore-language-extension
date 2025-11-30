# IPPTimeLine.DelayDuration

IPPTimeLine.DelayDuration
-


# IPPTimeLine.DelayDuration


## Синтаксис


DelayDuration: Double;


## Описание


Свойство DelayDuration определяет
 длительность задержки анимации.


## Комментарии


Для определения длительности шага анимации используйте свойство [IPPTimeLine.StepDuration](IPPTimeLine.StepDuration.htm).


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

	    Timeline: IPPTimeLine;

	    Arr: Array[3] Of String;

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

	    // Получим временную шкалу спидометра

	    Timeline := Speedometer.TimeLine;

	    // Если временная шкала скрыта, отобразим

	    If Timeline.Visible = False Then

	        Timeline.Visible := True;

	    End If;

	    Debug.WriteLine("Текущий шаг: " + Timeline.CurrentIndex.ToString);

	    // Определим длительность задержки анимации

	    Timeline.DelayDuration := 1.5;

	    // Определим длительность шага анимации

	    Timeline.StepDuration := 2;

	    // Временная шкала будет пересекать спидометр

	    Timeline.IsOverlap := True;

	    // После завершения анимации текущим шагом временной шкалы останется последний шаг

	    Timeline.ReturnToInitialState := False;

	    // Привяжем шкалу к правому краю

	    Timeline.HorizontalAlignment := PPSpeedometerHorizontalAlignment.Right;

	    // Расположим шкалу над спидометром

	    Timeline.VerticalAlignment := PPSpeedometerVerticalAlignment.Top;

	    // Определим наименование шагов временной шкалы

	    Arr[0] := "Шаг 1";

	    Arr[1] := "Шаг 2";

	    Arr[2] := "Шаг 3";

	    Timeline.StepsNames := Arr;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет произведена настройка параметров
 временной шкалы.


См. также:


[IPPTimeLine](IPPTimeLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
