# IEaxSheets.AddSheets

IEaxSheets.AddSheets
-


# IEaxSheets.AddSheets


## Синтаксис


AddSheets(Value: [IEaxSheets](IEaxSheets.htm));


## Параметры


Value. Коллекция листов, которую
 необходимо добавить в текущую коллекцию.


## Описание


Метод AddSheets копирует в текущую
 коллекцию указанную коллекцию листов.


## Комментарии


При выполнении метода AddSheets
 для исходного экспресс-отчета будут добавлены дочерние объекты, являющиеся
 копиями тех экспресс-отчетов, на которых основаны листы коллекции Value.


## Пример


Для выполнения примера предполагается наличие двух экспресс-отчетов
 с идентификаторами EXPRESS_REPORT и EXPRESS_REPORT_2.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax1, Eax2: IEaxAnalyzer;

	Begin

	    MB := MetabaseClass.Active;

	    Eax1 := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Eax2 := MB.ItemById("EXPRESS_REPORT_2").Bind As IEaxAnalyzer;

	    //Создание листов на базе существующей коллекции листов

	    Eax1.Sheets.AddSheets(Eax2.Sheets);

	    (Eax1 As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в экспресс-отчет EXPRESS_REPORT будут скопированы
 листы отчета EXPRESS_REPORT_2.


См. также:


[IEaxSheets](IEaxSheets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
