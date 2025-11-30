# IMDCalculationCalculateArgs.AutoSaveSQL

IMDCalculationCalculateArgs.AutoSaveSQL
-


# IMDCalculationCalculateArgs.AutoSaveSQL


## Синтаксис


AutoSaveSQL: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AutoSaveSQL определяет,
 будет ли производиться автоматическое сохранение выполняемого SQL-запроса
 в файл.


## Комментарии


Если свойству установлено значение TriState.OnOption, то SQL-запрос
 автоматически сохраняется в файл "c:\p5sq0.txt". Если данный
 файл уже существует, то он будет перезаписан.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1.


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

    Args.UpdateType := MDCalculateArgsUpdateType.None;

    Args.AutoSaveSQL := TriState.OnOption;

    MDInst.Calculate(Args);

End Sub UserProc;


После выполнения примера будет осуществлён многомерный расчёт на сервере
 БД. Перед расчётом приёмник данных будет очищен. Текст выполняемого SQL-запроса
 будет сохранён в файл.


См. также:


[IMDCalculationCalculateArgs](IMDCalculationCalculateArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
