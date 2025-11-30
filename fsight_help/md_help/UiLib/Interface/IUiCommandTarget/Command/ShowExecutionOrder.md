# ShowExecutionOrder

ShowExecutionOrder
-


# Команда ShowExecutionOrder


## Назначение


Вызов диалога настройки очерёдности выполнения операций в задаче ETL.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значение:


		 Тип значения
		 Описание


		 [IEtlTask](KeEtl.chm::/Interface/IEtlTask/IEtlTask.htm)
		 Задача ETL, для которой необходимо настроить очерёдность выполнения
		 операций.


## Особенности применения


Команда может применяться только для задач ETL. Указываемая задача должна
 быть открыта на редактирование. Результатом выполнения команды будет логическое
 значение, указывающее какая кнопка была нажата в диалоге: True,
 если была нажата кнопка «ОК» и False,
 если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL». В задаче реализованы какие-либо цепочки импорта/экспорта/преобразования
 данных. Добавьте ссылки на системные сборки «Etl», «Metabase», «Ui».


			Sub UserProc;

Var

    MB: IMetabase;

    ETL: IEtlTask;

    CommandTarget: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Result: Boolean;

Begin

    MB := MetabaseClass.Active;

    ETL := MB.ItemById("ETL").Edit As IEtlTask;

    CommandTarget := WinApplication.Instance.GetPluginTarget("Etl");

    Context := CommandTarget.CreateExecutionContext;

    Context.Data := ETL;

    Result := CommandTarget.Execute("ShowExecutionOrder", Context);

    If Result Then

        (Etl As IMetabaseObject).Save;

    End If;

End Sub UserProc;


При выполнении примера на экран будет выведен диалог настройки очерёдности
 выполнения операций в задаче ETL. Если в диалоге будут внесены какие-либо
 изменения и нажата кнопка «ОК», то все изменения будут сохранены.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
