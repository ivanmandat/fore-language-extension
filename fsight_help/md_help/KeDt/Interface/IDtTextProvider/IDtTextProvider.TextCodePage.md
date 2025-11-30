# IDtTextProvider.TextCodePage

IDtTextProvider.TextCodePage
-


# IDtTextProvider.TextCodePage


## Синтаксис


TextCodePage: [CodePage](ForeSys.chm::/Enums/CodePage.htm);


## Описание


Свойство TextCodePage определяет
 кодировку, которая будет использоваться при импорте данных из файла.


## Комментарии


Для определения файла, из которого будет производиться импорт данных,
 используйте свойство [IDtTextProvider.File](IDtTextProvider.File.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и текстового файла C:\Data.txt.


Добавьте ссылки на системные сборки Metabase, Etl, Dt, Andy, Drawing.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    TextProvider: IDtTextProvider;

	    DateFormat: IDtObjectDataFormat;

	    WxProvider: IWxRectangle;

	    WxETLProvider: IWxETLObject;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Edit As IEtlTask;

	    //Создание объекта "Импорт из текста"

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataTextProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "Text_Provider";

	    EtlProvider.Name := "Импорт из текста";

	    EtlProvider.Description := "Импорт из текста";

	    //Настройка источника данных

	    TextProvider := EtlProvider.Provider As IDtTextProvider;

	    TextProvider.File := "C:\Data.txt";

	    TextProvider.RangeHasHeader := True;

	    TextProvider.RowDelimiter := "|";

	    TextProvider.DelimitedColumnDelimiter := ";";

	    TextProvider.FieldsFromFile;

	    TextProvider.TextCodePage := CodePage.UTF7;

	    DateFormat := TextProvider.StringDataFormat;

	    DateFormat.DateFormat := "ДД/ММ/ГГГГ";

	    DateFormat.DecimalDelimiter := ".";

	    EtlProvider.FillDefault;

	    //Сохраняем источник

	    EtlProvider.Save;

	    //Создание визуального объекта

	    WxProvider := EtlTask.Workspace.CreateRectangle;

	    WxETLProvider := New WxETLObject.Create;

	    WxETLProvider.ETLObject := EtlProvider;

	    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

	    WxProvider.Style.PictureMarginTop := -10;

	    WxProvider.PinPosition := New GxPointF.Create(50, 50);

	    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

	    //Сохранение задачи Etl

	    (EtlTask As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Импорт из
 текста». Данный объект будет импортировать данные из указанного текстового
 файла со следующими настройками:


	- в качестве разделителя строк используется символ «|»;


	- в качестве разделителя полей используется символ «;»;


	- используемая кодировка UTF7.


См. также:


[IDtTextProvider](IDtTextProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
