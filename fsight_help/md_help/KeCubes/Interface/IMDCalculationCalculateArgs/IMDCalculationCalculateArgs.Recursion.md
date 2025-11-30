# IMDCalculationCalculateArgs.Recursion

IMDCalculationCalculateArgs.Recursion
-


# IMDCalculationCalculateArgs.Recursion


## Синтаксис


Recursion: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Recursion определяет,
 будет ли учитываться зависимость формул друг от друга при расчёте.


## Комментарии


Актуально, если свойство [RecursionEnabled](IMDCalculationCalculateArgs.RecursionEnabled.htm)
 возвращает значение TriState.OnOption.


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

	    If Args.RecursionEnabled = TriState.OnOption Then

	        Args.Recursion := TriState.OffOption;

	    End If;

	    MDInst.Calculate(Args);

	End Sub UserProc;


После выполнения примера будет осуществлен многомерный расчёт на сервере
 БД. Перед расчётом приёмник данных будет очищен. Если в многомерном расчёте
 при создании формул доступно создание рекурсивных формул, то при расчёте
 зависимость формул друг от друга будет отключена.


См. также:


[IMDCalculationCalculateArgs](IMDCalculationCalculateArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
