# IDataGridBandBase.SetParentBand

IDataGridBandBase.SetParentBand
-


# IDataGridBandBase.SetParentBand


## Синтаксис


SetParentBand(Value: [IDataGridBand](../IDataGridBand/IDataGridBand.htm);
 Row: Integer; Column: Integer);


## Параметры


Value. Контейнер, который будет
 являться родителем объекта;


Row. Индекс строки, в которую
 будет помещен объект;


Column. Индекс столбца, в который
 будет помещен объект.


## Описание


Метод SetParentBand позволяет
 поместить текущий объект в указанную позицию контейнера, передаваемого
 посредством параметра Value.


## Пример


	Sub DataGrid1OnBandBaseClick(Sender: Object; Args: IDataGridBandEventArgs);

	Begin

	    Args.BandBase.SetParentBand(DataGrid1.Bands.Item(0),1, 2);

	End Sub DataGrid1OnBandBaseClick;


После выполнения примера объект (контейнер или колонка), по которому
 осуществлен щелчок мыши, переместится в контейнер с индексом 0, строку
 с индексом 1, столбец с индексом 2.


См. также:


[IDataGridBandBase](IDataGridBandBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
