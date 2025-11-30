# IDtTextProvider.RangeFirstRow

IDtTextProvider.RangeFirstRow
-


# IDtTextProvider.RangeFirstRow


## Синтаксис


RangeFirstRow: Integer;


## Описание


Свойство RangeFirstRow определяет
 номер строки, начиная с которой будет производиться импорт данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С текстового файла Data.txt.


			Sub Main;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    TextProvider: IDtTextProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из текста"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataTextProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "Text_Provider";

    EtlProvider.Name := "Импорт из текста";

    EtlProvider.Description := "Импорт из текста";

    // Настройка источника данных

    TextProvider := EtlProvider.Provider As IDtTextProvider;

    TextProvider.File := "c:\Data.txt";

    TextProvider.RangeHasHeader := True;

    TextProvider.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

    TextProvider.DelimitedColumnDelimiter := #9; //Клавиша TAB

    TextProvider.RangeFirstRow := 5;

    TextProvider.FieldsFromFile;

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
 текста». Данный источник будет импортировать данные из указанного текстового
 файла. При импорте в качестве разделителя строк будет использоваться сочетание
 Возврат каретки+Перевод строки, в качестве разделителя полей - Знак табуляции.
 Из первой строки файла будут импортироваться наименования полей. Данные
 будут импортироваться, начиная с пятой строки файла.


См. также:


[IDtTextProvider](IDtTextProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
