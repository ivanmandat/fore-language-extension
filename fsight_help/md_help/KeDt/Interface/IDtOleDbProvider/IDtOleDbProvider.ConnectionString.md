# IDtOleDbProvider.ConnectionString

IDtOleDbProvider.ConnectionString
-


# IDtOleDbProvider.ConnectionString


## Синтаксис


ConnectionString: String;


## Описание


Свойство ConnectionString определяет
 строку соединения, используемую для подключения к источнику данных.


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

    OleDbProvider: IDtOleDbProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из OleDb"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataOleDbProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "OleDb_Provider";

    EtlProvider.Name := "Импорт из OleDb";

    EtlProvider.Description := "Импорт из OleDb";

    // Настройка источника данных

    OleDbProvider := EtlProvider.Provider As IDtOleDbProvider;

    OleDbProvider.ConnectionString := "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\db.mdb;Persist Security Info=False";

    OleDbProvider.Query := "Select * from Table_1";

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


После выполнения примера в задаче ETL будет создан объект «Импорт из
 OleDb». Данный источник будет извлекать данные из указанной таблицы в
 базе данных Access.


См. также:


[IDtOleDbProvider](IDtOleDbProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
