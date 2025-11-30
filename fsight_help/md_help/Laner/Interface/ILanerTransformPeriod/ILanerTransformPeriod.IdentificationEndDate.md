# ILanerTransformPeriod.IdentificationEndDate

ILanerTransformPeriod.IdentificationEndDate
-


# ILanerTransformPeriod.IdentificationEndDate


## Синтаксис


IdentificationEndDate: DateTime;


## Описание


Свойство IdentificationEndDate
 определяет дату окончания периода идентификации.


## Комментарии


Значение свойства влияет на дату начала прогноза: дата начала прогноза
 вычисляется как дата окончания периода идентификации плюс один период.


Недопустимо одновременное использование свойств IdentificationEndDate
 и [ILanerTransformPeriod.ForecastStartDate](ILanerTransformPeriod.ForecastStartDate.htm).


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 содержит значение [LnTransformPeriodSet.IdentificationEndDate](../../Enums/LnTransformPeriodSet.htm) или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm).
 Поэтому значение [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до изменения значения IdentificationEndDate.


Если значение свойства не задано, то дату окончания периода идентификации
 определяет свойство [ILanerTransformPeriod.IdentificationEndDateParamId](ILanerTransformPeriod.IdentificationEndDateParamId.htm).


Если заданы свойства IdentificationEndDate
 и [ILanerTransformPeriod.IdentificationEndDateParamId](ILanerTransformPeriod.IdentificationEndDateParamId.htm),
 то дату окончания периода идентификации определяет то свойство, которое
 задано последним.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов, содержащая вычисляемый ряд. Перед выполнением примера выделите
 один вычисляемый ряд в компоненте в LanerBox1.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    pLaner: ILaner;

	    pSeries: ILanerCalculateSerie;

	    TransPeriod: ILanerTransformPeriod;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    pLaner := Analyzer.Laner;

	    pLaner.BeginUpdate;

	    pSeries := LanerBox1.SelectedSeries(0) As ILanerCalculateSerie;

	    TransPeriod := pSeries.TransformPeriod;

	    TransPeriod.AutoPeriod := TransformModelAutoPeriodOptions.None;

	    TransPeriod.PeriodSet := LnTransformPeriodSet.All;

	    TransPeriod.StartDate := DateTime.Parse("01.01.2000");

	    TransPeriod.IdentificationEndDate := DateTime.Parse("31.12.2010");

	    TransPeriod.EndDate := DateTime.Parse("01.01.2020");

	    pLaner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера для выделенного вычисляемого ряда будут установлены
 следующие параметры:


	- начало периода идентификации: 01.01.2000;


	- окончание периода идентификации: 31.12.2010;


	- окончание периода прогнозирования: 01.01.2020.


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
