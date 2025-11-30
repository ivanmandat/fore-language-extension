# IDtTextConsumer.DelimitedColumnDelimiter

IDtTextConsumer.DelimitedColumnDelimiter
-


# IDtTextConsumer.DelimitedColumnDelimiter


## Синтаксис


DelimitedColumnDelimiter: String;


## Описание


Свойство DelimitedColumnDelimiter
 определяет символ, используемый в качестве разделителя полей в текстовом
 файле.


## Комментарии


По умолчанию свойству установлено значение ",".


В качестве значений данного свойства допустимы следующие значения:


	- ,


	- ;


	- .


	- :


	- |


	- {Табуляция} - код #9


	- {Возврат каретки} - код #13


	- {Перевод строки} - код #10


	- {Возврат каретки}{Перевод строки} - #13+#10


	- Любой другой символ, либо сочетание символов, по желанию
	 пользователя.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlConsumer: IEtlPlainDataConsumer;

	    TextConsumer: IDtTextConsumer;

	    WxConsumer: IWxRectangle;

	    WxETLConsumer: IWxETLObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

	    MObj := MB.ItemById("ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    // Начало создания приёмника

	    // Создание объекта "Экспорт в текст"

	    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataTextConsumer) As IEtlPlainDataConsumer;

	    EtlConsumer := EtlConsumer.Edit;

	    EtlConsumer.Id := "Text_Consumer";

	    EtlConsumer.Name := "Экспорт в текст";

	    EtlConsumer.Description := "Экспорт в текст";

	    // Настройка приёмника данных

	    TextConsumer := EtlConsumer.Consumer As IDtTextConsumer;

	    TextConsumer.File := "c:\Data_out.txt";

	    TextConsumer.FormatType := DtTextFormatType.Delimited;

	    TextConsumer.WriteHeader := True;

	    TextConsumer.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

	    TextConsumer.DelimitedColumnDelimiter := #9; //Клавиша TAB

	    TextConsumer.DelimitedTextQualifier := "'";

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


После выполнения примера в задаче ETL будет создан объект «Экспорт в
 текст». При экспорте в качестве разделителя строк будет использоваться
 сочетание Возврат каретки+Перевод строки, в качестве разделителя полей
 - Знак табуляции. Ограничитель текста - апостроф. В первую строку файла
 будут экспортироваться наименования полей. Если файл не существует - он
 будет создан.


См. также:


[IDtTextConsumer](IDtTextConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
