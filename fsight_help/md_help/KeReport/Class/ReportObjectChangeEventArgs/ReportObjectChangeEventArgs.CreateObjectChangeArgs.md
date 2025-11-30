# ReportObjectChangeEventArgs.CreateObjectChangeArgs

ReportObjectChangeEventArgs.CreateObjectChangeArgs
-


# ReportObjectChangeEventArgs.CreateObjectChangeArgs


## Синтаксис


CreateObjectChangeArgs (Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
Object: [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm);
Type: [TabObjectChangeType](TabSheet.chm::/Enums/TabObjectChangeType.htm));


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Лист отчёта, для которого
 генерируется событие;


Object. Объект, для которого
 генерируется событие;


Type. Тип изменения, которое
 происходит с объектом.


## Описание


Конструктор CreateObjectChangeArgs
 создаёт аргумент события, возникающего при изменении объекта.


## Комментарии


По умолчанию аргументы события генерируются автоматически при наступлении
 события. Конструктор требуется для вызова события вручную.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве Active
 компонента UiReport1 установите значение True. UiReport1 должен содержать
 загруженный регламентный отчет с фигурами на активном листе.


В примере будет создан и вызван пользовательский обработчик для события
 [OnAfterObjectChange](../ReportBox/ReportBox.OnAfterObjectChange.htm)
 в компоненте ReportBox1.


Добавьте ссылки на системные сборки: Report, Tab.


					// Вызываем пользовательский обработчик события OnAfterObjectChange

		Sub UserProc;

		Var

		    Report: IReportBox;

		    Sheet: IPrxSheet;

		    Shape: IPrxShape;

		    Object: ITabObject;

		    Argument: ReportObjectChangeEventArgs;

		Begin

		    Report := ReportBox1.Report.Report As IReportBox;

		    Sheet := Report.Report.Report.Sheets.Item(0);

		    Object := Shape As ITabObject;

		    Argument := New ReportObjectChangeEventArgs.CreateObjectChangeArgs(ReportBox1, Sheet, Object, TabObjectChangeType.Angle);

		    ReportBox1.OnAfterObjectChange(ReportBox1, Argument);

		End Sub UserProc;

		// Пользовательский обработчик события OnAfterObjectChange

		Sub UserOnAfterObjectChange(Sender: Object; Args: IReportObjectChangeEventArgs);

		Begin

		Select Case Args.Type

		    Case TabObjectChangeType.Angle:

		        Debug.WriteLine("Объект '" + Args.Object.Id + "' повернули");

		    Case TabObjectChangeType.Rect:

		        Debug.WriteLine("Объект '" + Args.Object.Id + "' переместили или изменили его размер");

		End Select;

		End Sub UserOnAfterObjectChange;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnAfterObjectChange.


См. также:


[ReportObjectChangeEventArgs](ReportObjectChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
