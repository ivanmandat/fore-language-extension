# IGxDocument.GetTagText

IGxDocument.GetTagText
-


# IGxDocument.GetTagText


## Синтаксис


GetTagText(Printer: [IGxDocumentPrinter](../IGxDocumentPrinter/IGxDocumentPrinter.htm);
 Tag: String): String;


## Параметры


Printer. Параметр зарезервирован
 на будущее;


Tag. Тег, который необходимо
 преобразовать в текст.


## Описание


Метод GetTagText преобразовывает
 заданный тег в текст.


## Комментарии


В качестве значения параметра Printer
 необходимо передавать Null.


Теги, передаваемые в качестве значения параметра Tag,
 представлены в описании следующих свойств:


	- [IEaxHeaderPart.Text](KeExpress.chm::/Interface/IEaxHeaderPart/IEaxHeaderPart.Text.htm).
	 Теги, доступные для экспресс-отчетов.


	- [IHeaderPart.Text](KeExpress.chm::/Interface/IHeaderPart/IHeaderPart.Text.htm).
	 Теги, доступные для регламентных отчетов.


Важно. В текущей
 реализации метод неправильно вычислит тег с количеством страниц, поскольку
 для этого необходим физический принтер (устройство).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Drawing, Metabase, Ui.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    GxDoc: IGxDocument;

	    Text: String;

	Begin

	    MB := MetabaseClass.Active;

	    GxDoc := MB.ItemById("EXPRESS_REPORT").Bind As IGxDocument;

	    Text := GxDoc.GetTagText(Null, "&[Name]&nbsp;&[Date]");

	    WinApplication.InformationBox(Text);

	End Sub UserProc;


После выполнения примера будет выдано сообщение, в котором будет отображено
 значение текста, сформированное при использовании указанных тегов.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
