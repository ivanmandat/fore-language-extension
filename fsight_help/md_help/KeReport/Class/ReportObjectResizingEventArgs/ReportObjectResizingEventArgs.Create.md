# ReportObjectResizingEventArgs.Create

ReportObjectResizingEventArgs.Create
-


# ReportObjectResizingEventArgs.Create


## Синтаксис


		Create(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
		 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
		 Object: [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm);
		 Rect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);
		 Side: [TabObjectResizingSide](TabSheet.chm::/Enums/TabObjectResizingSide.htm);
		 [Cancel: Boolean]);


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Страница отчета, для
 которой генерируется событие;


Object. Объект,
 для которого генерируется событие;


Rect.
 Координаты прямоугольной области, занимаемой объектом;


Side. Сторона, которая была
 изменена;


Cancel. Признак отмены изменения
 размера объекта.


## Описание


Конструктор Create создает аргумент
 события, происходящего при каждом изменении размера объекта.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1
 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве Active
 компонента UiReport1 установите значение True. UiReport1 должен содержать
 загруженный регламентный отчет с фигурами на активном листе.


В примере будет создан и вызван пользовательский обработчик для события
 OnObjectResizing в компоненте
 ReportBox1.


Добавьте ссылки на системные сборки: Drawing, Report, Tab.


					// Создаем пользовательский обработчик события OnObjectResizing

		Sub UserOnObjectResizing(Sender: Object; Args: IReportObjectResizingEventArgs);

		Begin

		    Select Case Args.Side

		    Case TabObjectResizingSide.Left:

		        Debug.WriteLine("Объекту '" + Args.Object.Id + "' изменили размер слева");

		    Case TabObjectResizingSide.Right:

		        Debug.WriteLine("Объекту '" + Args.Object.Id + "' изменили размер справа");

		    End Select;

		End Sub UserOnObjectResizing;

		// Вызываем пользовательский обработчик события OnObjectResizing

		Public Sub UserProc;

		Var

		    Report: IPrxReport;

		    Sheet: IPrxSheet;

		    Tab: ITabSheet;

		    rObject: ITabObject;

		    Rect: IGxRectF;

		    Argument: IReportObjectResizingEventArgs;

		Begin

		    Report := ReportBox1.Report.Report;

		    Sheet := Report.Sheets.Item(0);

		    Tab := (Sheet As IPrxTable).TabSheet;

		    rObject := Tab.Objects.Object("PrxShape1") As ITabObject;

		    Rect := New GxRectF.Create(10, 10, 60, 60);

		    Argument := New ReportObjectResizingEventArgs.Create(ReportBox1, Sheet, rObject, Rect, TabObjectResizingSide.Left, False);

		    UserOnObjectResizing(ReportBox1, Argument);

		End Sub UserProc;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnObjectResizing.


См. также:


[ReportObjectResizingEventArgs](ReportObjectResizingEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
