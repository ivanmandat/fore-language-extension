# ITabFormatConditions.AddCollection

ITabFormatConditions.AddCollection
-


# ITabFormatConditions.AddCollection


## Синтаксис


AddCollection(Value: [ITabFormatConditions](ITabFormatConditions.htm);
 [Link: Boolean = False]);


## Параметры


Value - коллекция условных
 форматов, которую необходимо скопировать.


Link -
 необязательный параметр, определяющий будет ли осуществляться связь между
 копируемыми условными форматами и коллекцией форматов, куда осуществляется
 копирование. По молчанию свойству установлено значение False,
 при этом связь не создается. Если параметру установить значение
 True - копии условных форматов будет связана
 с исходными форматами. При изменении параметров, какого-либо скопированного
 условного формата будут изменяться параметры исходного формата.


## Описание


Метод AddCollection добавляет
 указанную коллекцию условных форматов.


## Пример


	Sub AddCollect;

	Var

	    Rep: IPrxReport;

	    Sheet: ITabSheet;

	    Collect: ITabFormatConditions;

	    SelRange: ITabSelection;

	Begin

	    Rep := PrxReport.ActiveReport;

	    Sheet := (Rep.ActiveSheet As IPrxTable).TabSheet;

	    Collect := New TabFormatConditions.Create;

	    Collect.AddCollection(Sheet.FormatConditions, True);

	    SelRange := Sheet.View.Selection;

	    SelRange.Range.FormatConditions.AddCollection(Collect, True);

	End Sub AddCollect;


Данный пример является макросом для регламентного отчета. При выполнения
 макроса для выделенного диапазона ячеек будут установлены все условные
 форматы, содержащиеся на текущем листе отчета.


См. также:


[ITabFormatConditions](ITabFormatConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
