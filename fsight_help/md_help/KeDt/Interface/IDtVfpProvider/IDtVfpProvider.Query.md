# IDtVfpProvider.Query

IDtVfpProvider.Query
-


# IDtVfpProvider.Query


## Синтаксис


Query: String;


## Описание


Свойство Query определяет запрос
 к таблицам Visual Foxpro.


## Комментарии


С помощью данного запроса будут отбираться импортируемые данные.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С таблицы Visual Foxpro
 - Data.dbf.


	Sub Main;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    VfpProvider: IDtVfpProvider;

	    WxProvider: IWxRectangle;

	    WxETLProvider: IWxETLObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

	    MObj := MB.ItemById("ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    // Начало создания источника

	    // Создание объекта "Импорт из Visual Foxpro"

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataVfpProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "Vfp_Provider";

	    EtlProvider.Name := "Импорт из Visual Foxpro";

	    EtlProvider.Description := "Импорт из Visual Foxpro";

	    // Настройка источника данных

	    VfpProvider := EtlProvider.Provider As IDtVfpProvider;

	    VfpProvider.Path := "c:\";

	    VfpProvider.Query := "Select * From Data";

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

	End Sub Main;


После выполнения примера в задаче ETL будет создан объект «Импорт из
 Visual Foxpro». Данный источник будет импортировать данные из таблицы
 Foxpro - Data.


См. также:


[IDtVfpProvider](IDtVfpProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
