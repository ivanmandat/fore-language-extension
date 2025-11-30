# IPrxReportOptions.IgnoreDirtyOnClose

IPrxReportOptions.IgnoreDirtyOnClose
-


# IPrxReportOptions.IgnoreDirtyOnClose


## Синтаксис


IgnoreDirtyOnClose: Boolean;


## Описание


Свойство IgnoreDirtyOnClose
 определяет состояние опции «Не спрашивать подтверждения при закрытии измененного
 экземпляра отчета».


## Пример


Для выполнения примера необходимо наличие в репозитории регламентного
 отчета с идентификатором «Report». Подключите системные сборки Metabase
 и Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MOBj: IMetabaseObject;

    Report: IPrxReport;

    Options: IPrxReportOptions;

Begin

    MB := MetabaseClass.Active;

    MOBj := MB.ItemById("REPORT").Edit;

    Report := MOBj As IPrxReport;

    Options := Report.Options;

    Options.IgnoreDirtyOnClose := True;

    MOBj.Save;

End Sub UserProc;


После выполнения примера для активного листа регламентного отчета с
 идентификатором «Report» в окне «Параметры отчета», во вкладке «Настройки»,
 будет установлен флаг для опции «Не спрашивать подтверждения при закрытии
 измененного экземпляра отчета».


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
