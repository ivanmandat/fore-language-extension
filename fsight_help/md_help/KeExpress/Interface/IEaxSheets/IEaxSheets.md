# IEaxSheets

IEaxSheets
-


# IEaxSheets


Сборка: Express;


## Описание


Интерфейс IEaxSheets содержит
 свойства и методы для работы с коллекцией листов экспресс-отчета.


## Иерархия наследования


           IEaxSheets


## Комментарии


Коллекция листов экспресс-отчета доступна в свойстве [IEaxAnalyzeCore.Sheets](../IEaxAnalyzeCore/IEaxAnalyzeCore.Sheets.htm).


Коллекция IEaxSheets также реализует
 свойства и методы интерфейса [IGxDocument](ModDrawing.chm::/Interface/IGxDocument/IGxDocument.htm),
 поэтому она может быть использована для пакетной печати всех листов. Примеры
 печати всех листов экспресс-отчета:


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    GxDoc: IGxDocument;

	    Printer: IGxDocumentPrinter;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Printer := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

	    GxDoc := Expr.Sheets As IGxDocument;

	    GxDoc.Print(Printer, -1, 0, "");

	End Sub UserProc;


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Analyzer](IEaxSheets.Analyzer.htm)
		 Свойство Analyzer возвращает
		 исходный экспресс-отчет, которому принадлежит текущая коллекция
		 листов.


		 ![](../../Property_Image.gif)
		 [Count](IEaxSheets.Count.htm)
		 Свойство Count возвращает
		 количество листов в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IEaxSheets.Item.htm)
		 Свойство Item возвращает
		 параметры листа по индексу.


		 ![](../../Property_Image.gif)
		 [ItemByKey](IEaxSheets.ItemByKey.htm)
		 Свойство ItemByKey
		 возвращает параметры листа по ключу.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IEaxSheets.Add.htm)
		 Метод Add создает лист
		 на базе существующего экспресс-отчета.


		 ![](../../Sub_Image.gif)
		 [AddNew](IEaxSheets.AddNew.htm)
		 Метод AddNew создает
		 лист на базе нового экспресс-отчета.


		 ![](../../Sub_Image.gif)
		 [AddSheets](IEaxSheets.AddSheets.htm)
		 Метод AddSheets копирует
		 в текущую коллекцию указанную коллекцию листов.


		 ![](../../Sub_Image.gif)
		 [Clear](IEaxSheets.Clear.htm)
		 Метод Clear удаляет
		 все листы из коллекции.


		 ![](../../Sub_Image.gif)
		 [IndexOf](IEaxSheets.IndexOf.htm)
		 Метод IndexOf возвращает
		 индекс указанного листа в коллекции.


		 ![](../../Sub_Image.gif)
		 [InsertAt](IEaxSheets.InsertAt.htm)
		 Метод InsertAt вставляет
		 указанный лист в указанную позицию в коллекции.


		 ![](../../Sub_Image.gif)
		 [Move](IEaxSheets.Move.htm)
		 Метод Move осуществляет
		 перемещение листа внутри коллекции.


		 ![](../../Sub_Image.gif)
		 [Remove](IEaxSheets.Remove.htm)
		 Метод Remove удаляет
		 указанный лист.


		 ![](../../Sub_Image.gif)
		 [RemoveByIndex](IEaxSheets.RemoveByIndex.htm)
		 Метод RemoveByIndex
		 удаляет лист по индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IEaxSheets.RemoveByKey.htm)
		 Метод RemoveByKey удаляет
		 лист по ключу.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
