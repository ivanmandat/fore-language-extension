# IMsCalculationHistory.CalculationLog

IMsCalculationHistory.CalculationLog
-


# IMsCalculationHistory.CalculationLog


## Синтаксис


		CalculationLog: [IMsCalculationLog](../IMsCalculationLog/IMsCalculationLog.htm);


## Описание


Свойство CalculationLog возвращает
 журнал расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 существовать задача с идентификатором PROBLEM_NON_LINEAR.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    ModelCont, Descript,DepObj: IMetabaseObjectDescriptor;

		    Obj: IMetabaseObject;

		    Problem: IMsProblem;

		    Calculation: IMsProblemCalculation;

		    CalcSettings: IMsProblemCalculationSettings;

		    Deps: IMetabaseObjectDescriptors;

		    i: Integer;

		    CalcHist: IMsCalculationHistory;

		    Log: IMsCalculationLog;

		    s: String;

		    LogRecord: IMsCalculationLogRecord;

		    Attributes:IMsMetaAttributeValueList;

		Begin

		    MB := MetabaseClass.Active;

		    ModelCont := MB.ItemById("CONT_MODEL");

		    Descript := MB.ItemByIdNamespace("PROBLEM_NON_LINEAR",ModelCont.Key);

		    Obj := Descript.Bind;

		    Problem := Obj As IMsProblem;

		    CalcSettings := Problem.CreateCalculationSettings;

		    Calculation := Problem.Calculate(CalcSettings);

		    Calculation.SaveHistoryMask:= MsCalculationHistorySet.Full;

		    Calculation.Run;

		    Deps := Obj.Children;

		    Debug.WriteLine("Всего произведено расчетов - " + Deps.Count.ToString);

		    Debug.WriteLine("Журнал расчета №" + Deps.Count.ToString);

		    i := Deps.Count - 1;

		    DepObj := Deps.Item(i);

		    CalcHist := DepObj.Bind As IMsCalculationHistory;

		    Log := CalcHist.CalculationLog;

		    Debug.WriteLine("Количество записей в журнале - " + Log.Count.ToString);

		    Debug.WriteLine("--------");

		    For i := 0 To Log.Count - 1 Do

		        LogRecord := Log.Item(i);

		        Debug.WriteLine("Запись " + (i + 1).ToString);

		        Select Case LogRecord.Type.ToString

		            Case "0": s := "Информация:";

		            Case "1": s := "Ошибка:";

		            Case "2": s := "Предупреждение:";

		            Case "3": s := "Нарушение ограничения:";

		        End Select;

		        Debug.WriteLine(s);

		        Debug.WriteLine(LogRecord.Text);

		        Debug.WriteLine("Дата события: " + LogRecord.RecordDate.ToString);

		        If LogRecord.Model <> Null Then

		            Debug.WriteLine("Модель '" + LogRecord.Model.Name + "'");

		            Debug.WriteLine("Календарная точка '" + LogRecord.CalendarPoint.ToString + "'");

		        End If;

		        Attributes := LogRecord.Attributes;

		        If Attributes <> Null Then

		            Debug.WriteLine("Количество атрибутов: '" + Attributes.Count.ToString);

		        End If;

		        Debug.WriteLine("Сценарий:'" + LogRecord.Scenario.ToString + "'");

		        Debug.WriteLine("--------");

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен журнал
 последнего расчёта задачи.


Пример журнала, выведенного в окно консоли:


Module execution started


Всего произведено расчетов - 3


Журнал расчета №3


Количество записей в журнале - 11


--------


Запись 1


Информация:


Загрузка данных переменной "w1 - lrx"


Дата события: 23.12.2008 15:47:41


Сценарий: '-1'


--------


Запись 2


Информация:


Загрузка данных переменной "w2- lrx"


Дата события: 23.12.2008 15:47:42


Сценарий: '-1'


--------


Запись 3


Информация:


Загрузка данных переменной "ИсхПер - lrx"


Дата события: 23.12.2008 15:47:42


Сценарий: '-1'


--------


Запись 4


Информация:


Расчет задачи по сценарию "Sc_Param",
 текущая дата 01.01.2009


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2009 00:00:00'


Сценарий: '3681'


--------


Запись 5


Информация:


Расчет задачи по сценарию "Sc_Param",
 текущая дата 01.01.2010


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2010 00:00:00'


Сценарий: '3681'


--------


Запись 6


Информация:


Расчет задачи по сценарию "Sc_Param",
 текущая дата 01.01.2011


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2011 00:00:00'


Сценарий: '3681'


--------


Запись 7


Информация:


Расчет задачи по сценарию "Sc_Param",
 текущая дата 01.01.2012


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2012 00:00:00'


Сценарий: '3681'


--------


Запись 8


Информация:


Выгрузка данных переменной "ИсхПер - lrx"


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2012 00:00:00'


Сценарий: '3681'


--------


Запись 9


Информация:


Выгрузка данных переменной "w1 - lrx"


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2012 00:00:00'


Сценарий: '3681'


--------


Запись 10


Информация:


Выгрузка данных переменной "w2- lrx"


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2012 00:00:00'


Сценарий: '3681'


--------


Запись 11


Информация:


Сохранение истории расчета


Дата события: 23.12.2008 15:47:42


Модель 'NON_LINEAR_1'


Календарная точка '01.01.2012 00:00:00'


Сценарий: '3681'


--------


Module execution finished


См. также:


[IMsCalculationHistory](IMsCalculationHistory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
