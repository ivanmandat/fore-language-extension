# ShowProviderData

ShowProviderData
-


# Команда ShowProviderData


## Назначение


Вызов диалога просмотра данных в источнике задачи ETL.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значение:


		 Тип значения
		 Описание


		 [IDtProvider](KeDt.chm::/Interface/IDtProvider/IDtProvider.htm#inherited)
		 Источник, данные которого необходимо просмотреть.


## Особенности применения


Команда может применяться только для источника данных, который реализует
 интерфейс [IDtProvider](KeDt.chm::/Interface/IDtProvider/IDtProvider.htm#inherited).
 При работе с задачей ETL параметры источника можно получить в свойстве
 [IEtlPlainDataProvider.Provider](KeEtl.chm::/Interface/IEtlPlainDataProvider/IEtlPlainDataProvider.Provider.htm).
 Также источник может быть создан динамически с помощью [классов](KeDt.chm::/Class/KeDt_Class.htm)
 сборки Dt.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL». В задаче создан источник с идентификатором «METABASEPROVIDER».
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

    Context.Data := (ETL.FindById("METABASEPROVIDER") As IEtlPlainDataProvider).Provider;

    CommandTarget.Execute("ShowProviderData", Context);

End Sub UserProc;


При выполнении примера на экран будут выведены данные, имеющиеся в указанном
 источнике задачи ETL.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)
 | [Источники
 задачи ETL](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
