# IDtMetabaseConsumer.Dataset

IDtMetabaseConsumer.Dataset
-


# IDtMetabaseConsumer.Dataset


## Синтаксис


Dataset: [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm);


## Описание


Свойство Dataset определяет
 реляционный объект репозитория, с которым связан данный приёмник данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL» и таблицы с идентификатором «TABLE».


Добавьте ссылки на системные сборки: Andy, Db, Drawing, Dt, Etl, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    MBConsumer: IDtMetabaseConsumer;

    Tab: IDatasetModel;

    Fields: IDatasetModelFields;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором «ETL»

    MObj := MB.ItemById("ETL").Edit;

    Tab := MB.ItemById("TABLE").Bind As IDatasetModel;

    Fields := Tab.Fields;

    EtlTask := MObj As IEtlTask;

    // Начало создания приёмника репозитория

    // Создание объекта «Приёмник репозитория»

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataMetabaseConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "MB_CONSUMER";

    EtlConsumer.Name := "Приёмник данных репозитория";

    EtlConsumer.Description := "Приёмник данных репозитория";

    // Настройка приёмника данных

    MBConsumer := EtlConsumer.Consumer As IDtMetabaseConsumer;

    MBConsumer.Dataset := Tab;

    MBConsumer.CatchAddRecordException := True;

    EtlConsumer.FillDefault;

    EtlConsumer.KeyFieldNames := Fields.Item(0).Id;

    // Сохраняем приёмник репозитория

    EtlConsumer.Save;

    // Конец создания приёмника репозитория

    // Начало создания визуального объекта

    WxConsumer := EtlTask.Workspace.CreateRectangle;

    WxETLConsumer := New WxETLObject.Create;

    WxETLConsumer.ETLObject := EtlConsumer;

    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

    WxConsumer.Style.PictureMarginTop := -10;

    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи ETL

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Приёмник
 репозитория». Данный приёмник будет связан с таблицей репозитория «TABLE».
 При экспорте данных будет производиться обновление записей по содержимому
 первого поля таблицы.


См. также:


[IDtMetabaseConsumer](IDtMetabaseConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
