# IDataGridBandBase.Fixed

IDataGridBandBase.Fixed
-


# IDataGridBandBase.Fixed


## Синтаксис


Fixed: [FixedState](../../Enums/FixedState.htm);


## Описание


Свойство Fixed определяет фиксированный
 контейнер, в котором расположен объект.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента DataGrid с наименованием «DataGrid1». В «DataGrid1»
 созданы несколько контейнеров и столбцов. Указанный пример является обработчиком
 события OnBandBaseClick для компонента «DataGrid1».


	Sub DataGrid1OnBandBaseClick(Sender: Object; Args: IDataGridBandEventArgs);

	Begin

	    Args.BandBase.Fixed := FixedState.Left;

	End Sub DataGrid1OnBandBaseClick;


После щелчка по любому контейнеру или столбцу произойдет перемещение
 этого объекта в левый фиксированный контейнер.


См. также:


[IDataGridBandBase](IDataGridBandBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
