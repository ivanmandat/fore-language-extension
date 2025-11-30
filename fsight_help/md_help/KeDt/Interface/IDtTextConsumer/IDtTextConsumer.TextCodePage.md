# IDtTextConsumer.TextCodePage

IDtTextConsumer.TextCodePage
-


# IDtTextConsumer.TextCodePage


## Синтаксис


TextCodePage: [CodePage](ForeSys.chm::/Enums/CodePage.htm);


## Описание


Свойство TextCodePage определяет
 кодировку, которая будет использоваться при экспорте данных в файл.


## Комментарии


Для определения файла, в который будет производиться экспорт данных,
 используйте свойство [IDtTextConsumer.File](IDtTextConsumer.File.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL» и текстового файла «C:\Data.txt».


Добавьте ссылки на системные сборки Metabase, Etl, Dt, Andy, Drawing.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    EtlConsumer: IEtlPlainDataConsumer;

	    TextConsumer: IDtTextConsumer;

	    WxConsumer: IWxRectangle;

	    WxETLConsumer: IWxETLObject;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Edit As IEtlTask;

	    //Создание объекта "Экспорт в текст"

	    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataTextConsumer) As IEtlPlainDataConsumer;

	    EtlConsumer := EtlConsumer.Edit;

	    EtlConsumer.Id := "Text_Consumer";

	    EtlConsumer.Name := "Экспорт в текст";

	    EtlConsumer.Description := "Экспорт в текст";

	    //Настройка приёмника данных

	    TextConsumer := EtlConsumer.Consumer As IDtTextConsumer;

	    TextConsumer.File := "C:\Data_out.txt";

	    TextConsumer.WriteHeader := True;

	    TextConsumer.RowDelimiter := "|";

	    TextConsumer.DelimitedColumnDelimiter := ";";

	    TextConsumer.DelimitedTextQualifier := "'";

	    TextConsumer.TextCodePage := CodePage.UTF7;

	    EtlConsumer.FillDefault;

	    //Сохраняем приёмник

	    EtlConsumer.Save;

	    //Создание визуального объекта

	    WxConsumer := EtlTask.Workspace.CreateRectangle;

	    WxETLConsumer := New WxETLObject.Create;

	    WxETLConsumer.ETLObject := EtlConsumer;

	    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

	    WxConsumer.Style.PictureMarginTop := -10;

	    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

	    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

	    //Сохранение задачи Etl

	    (EtlTask As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Экспорт в
 текст». Данный объект будет экспортировать данные в текстовый файл «C:\Data.txt»
 с заданными настройками:


	- в качестве разделителя строк используется символ «|»;


	- в качестве разделителя полей используется символ «;»;


	- в качестве ограничителя текста используется символ «'»;


	- используемая кодировка «UTF7» - Unicode UTF-7.


См. также:


[IDtTextConsumer](IDtTextConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
