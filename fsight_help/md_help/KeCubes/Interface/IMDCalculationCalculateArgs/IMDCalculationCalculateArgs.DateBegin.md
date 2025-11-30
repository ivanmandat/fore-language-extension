# IMDCalculationCalculateArgs.DateBegin

IMDCalculationCalculateArgs.DateBegin
-


# IMDCalculationCalculateArgs.DateBegin


## Синтаксис


DateBegin: DateTime;


## Описание


Свойство DateBegin определяет
 дату начала периода расчёта.


## Комментарии


Для расчёта за определенный период времени срез должен быть построен
 на фиксированном календарном измерении в источниках данных многомерного
 расчёта на сервере БД.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчёта на сервере БД с идентификатором «MDCalc_1». Календарные измерения
 источников данных зафиксированы.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDInst: IMDCalculationInstance;

	    Args: IMDCalculationCalculateArgs;

	Begin

	    MB := MetabaseClass.Active;

	    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

	    Args := MDInst.CreateCalculateArgs;

	    Args.CleanType := MDCalculateArgsCleanType.All;

	    Args.DateBegin := DateTime.ComposeDay(2005, 01, 01);

	    Args.DateEnd := DateTime.ComposeDay(2006, 01, 01);

	    MDInst.Calculate(Args);

	End Sub UserProc;


После выполнения примера будет осуществлен многомерный расчёт на сервере
 БД. Перед расчётом приёмник данных будет очищен. Расчёт осуществляется
 за указанный период.


См. также:


[IMDCalculationCalculateArgs](IMDCalculationCalculateArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
