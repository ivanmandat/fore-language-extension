# ITabOptions.AutoPercentEntry

ITabOptions.AutoPercentEntry
-


# ITabOptions.AutoPercentEntry


## Синтаксис


AutoPercentEntry: Boolean;


## Описание


Свойство AutoPercentEntry определяет,
 включен ли флажок «Автоматический ввод
 процентов» в диалоге «[Параметры
 листа](UiReport.chm::/desktop/Tuning/UiReport_Tuning_sheets.htm)».


## Комментарии


Используйте данное свойство в рамках одной сессии, например, при работе
 с параметрами таблицы на форме. Значение свойства AutoPercentEntry
 не сохраняется при закрытии отчета.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REP».


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Rep: IPrxReport;

    Tab: IPrxTable;

    Opt: ITabOptions;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Reg_rep").Edit;

    Rep := MObj As IPrxReport;

    Tab := Rep.ActiveSheet As IPrxTable;

    Opt := Tab.TabSheet.Options;

    Opt.AutoPercentEntry := True;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет включена опция «Автоматический
 ввод процентов» активного листа регламентного отчета.


См. также:


[ITabOptions](ITabOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
