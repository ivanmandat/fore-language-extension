# ReportBeforeObjectRectChangeEventArgs.Create

ReportBeforeObjectRectChangeEventArgs.Create
-


# ReportBeforeObjectRectChangeEventArgs.Create


## Синтаксис


Create (Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
Object: [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm);
Type: [TabObjectChangeType](TabSheet.chm::/Enums/TabObjectChangeType.htm),
Value: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);
Cancel: Boolean);


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Лист отчёта, для которого
 генерируется событие;


Object. Объект, для которого
 генерируется событие;


Type. Тип изменения, которое
 происходит с объектом;


Value. Новое положение и размер
 объекта;


Cancel. Признак отменены вращения
 объекта.


## Описание


Конструктор Create создаёт аргумент
 события, возникающего до перемещения объекта или изменения его размеров.


## Комментарии


По умолчанию аргументы события генерируются автоматически при наступлении
 события. Конструктор требуется для вызова события вручную.


Допустимые значения параметра Cancel:


	- True. Перемещение или
	 изменение размеров объекта будет отменено;


	- False. Перемещение или
	 изменение размеров объекта будет выполнено.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве Active
 компонента UiReport1 установите значение True. UiReport1 должен содержать
 загруженный регламентный отчет с фигурами на активном листе.


В примере будет создан и вызван пользовательский обработчик для события
 [OnBeforeObjectChange](../ReportBox/ReportBox.OnBeforeObjectChange.htm)
 в компоненте ReportBox1.


Добавьте ссылки на системные сборки: Drawing, Report, Tab.


					// Создаем пользовательский обработчик события OnBeforeObjectChange

		Sub UserOnBeforeObjectChange(Sender: Object; Args: IReportObjectChangeEventArgs);

		Begin

		    Select Case Args.Type

		    Case TabObjectChangeType.Angle:

		        Debug.WriteLine("Объект '" + Args.Object.Id + "' повернули");

		    Case TabObjectChangeType.Rect:

		        Debug.WriteLine("Объект '" + Args.Object.Id + "' переместили или изменили его размер");

		    End Select;

		End Sub UserOnBeforeObjectChange;

		// Вызываем пользовательский обработчик события OnBeforeObjectChange

		Public Sub UserProc;

		Var

		    Report: IPrxReport;

		    Sheet: IPrxSheet;

		    Tab: ITabSheet;

		    rObject: ITabObject;

		    Rect: IGxRectF;

		    Argument: IReportBeforeObjectRectChangeEventArgs;

		Begin

		    Report := ReportBox1.Report.Report;

		    Sheet := Report.Sheets.Item(0);

		    Tab := (Sheet As IPrxTable).TabSheet;

		    rObject := Tab.Objects.Object("PrxShape1") As ITabObject;

		    Rect := New GxRectF.Create(10, 10, 60, 60);

		    Argument := New ReportBeforeObjectRectChangeEventArgs.Create(ReportBox1, Sheet, rObject, TabObjectChangeType.Rect, Rect, False);

		    UserOnBeforeObjectChange(ReportBox1, Argument);

		End Sub UserProc;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnAfterObjectChange.


См. также:


[ReportObjectChangeEventArgs](../ReportObjectChangeEventArgs/ReportObjectChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
