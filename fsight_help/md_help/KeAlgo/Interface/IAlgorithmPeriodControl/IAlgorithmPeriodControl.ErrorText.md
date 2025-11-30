# IAlgorithmPeriodControl.ErrorText

IAlgorithmPeriodControl.ErrorText
-


# IAlgorithmPeriodControl.ErrorText


## Синтаксис


ErrorText: String;


## Описание


Метод ErrorText осуществляет
 проверку настроек и возвращает сообщение об ошибке.


## Комментарии


Ошибки могут возникнуть при [управлении
 периодом расчёта](CalculationAlgorithm.chm::/Desktop/Work/Calculation_period_management.htm) в случаях:


	- если не найден используемый [параметр
	 алгоритма расчёта](CalculationAlgorithm.chm::/Desktop/Work/Parameters_of_the_calculation_algorithm.htm);


	- если не найден используемый атрибут справочника, который привязан
	 к параметру.


Возможные сообщения об ошибках: «Не найден параметр <имя>,
 управляющий датой <дата>
 расчёта», «Не найден атрибут <имя>
 в справочнике <имя> (<идентификатор>) параметра <имя> (<идентификатор>),
 управляющий датой <дата>
 расчёта».


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта настроено управление
 периодом расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    Settings: IAlgorithmSettings;

	    DataStart, DataEnd: IAlgorithmPeriodControl;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим настройки периода расчёта алгоритма

	    Settings := CalcAlgo.Settings;

	    DataStart := Settings.PeriodControlStart;

	    DataEnd := Settings.PeriodControlEnd;

	    // Проверим использование настроенной даты окончания расчёта

	    If DataStart.IsEnabled Then

	        s := DataStart.ErrorText;

	        If s <> "" Then

	            Debug.WriteLine("Error: " + s);

	        End If;

	    End If;

	    If DataEnd.IsEnabled Then

	        s := DataEnd.ErrorText;

	        If s <> "" Then

	            Debug.WriteLine("Error: " + s);

	        End If;

	    End If;

	End Sub UserProc;


В результате выполнения примера будет осуществлена проверка настроек
 управления датами начала и окончания расчёта. Если имеются какие-либо
 ошибки, то текст ошибок будет выведен в консоль среды разработки.


См. также:


[IAlgorithmPeriodControl](IAlgorithmPeriodControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
