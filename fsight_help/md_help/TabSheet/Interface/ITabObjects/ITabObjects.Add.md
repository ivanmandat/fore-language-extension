# ITabObjects.Add

ITabObjects.Add
-


# ITabObjects.Add


## Синтаксис


Add(ClassId: String; Placement: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm)):
 [ITabObject](../ITabObject/ITabObject.htm);


## Параметры


ClassId. Идентификатор класса
 объекта, который необходимо добавить. В качестве идентификатора класса
 необходимо указывать одно из следующих значений:


	- PrxPicture - изображение.


	- PrxChart - диаграмма.


	- PrxScene3D - 3D-сцена.


	- PrxSpeedometer - спидометр.


	- PrxMap - карта.


	- PrxMapTerritoryInfo - расшифровка территорий карты.


	- PrxMapLegend - легенда карты.


	- PrxShape - автофигура;


	- PrxFlowDocument - форматированный текст;


	- PrxVisualizer - легенда визуализатора.


Placement. Расположение добавляемого
 объекта.


## Описание


Метод Add добавляет на лист
 таблицы новый объект, идентификатор класса и расположение которого передаются
 в качестве входных параметров ClassId
 и Placement соответственно.


После выполнения метод возвращает параметры созданного объекта.


## Пример


	Sub OnAfterExecuteReport(Report : IPrxReport);

	Var

	    ClassId: String;

	    Placement: IGxRectF;

	    Tab: ITabObject;

	Begin

	    ClassId:="PrxPicture";

	    Placement:=New GxRectF.Create(10,10,100,100);

	    Tab:=report.ActiveSheet.Table.Objects.Add(ClassId,Placement);

	    (Tab As IPrxPicture).Image:= New GxImage.CreateFromFile("c:\Image.jpg");

	End Sub OnAfterExecuteReport;


После вычисления отчета на текущий лист будет добавлено изображение
 из файла "c:\Image.jpg".


См. также:


[ITabObjects](ITabObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
