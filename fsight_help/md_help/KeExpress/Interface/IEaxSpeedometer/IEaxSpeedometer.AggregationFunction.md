# IEaxSpeedometer.AggregationFunction

IEaxSpeedometer.AggregationFunction
-


# IEaxSpeedometer.AggregationFunction


## Синтаксис


AggregationFunction: [EaxAggregationFunction](../../Enums/EaxAggregationFunction.htm);


## Описание


Свойство AggregationFunction
 определяет метод агрегации, применяемый для расчета отображаемого на спидометре
 значения, если в отчете выделено несколько рядов с данными.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Enalyzer: IEaxAnalyzer;

	    Speedometer: IEaxSpeedometer;

	Begin

	    MB := MetabaseClass.Active;

	    Enalyzer := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Speedometer := Enalyzer.Speedometer;

	    Speedometer.Active := True;

	    Speedometer.Visible := True;

	    Speedometer.AutoScale := False;

	    Speedometer.MaxValue := 100;

	    Speedometer.MinValue := 0;

	    Speedometer.AggregationFunction := EaxAggregationFunction.Average;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будут настроены параметры для спидометра экспресс-отчета.


См. также:


[IEaxSpeedometer](IEaxSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
