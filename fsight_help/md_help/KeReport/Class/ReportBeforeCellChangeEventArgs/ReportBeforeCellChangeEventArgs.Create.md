# ReportBeforeCellChangeEventArgs.Create

ReportBeforeCellChangeEventArgs.Create
-


# ReportBeforeCellChangeEventArgs.Create


## Синтаксис


Create (Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Row: Integer; Column: Integer; Value: Variant);


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Лист отчёта, для которого
 генерируется событие;


Row. Строка;


Column. Столбец;


Value. Измененное значение, которое будет содержаться в ячейке после
 отработки события.


## Описание


Конструктор Create создает аргумент
 события, возникающего до изменения значения ячейки.


## Комментарии


По умолчанию аргументы события генерируются автоматически при наступлении
 события. Конструктор требуется для вызова события вручную.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1
 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве Active
 компонента UiReport1 установите значение True, в свойстве OperationMode
 установите значение Edit. UiReport1 должен содержать загруженный регламентный
 отчет.


В примере будет создан и вызван пользовательский обработчик для события
 [OnBeforeCellChange](../ReportBox/ReportBox.OnBeforeCellChange.htm)
 в компоненте ReportBox1.


Добавьте ссылку на системную сборку Report.


	// Создаем пользовательский обработчик события OnBeforeCellChange

	Sub UserOnBeforeCellChange(Sender: Object; Args: IReportBeforeCellChangeEventArgs);

	Begin

	    Debug.WriteLine((Args As ReportBeforeCellChangeEventArgs).Value);

	End Sub UserOnBeforeCellChange;

	// Вызываем пользовательский обработчик события OnBeforeCellChange

	Sub UserProc;

	Var

	    Report: IPrxReport;

	    Sheet: IPrxSheet;

	    Argument: IReportBeforeCellChangeEventArgs;

	Begin

	    Report := ReportBox1.Report.Report;

	    Sheet := Report.Sheets.Item(0);

	    Argument := New ReportBeforeCellChangeEventArgs.Create(ReportBox1, Sheet, 2, 3, "Новое значение");

	    ReportBox1.OnBeforeCellChange(ReportBox1, Argument);

	End Sub UserProc;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnBeforeCellChange.


См. также:


[ReportBeforeCellChangeEventArgs](ReportBeforeCellChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
