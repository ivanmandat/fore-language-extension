# IPrxReport.SaveToStream

IPrxReport.SaveToStream
-


# IPrxReport.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 Mode: [PrxReportSaveMode](../../Enums/PrxReportSaveMode.htm));


## Параметры


Stream. Поток, в который будет
 сохранен регламентный отчет.


Mode. Режим сохранения отчета.


## Описание


Метод SaveToStream сохраняет
 регламентный отчет в поток.


## Комментарии


Сохранение регламентного отчета в поток может использоваться для передачи
 данных между отчетами, либо для сохранения отчета в таблицу репозитория.
 Регламентный отчет может быть сохранен в поле пользовательского типа.
 Более подробно работа с полями пользовательского типа описана в базе знаний
 в статье «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


Для загрузки регламентного отчета из потока используйте метод [LoadFromStream](IPrxReport.LoadFromStream.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором RepTable. В данной таблице созданы строковые поля с
 идентификаторами REP_ID и REP_NAME, предназначенные для хранения идентификатора
 и наименования соответственно. Также создано двоичное поле REPORT, в котором
 хранятся сами регламентные отчёты. Также в репозитории должен быть создан
 регламентный отчет с идентификатором Report_1.


Добавьте ссылки на системные сборки: Db, Io, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    TableInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    Fields: IDatasetInstanceFields;

	    Report: IPrxReport;

	    RepStream: IMemoryStream;

	Begin

	    MB := MetabaseClass.Active;

	    // Таблица для сохранения регламентного отчёта.

	    TableInst := MB.ItemById("RepTable").Open(Null) As IDatasetInstance;

	    Cache := TableInst.OpenCached;

	    Fields := Cache.Fields;

	    // Регламентный отчёт

	    Report := MB.ItemById("Report_1").Bind As IPrxReport;

	    Cache.Append;

	    Fields.FindById("REP_ID").Value := Report.MetabaseObject.Id;

	    Fields.FindById("REP_NAME").Value := Report.MetabaseObject.Name;

	    //Поток, в который будет сохранён отчёт

	    RepStream := New MemoryStream.Create;

	    Report.SaveToStream(RepStream, PrxReportSaveMode.Full);

	    // Сохранение содержимого потока в таблицу

	    Fields.FindById("REPORT").Value := RepStream;

	    Cache.Post;

	    Dispose RepStream;

	    TableInst.Close;

	End Sub UserProc;


При выполнения примера в таблице будет создана новая запись. В полях
 будет сохранена информация о регламентном отчёте, а также сам отчёт. Сохранение
 отчёта в поле таблицы происходит через поток.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
