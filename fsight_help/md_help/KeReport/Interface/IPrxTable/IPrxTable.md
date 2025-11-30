# IPrxTable

IPrxTable
-


# IPrxTable


## Описание


Интерфейс IPrxTable содержит
 свойства и методы для работы с таблицей листа регламентного отчета.


## Комментарии


Данный интерфейс разработан как альтернатива отдельным свойствам/методам,
 которые были реализованы ранее в интерфейсе [IPrxSheet](../IPrxSheet/IPrxSheet.htm)
 и предназначались для работы с отдельными ячейками таблицы. Таблица
 является частью листа регламентного отчета, в параметрах таблицы хранится
 информация о привязке ячеек к срезам данных, а также параметры структуры
 таблицы, описываемые интерфейсом [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm).
 Для работы с таблицей приведите лист, описываемый интерфейсом [IPrxSheet](../IPrxSheet/IPrxSheet.htm),
 к интерфейсу IPrxTable:


			Var

    Report: IPrxReport;

    Sheet: IPrxSheet;

    tSheet: ITabSheet;

Begin

    //...

    Sheet := Report.ActiveSheet;

    //Параметры структуры таблицы

    tSheet := (Sheet As IPrxTable).TabSheet;

    //Параметры привязки ячеек к срезам
 данных

    DataBinding := (Sheet As IPrxTable).DataBinding;

    //...


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataBinding](IPrxTable.DataBinding.htm)
		 Свойство DataBinding
		 позволяет определить привязку данных ячеек листа отчета.


		 ![](../../Property_Image.gif)
		 [TabSheet](IPrxTable.TabSheet.htm)
		 Свойство TabSheet позволяет
		 получить таблицу листа отчета.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreatePrinter](IPrxTable.CreatePrinter.htm)
		 Метод CreatePrinter
		 создает объект, позволяющий работать c листом отчета, подготовленным
		 к печати.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
