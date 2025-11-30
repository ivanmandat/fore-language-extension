# IDtOleDbConsumer.ConnectionString

IDtOleDbConsumer.ConnectionString
-


# IDtOleDbConsumer.ConnectionString


## Синтаксис


ConnectionString: String;


## Описание


Свойство ConnectionString определяет
 строку соединения, используемую для подключения к приёмнику данных.


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

    OleDbConsumer: IDtOleDbConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания приёмника

    // Создание объекта "Экспорт в OleDb"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataOleDbConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "OleDb_Consumer";

    EtlConsumer.Name := "Экспорт в OleDb";

    EtlConsumer.Description := "Экспорт в OleDb";

    // Настройка приёмника данных

    OleDbConsumer := EtlConsumer.Consumer As IDtOleDbConsumer;

    OleDbConsumer.ConnectionString := "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\db.mdb;Persist Security Info=False";

    OleDbConsumer.Table := "Table_1";

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


После выполнения примера в задаче ETL будет создан объект «Экспорт через
 OleDb». Данный приёмник будет экспортировать данные в указанную таблицу
 в базе данных.


См. также:


[IDtOleDbConsumer](IDtOleDbConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
