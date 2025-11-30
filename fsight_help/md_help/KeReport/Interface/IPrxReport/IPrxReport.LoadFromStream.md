# IPrxReport.LoadFromStream

IPrxReport.LoadFromStream
-


# IPrxReport.LoadFromStream


## Синтаксис


LoadFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, содержащий регламентный
 отчет.


## Описание


Метод LoadFromStream загружает
 регламентный отчет из потока, передаваемого посредством параметра Stream.


## Комментарии


Регламентный отчет в поток может быть сохранен с помощью метода [SaveToStream](IPrxReport.SaveToStream.htm),
 либо загружен из пользовательского поля таблицы. Более подробно работа
 с полями пользовательского типа описана в базе знаний в статье «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


## Пример


Для выполнения примера предполагается наличие в репозитории:


	- регламентного отчёта с идентификатором «REPORT»;


	- формы, содержащей компонент Button с наименованием «Button1»,
	 ReportBox с наименованием «ReportBox1» и компонент UiReport с наименованием
	 «UiReport1». Укажите компонент «UiReport1» в качестве источника данных
	 для компонента «ReportBox1».


Добавьте ссылки на системные сборки: Fore, Io, Metabase.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Report: IPrxReport;

    RepStream: IIOStream;

Begin

    MB := MetabaseClass.Active;

    RepStream := New MemoryStream.Create;

    //Открытие регламентного
 отчета

    Report := MB.ItemById("REPORT").Edit As IPrxReport;

    Report.SaveToStream(RepStream, PrxReportSaveMode.DefinitionOnly);

    RepStream.Position := 0;

    Report.LoadFromStream(RepStream);

    //Вывод регламентного отчета в компонент на форме

    UiReport1.OperationMode := UiMetabaseObjectOperationMode.External;

    UiReport1.Active := True;

    UiReport1.Instance := Report;

    Dispose RepStream;

End Sub Button1OnClick;


При нажатии на кнопку с помощью метода LoadFromStream из потока RepStream
 в компонент «UiReport1» будет выгружен регламентный отчёт.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
