# IDtTextProviderField.FixedEndPosition

IDtTextProviderField.FixedEndPosition
-


# IDtTextProviderField.FixedEndPosition


## Синтаксис


FixedEndPosition: Integer;


## Описание


Свойство FixedEndPosition определяет
 конечную позицию в файле, ограничивающую данные для текущего поля.


## Комментарии


Актуально, если свойству [FormatType](../IDtTextProvider/IDtTextProvider.FormatType.htm)
 установлено значение DtTextFormatType.Fixed.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С текстового файла Data.txt.
 Данные в файле расположены в фиксированных позициях.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    TextProvider: IDtTextProvider;

    Fields: IDtFieldDefinitions;

    Field: IDtTextProviderField;

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

    TextProvider.FormatType := DtTextFormatType.Fixed;

    TextProvider.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

    TextProvider.RangeHasHeader := True;

    // Настройка полей фиксированной длины

    Fields := TextProvider.Fields;

    Field := Fields.Add As IDtTextProviderField;

    Field.Name := "Field0";

    Field.DataType := DbDataType.String;

    Field.FixedStartPosition := 1;

    Field.FixedEndPosition := 14;

    Field := Fields.Add As IDtTextProviderField;

    Field.Name := "Field1";

    Field.DataType := DbDataType.String;

    Field.FixedStartPosition := 15;

    Field.FixedEndPosition := 29;

    Field := Fields.Add As IDtTextProviderField;

    Field.Name := "Field2";

    Field.DataType := DbDataType.String;

    Field.FixedStartPosition := 30;

    Field.FixedEndPosition := 45;

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
 текста». Данный источник будет импортировать данные из указанного текстового
 файла. При импорте в качестве разделителя строк будет использоваться сочетание
 Возврат каретки+Перевод строки, структура полей будет фиксированной. На
 одно поле будет отводиться 15 позиций. Из первой строки файла будут импортированы
 наименования полей.


См. также:


[IDtTextProviderField](IDtTextProviderField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
