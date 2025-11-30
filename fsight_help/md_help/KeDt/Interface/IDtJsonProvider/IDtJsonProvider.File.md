# IDtJsonProvider.File

IDtJsonProvider.File
-


# IDtJsonProvider.File


## Синтаксис


		File: String;


## Описание


Свойство File определяет путь
 и наименование JSON-файла, из которого импортируются данные.


## Пример


Для выполнения примера предполагается наличие JSON-файла «D:\Work\Data.json».


[![](../../opened.gif)![](../../closed.gif)Пример структуры
 файла](javascript:TextPopup(this))


{
    "data": [
        {"k":1,"id": "Myriel", "group": 1},
        {"k":2,"id": "Napoleon", "group": 2},
        {"k":3,"id": "Mlle.Baptistine", "group": 1},
        {"k":4,"id": "Mme.Magloire", "group": 1},
        {"k":5,"id": "CountessdeLo", "group": 3},
        {"k":6,"id": "Geborand", "group": 3},
        {"k":7,"id": "Champtercier", "group": 2},
        {"k":8,"id": "Cravatte", "group": 1},
        {"k":9,"id": "Count", "group": 1},
        {"k":10,"id": "OldMan", "group": 2}
    ]
}

В репозитории создана задача ETL с идентификатором «ETL».


Добавьте
 ссылки на системные сборки: Andy, Drawing, Dt, Etl, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    EtlTask: IEtlTask;

		    EtlProvider: IEtlPlainDataProvider;

		    JSONProvider: IDtJsonProvider;

		    WxProvider: IWxRectangle;

		    WxETLProvider: IWxETLObject;

		Begin

		    MB := MetabaseClass.Active;

		    //Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

		    MObj := MB.ItemById("ETL").Edit;

		    EtlTask := MObj As IEtlTask;

		    //Начало создания источника

		    //Создание объекта "Импорт из JSON"

		    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataJsonProvider) As IEtlPlainDataProvider;

		    EtlProvider := EtlProvider.Edit;

		    EtlProvider.Id := "JSON_Provider";

		    EtlProvider.Name := "Импорт из JSON";

		    EtlProvider.Description := "Импорт из JSON";

		    //Настройка источника данных

		    JSONProvider := EtlProvider.Provider As IDtJsonProvider;

		    JSONProvider.File := "D:\Work\Data.json";

		    JSONProvider.Query := "$..data";

		    EtlProvider.FillDefault;

		    //Сохраняем источник

		    EtlProvider.Save;

		    //Конец создания источника

		    //Начало создания визуального объекта

		    WxProvider := EtlTask.Workspace.CreateRectangle;

		    WxETLProvider := New WxETLObject.Create;

		    WxETLProvider.ETLObject := EtlProvider;

		    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

		    WxProvider.Style.PictureMarginTop := -10;

		    WxProvider.PinPosition := New GxPointF.Create(50, 50);

		    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

		    //Конец создания визуального объекта

		    //Сохранение задачи ETL

		    MObj.Save;

		End Sub UserProc;


При выполнении примера в задаче ETL будет создан новый источник данных
 - Импорт из Json. Источник будет настроен на работу с указанным файлом.


См. также:


[IDtJsonProvider](IDtJsonProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
