# IDataGrid.GetCellCoordAt

IDataGrid.GetCellCoordAt
-


# IDataGrid.GetCellCoordAt


## Синтаксис


GetCellCoordAt(Pt: [IPoint](ModForms.chm::/Interface/IPoint/IPoint.htm)):
 [IPoint](ModForms.chm::/Interface/IPoint/IPoint.htm);


## Параметры


Pt. Координаты
 точки, в которой необходимо получить ячейку компонента.


## Описание


Метод GetCellCoordAt осуществляет
 преобразование координаты указанной точки в координаты ячейки компонента.


## Комментарии


Координата [X](ModForms.chm::/Interface/IPoint/IPoint.X.htm)
 в полученной точке будет соответствовать индексу столбца, координата [Y](ModForms.chm::/Interface/IPoint/IPoint.Y.htm)
 - индексу строки. В зависимости от того, какой области компонента соответствует
 точка, возможны следующие варианты:


	- Если передаваемая точка находится в области ячейки, то в [X](ModForms.chm::/Interface/IPoint/IPoint.X.htm)
	 и [Y](ModForms.chm::/Interface/IPoint/IPoint.Y.htm)
	 будут доступны индекс столбца и строки ячейки соответственно;


	- Если передаваемая точка находится в области заголовков таблицы,
	 то будет доступна только координата [X](ModForms.chm::/Interface/IPoint/IPoint.X.htm),
	 а в качестве значения координаты [Y](ModForms.chm::/Interface/IPoint/IPoint.Y.htm)
	 будет возвращено «-1»;


	- Если передаваемая точка находится в пустой области ниже всех
	 строк (область, в которой могут быть созданы строки), то координата
	 [X](ModForms.chm::/Interface/IPoint/IPoint.X.htm)
	 будет иметь значение «-1», а в координате [Y](ModForms.chm::/Interface/IPoint/IPoint.Y.htm)
	 будет доступно количество уже созданных строк;


	- Если передаваемая точка находится в пустой области правее всех
	 столбцов (область, в которой могут быть созданы столбцы) или попадает
	 в разделительную линию между [фиксированными
	 областями](IDataGrid.RootBands.htm), то координата [X](ModForms.chm::/Interface/IPoint/IPoint.X.htm)
	 будет иметь значение «-1», а в координате [Y](ModForms.chm::/Interface/IPoint/IPoint.Y.htm)
	 будет доступен индекс строки;


	- Если передаваемая точка находится в пустой области на уровне
	 заголовков, то координаты [X](ModForms.chm::/Interface/IPoint/IPoint.X.htm)
	 и [Y](ModForms.chm::/Interface/IPoint/IPoint.Y.htm)
	 будут иметь значение «-1».


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента DataGrid с наименованием «DataGrid1».


	Sub DataGrid1OnMouseMove(Sender: Object; Args: IMouseEventArgs);

	Var

	    cell: IPoint;

	Begin

	    cell := DataGrid1.GetCellCoordAt(Args.pPoint);

	    If (cell.X <> -1) And (cell.Y <> -1) Then

	        Debug.WriteLine(cell.X.ToString + " " + cell.Y.ToString);

	    End If;

	End Sub DataGrid1OnMouseMove;


При перемещении мыши над компонентом «DataGrid1» в консоль среды разработки
 будут выводится координаты ячейки, над которой проходит курсор мыши.


См. также:


[IDataGrid](IDataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
