# ITabObjects.SelectedObject

ITabObjects.SelectedObject
-


# ITabObjects.SelectedObject


## Синтаксис


SelectedObject(Index: Integer): [ITabObject](../ITabObject/ITabObject.htm);


## Параметры


Index - индекс выделенного
 объекта.


## Описание


Свойство SelectedObject возвращает
 выделенный объект, индекс которого передается посредством параметра Index.


## Пример


	Sub Macro;

	Var

	    Rep: IPrxReport;

	    Objs: ITabObjects;

	    Obj: ITabObject;

	    i: Integer;

	Begin

	    Rep := PrxReport.ActiveReport;

	    Objs := Rep.ActiveSheet.Table.Objects;

	    Objs.CenterSelectedAtView;

	    If Objs.Count <> 0 Then

	        For i := 0 To Objs.Count - 1 Do

	            Objs.Item(i).Select_;

	        End For;

	        Obj := Objs.SelectedObject(Objs.SelectedCount - 1);

	        Rep.ActiveSheet.Table.Cell(10, 0).Value := Obj.ClassId;

	    End If;

	End Sub Macro;


Данный пример является макросом для регламентного отчета. После выполнения
 макроса, будут выделены все объекты активного листа регламентного отчета,
 затем в ячейке "А10" будет содержаться идентификатор класса
 последнего выделенного объекта.


См. также:


[ITabObjects](ITabObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
