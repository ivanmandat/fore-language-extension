# IPrxReportOptions.NoRecalcOnOpen

IPrxReportOptions.NoRecalcOnOpen
-


# IPrxReportOptions.NoRecalcOnOpen


## Синтаксис


NoRecalcOnOpen: Boolean;


## Описание


Свойство NoRecalcOnOpen определяет
 состояние опции «Не вычислять отчет при
 открытии».


## Комментарии


Свойство NoRecalcOnOpen будет
 игнорироваться, если было задано значение в свойстве [IMetabaseObjectParamValuesEx.StateOptions](KeSom.chm::/Interface/IMetabaseObjectParamValuesEx/IMetabaseObjectParamValuesEx.StateOptions.htm):


	- при установке StateOptions = 1,
	 будет считаться, что в параметрах регламентного отчета флажок «Не вычислять отчет при открытии»
	 был установлен, т.е. NoRecalcOnOpen = True;


	- при установке StateOptions = 2,
	 будет считаться, что в параметрах регламентного отчета флажок «Не вычислять отчет при открытии»
	 не был установлен, т.е. NoRecalcOnOpen = False.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT».


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MOBj: IMetabaseObject;

    Report: IPrxReport;

    Options: IPrxReportOptions;

Begin

    MB := MetabaseClass.Active;

    MOBj := MB.ItemById("REGULAR_REPORT").Edit;

    Report := MOBj As IPrxReport;

    Options := Report.Options;

    Options.NoRecalcOnOpen := True;

    MOBj.Save;

End Sub UserProc;


После выполнения примера для активного листа регламентного отчета будет
 установлен флажок «Не вычислять отчет
 при открытии», расположенный в окне «Параметры
 отчета» на вкладке «Настройки».


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
