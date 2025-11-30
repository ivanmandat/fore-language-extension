# IDtTextConsumerField.FixedLength

IDtTextConsumerField.FixedLength
-


# IDtTextConsumerField.FixedLength


## Синтаксис


FixedLength: Integer;


## Описание


Свойство FixedLength определяет
 длину поля в символах.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла Data_Out.txt.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    TextConsumer: IDtTextConsumer;

    Fields: IDtFieldDefinitions;

    Field: IDtTextConsumerField;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL.Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Экспорт в текст"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataTextConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "Text_Consumer";

    EtlConsumer.Name := "Экспорт в текст";

    EtlConsumer.Description := "Экспорт в текст";

    // Настройка источника данных

    TextConsumer := EtlConsumer.Consumer As IDtTextConsumer;

    TextConsumer.File := "c:\Data_Out.txt";

    TextConsumer.FormatType := DtTextFormatType.Fixed;

    TextConsumer.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

    TextConsumer.WriteHeader := True;

    // Настройка полей фиксированной длины

    Fields := TextConsumer.Fields;

    Field := Fields.Add As IDtTextConsumerField;

    Field.Name := "Field0";

    Field.DataType := DbDataType.String;

    Field.FixedLength := 15;

    Field := Fields.Add As IDtTextConsumerField;

    Field.Name := "Field1";

    Field.DataType := DbDataType.String;

    Field.FixedLength := 15;

    Field := Fields.Add As IDtTextConsumerField;

    Field.Name := "Field2";

    Field.DataType := DbDataType.String;

    Field.FixedLength := 15;

    EtlConsumer.FillDefault;

    // Сохраняем источник

    EtlConsumer.Save;

    // Конец создания источника

    // Начало создания визуального объекта

    WxConsumer := EtlTask.Workspace.CreateRectangle;

    WxETLConsumer := New WxETLObject.Create;

    WxETLConsumer.ETLObject := EtlConsumer;

    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

    WxConsumer.Style.PictureMarginTop := -10;

    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи Etl

    MObj.Save;

End Sub UserProc;


После выполнения примера будет создан новый приёмник данных, осуществляющий
 экспорт данных в текстовый файл. При экспорте в качестве разделителя строк
 будет использоваться сочетание Возврат каретки+Перевод строки, структура
 полей будет фиксированной. На одно поле будет отводиться 15 позиций. В
 первую строку файла будут экспортироваться наименования полей.


См. также:


[IDtTextConsumerField](IDtTextConsumerField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
