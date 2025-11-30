# IDtJsonConsumer.File

IDtJsonConsumer.File
-


# IDtJsonConsumer.File


## Синтаксис


		File: String;


## Описание


Свойство File определяет путь
 и наименование JSON-файла, в который импортируются данные.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL».


Добавьте
 ссылки на системные сборки: Andy, Drawing, Dt, Etl, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    EtlTask: IEtlTask;

		    EtlConsumer: IEtlPlainDataConsumer;

		    JSONConsumer: IDtJsonConsumer;

		    WxConsumer: IWxRectangle;

		    WxETLConsumer: IWxETLObject;

		Begin

		    MB := MetabaseClass.Active;

		    //Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

		    MObj := MB.ItemById("ETL").Edit;

		    EtlTask := MObj As IEtlTask;

		    //Начало создания приёмника

		    //Создание объекта "Экспорт в JSON"

		    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataJsonConsumer) As IEtlPlainDataConsumer;

		    EtlConsumer := EtlConsumer.Edit;

		    EtlConsumer.Id := "JSON_Consumer";

		    EtlConsumer.Name := "Экспорт в JSON";

		    EtlConsumer.Description := "Экспорт в JSON";

		    //Настройка приёмника данных

		    JSONConsumer := EtlConsumer.Consumer As IDtJsonConsumer;

		    JSONConsumer.File := "D:\Work\Output.json";

		    JSONConsumer.RootNodeName := "Data";

		    EtlConsumer.FillDefault;

		    //Сохраняем приёмник

		    EtlConsumer.Save;

		    //Конец создания приёмника

		    //Начало создания визуального объекта

		    WxConsumer := EtlTask.Workspace.CreateRectangle;

		    WxETLConsumer := New WxETLObject.Create;

		    WxETLConsumer.ETLObject := EtlConsumer;

		    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

		    WxConsumer.Style.PictureMarginTop := -10;

		    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

		    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

		    //Конец создания визуального объекта

		    //Сохранение задачи Etl

		    MObj.Save;

		End Sub UserProc;


При выполнении примера в задаче ETL будет создан новый приёмник данных
 - Экспорт в Json. Приёмник будет настроен на экспорт данных в файл «D:\Work\Output.json».


См. также:


[IDtJsonConsumer](IDtJsonConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
