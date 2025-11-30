# ITabObjects.AdjustSelected

ITabObjects.AdjustSelected
-


# ITabObjects.AdjustSelected


## Синтаксис


AdjustSelected(Adjustment: [TabObjectsAdjustment](../../Enums/TabObjectsAdjustment.htm));


## Параметры


Adjustment - параметр, определяющий
 способ подбора размера выделенных объектов.


## Описание


Метод AdjustSelected осуществляет
 подбор размера выделенных объектов.


## Пример


	Sub Macro;

	Var

	    Rep: IPrxReport;

	    Objs: ITabObjects;

	    i: Integer;

	Begin

	    Rep := PrxReport.ActiveReport;

	    Objs := Rep.ActiveSheet.Table.Objects;

	    For i := 0 To Objs.Count - 1 Do

	        Objs.Item(i).Select_;

	    End For;

	    Objs.AdjustSelected(TabObjectsAdjustment.MinHeight);

	    Objs.AdjustSelected(TabObjectsAdjustment.MinWidth);

	End Sub Macro;


Данный пример является макросом для регламентного отчета. После выполнения
 макроса, будут выделены все объекты активного листа регламентного отчета,
 затем их размеры будут подогнаны сначала по минимальной ширине, а затем
 по минимальной высоте.


См. также:


[ITabObjects](ITabObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
