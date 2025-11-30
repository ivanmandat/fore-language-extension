# ReportObjectMovingEventArgs.Create

ReportObjectMovingEventArgs.Create
-


# ReportObjectMovingEventArgs.Create


## Синтаксис


Create(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
Object: [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm);
Rect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);
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


Cancel. Признак отмены перемещения
 объекта.


## Описание


Конструктор Create создает аргумент
 события, происходящего при перемещении объекта.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1
 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве Active
 компонента UiReport1 установите значение True. UiReport1 должен содержать
 загруженный регламентный отчет с фигурами на активном листе.


В примере будет создан и вызван пользовательский обработчик для события
 OnObjectMoving в компоненте
 ReportBox1.


Добавьте ссылки на системные сборки: Drawing, Report, Tab, Ui.


					// Создаем пользовательский обработчик события OnObjectMoving

		Sub UserOnObjectMoving(Sender: Object; Args: IReportObjectMovingEventArgs);

		Begin

		    Args.Cancel := Not WinApplication.ConfirmationBox("Переместить объект: " + Args.Object.Id);

		End Sub UserOnObjectMoving;

		// Вызываем пользовательский обработчик события OnObjectMoving

		Public Sub UserProc;

		Var

		    Report: IPrxReport;

		    Sheet: IPrxSheet;

		    Tab: ITabSheet;

		    rObject: ITabObject;

		    Rect: IGxRectF;

		    Argument: IReportObjectMovingEventArgs;

		Begin

		    Report := ReportBox1.Report.Report;

		    Sheet := Report.Sheets.Item(0);

		    Tab := (Sheet As IPrxTable).TabSheet;

		    rObject := Tab.Objects.Object("PrxShape1") As ITabObject;

		    Argument := New ReportObjectMovingEventArgs.Create(ReportBox1, Sheet, rObject, Rect, False);

		    UserOnObjectMoving(ReportBox1, Argument);

		End Sub UserProc;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnObjectMoving.


См. также:


[ReportObjectMovingEventArgs](ReportObjectMovingEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
