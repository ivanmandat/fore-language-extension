# IDtAccessConsumer.File

IDtAccessConsumer.File
-


# IDtAccessConsumer.File


## Синтаксис


File: String;


## Описание


Свойство File определяет путь
 и наименование файла базы данных Access, в таблицы которой будет производиться
 экспорт данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С файла базы данных
 Access с наименованием db.mdb. В базе данных имеется таблица с наименованием
 Table_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    AccessConsumer: IDtAccessConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("Etl").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания приёмника

    // Создание объекта "Экспорт в Access"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataAccessConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "Access_Consumer";

    EtlConsumer.Name := "Экспорт в Access";

    EtlConsumer.Description := "Экспорт в Access";

    // Настройка приёмника данных

    AccessConsumer := EtlConsumer.Consumer As IDtAccessConsumer;

    AccessConsumer.File := "c:\db.mdb";

    AccessConsumer.Table := "Table_1";

    EtlConsumer.FillDefault;

    // Сохраняем приёмник

    EtlConsumer.Save;

    // Конец создания приёмника

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


После выполнения примера в задаче ETL будет создан приёмник «Экспорт
 в Access». Приёмник будет настроен на работу с указанной таблицей в базе
 данных Microsoft Access.


См. также:


[IDtAccessConsumer](IDtAccessConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
