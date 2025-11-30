# IDtAccessProvider.File

IDtAccessProvider.File
-


# IDtAccessProvider.File


## Синтаксис


File: String;


## Описание


Свойство File определяет наименование
 файла базы данных Access, из таблиц которой будет производиться импорт
 данных.


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

    EtlProvider: IEtlPlainDataProvider;

    AccessProvider: IDtAccessProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из Access"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataAccessProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "Access_Provider";

    EtlProvider.Name := "Импорт из Access";

    EtlProvider.Description := "Импорт из Access";

    // Настройка источника данных

    AccessProvider := EtlProvider.Provider As IDtAccessProvider;

    AccessProvider.File := "c:\db.mdb";

    AccessProvider.Query := "Select * from Table_1";

    EtlProvider.FillDefault;

    // Сохраняем источник

    EtlProvider.Save;

    // Конец создания источника

    // Начало создания визуального объекта

    WxProvider := EtlTask.Workspace.CreateRectangle;

    WxETLProvider := New WxETLObject.Create;

    WxETLProvider.ETLObject := EtlProvider;

    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

    WxProvider.Style.PictureMarginTop := -10;

    WxProvider.PinPosition := New GxPointF.Create(50, 50);

    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи Etl

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан источник «Импорт
 из Access». Источник будет настроен на работу с указанной таблицей в базе
 данных Microsoft Access.


См. также:


[IDtAccessProvider](IDtAccessProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
