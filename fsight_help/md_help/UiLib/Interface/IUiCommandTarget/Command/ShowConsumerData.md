# ShowConsumerData

ShowConsumerData
-


# Команда ShowConsumerData


## Назначение


Вызов диалога просмотра данных в приёмнике задачи ETL.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значение:


		 Тип значения
		 Описание


		 [IDtConsumer](KeDt.chm::/Interface/IDtConsumer/IDtConsumer.htm#inherited)
		 Приёмник, данные которого необходимо просмотреть.


## Особенности применения


Команда может применяться только для приёмника данных, который реализует
 интерфейс [IDtConsumer](KeDt.chm::/Interface/IDtConsumer/IDtConsumer.htm#inherited).
 При работе с задачей ETL параметры приёмника можно получить в свойстве
 [IEtlPlainDataConsumer.Consumer](KeEtl.chm::/Interface/IEtlPlainDataConsumer/IEtlPlainDataConsumer.Consumer.htm).
 Также приёмник может быть создан динамически с помощью [классов](KeDt.chm::/Class/KeDt_Class.htm)
 сборки Dt.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL». В задаче создан приёмник с идентификатором «METABASECONSUMER».
 Добавьте ссылки на системные сборки «Etl», «Metabase», «Ui».


			Sub UserProc;

Var

    MB: IMetabase;

    ETL: IEtlTask;

    CommandTarget: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    MB := MetabaseClass.Active;

    ETL := MB.ItemById("ETL").Bind As IEtlTask;

    CommandTarget := WinApplication.Instance.GetPluginTarget("Etl");

    Context := CommandTarget.CreateExecutionContext;

    Context.Data := (ETL.FindById("METABASECONSUMER") As IEtlPlainDataConsumer).Consumer;

    CommandTarget.Execute("ShowConsumerData", Context);

End Sub UserProc;


При выполнении примера на экран будут выведены данные, имеющиеся в указанном
 приёмнике задачи ETL.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)
 | [Приёмники
 задачи ETL](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/UiEtl_Outputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
