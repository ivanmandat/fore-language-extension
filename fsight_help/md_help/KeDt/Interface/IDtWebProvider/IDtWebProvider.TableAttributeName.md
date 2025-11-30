# IDtWebProvider.TableAttributeName

IDtWebProvider.TableAttributeName
-


# IDtWebProvider.TableAttributeName


## Синтаксис


TableAttributeName: String;


## Описание


Свойство TableAttributeName
 определяет наименование атрибута таблицы, данные которой необходимо импортировать.


## Комментарии


Данный атрибут будет искаться в теге <Table>. Используется вместе
 со свойством [TableAttributeValue](IDtWebProvider.TableAttributeValue.htm).
 Свойство актуально, если свойству [TableIdentificationType](IDtWebProvider.TableIdentificationType.htm)
 установлено значение DtWebTableIdentificationType.ByAttribute.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С HTML файла Data.html.
 В коде таблицы в теге <Table> присутствует атрибут NameTable.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    WebProvider: IDtWebProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из Web"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataWebProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "Web_Provider";

    EtlProvider.Name := "Импорт из Web";

    EtlProvider.Description := "Импорт из Web";

    // Настройка источника данных

    WebProvider := EtlProvider.Provider As IDtWebProvider;

    WebProvider.HasHeader := True;

    WebProvider.TableIdentificationType := DtWebTableIdentificationType.ByAttribute;

    WebProvider.TableAttributeName := "NameTable";

    WebProvider.TableAttributeValue := "Two_Table";

    WebProvider.Url := "c:\Data.html";

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
 Web». Данный источник будет импортировать данные из HTML файла. Импортируемая
 таблица будет искаться по значениям атрибута NameTable. Из первой строки
 таблицы будут импортироваться наименования полей.


См. также:


[IDtWebProvider](IDtWebProvider.htm) | [IDtWebProvider.TableAttributeValue](IDtWebProvider.TableAttributeValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
