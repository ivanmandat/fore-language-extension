# IDtMetabaseProvider.Dataset

IDtMetabaseProvider.Dataset
-


# IDtMetabaseProvider.Dataset


## Синтаксис


Dataset: [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm);


## Описание


Свойство Dataset определяет
 реляционный объект репозитория, с которым связан данный источник данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и таблицы с идентификатором TABLE_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    MBProvider: IDtMetabaseProvider;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("Etl").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Источник репозитория"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataMetabaseProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "MB_Provider";

    EtlProvider.Name := "Источник данных репозитория";

    EtlProvider.Description := "Данные из таблицы Table_1";

    // Настройка источника данных

    MBProvider := EtlProvider.Provider As IDtMetabaseProvider;

    MBProvider.Dataset := MB.ItemById("Table_1").Bind As IDatasetModel;

    EtlProvider.FillDefault;

    // Сохраняем источник

    EtlProvider.Save;

    // Конец создания источника

    // Начало создания визуального объекта

    WxConsumer := EtlTask.Workspace.CreateRectangle;

    WxETLConsumer := New WxETLObject.Create;

    WxETLConsumer.ETLObject := EtlProvider;

    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

    WxConsumer.Style.PictureMarginTop := -10;

    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи Etl

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Источник
 репозитория». Данный источник будет связан с указанной таблицей репозитория.


См. также:


[IDtMetabaseProvider](IDtMetabaseProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
