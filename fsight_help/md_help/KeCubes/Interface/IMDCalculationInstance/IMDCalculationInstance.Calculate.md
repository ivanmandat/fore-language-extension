# IMDCalculationInstance.Calculate

IMDCalculationInstance.Calculate
-


# IMDCalculationInstance.Calculate


## Синтаксис


Calculate(Args: [IMDCalculationCalculateArgs](../IMDCalculationCalculateArgs/IMDCalculationCalculateArgs.htm));


## Параметры


Args. Параметры многомерного
 расчёта на сервере БД.


## Описание


Метод Calculate осуществляет
 многомерный расчёт на сервере БД с учетом установленных параметров расчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчёта на сервере БД с идентификатором MDCalc_1.


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

    MDInst.Calculate(Args);

End Sub UserProc;


После выполнения примера будет осуществлен многомерный расчёт на сервере
 БД. Перед расчётом приёмник данных будет очищен.


См. также:


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
