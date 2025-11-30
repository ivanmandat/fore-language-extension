# ReportBeforeObjectAngleChangeEventArgs.Create

ReportBeforeObjectAngleChangeEventArgs.Create
-


# ReportBeforeObjectAngleChangeEventArgs.Create


## Синтаксис


Create (Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
Object: [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm);
Type: [TabObjectChangeType](TabSheet.chm::/Enums/TabObjectChangeType.htm),
Value: Double; Cancel: Boolean);


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Лист отчёта, для которого
 генерируется событие;


Object. Объект, для которого
 генерируется событие;


Type. Тип изменения, которое
 происходит с объектом;


Value. Угол, на который был
 повёрнут объект;


Cancel. Признак того, отменять
 ли вращение объекта.


## Описание


Конструктор Create создаёт аргумент
 события, возникающего при вращении объекта.


## Комментарии


По умолчанию аргументы события генерируются автоматически при наступлении
 события. Конструктор требуется для вызова события вручную.


Значение параметра Value всегда
 положительное и отсчитывается по часовой стрелке.


Допустимые значения параметра Cancel:


	- True. Вращение объекта
	 будет отменено;


	- False. Вращение объекта
	 будет выполнено.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве Active
 компонента UiReport1 установите значение True. UiReport1 должен содержать
 загруженный регламентный отчет с фигурами на активном листе.


В примере будет создан и вызван пользовательский обработчик для события
 [OnBeforeObjectChange](../ReportBox/ReportBox.OnBeforeObjectChange.htm)
 в компоненте ReportBox1.


Добавьте ссылки на системные сборки: Report, Tab.


					// Создаем пользовательский обработчик события OnBeforeObjectChange

		Sub UserOnBeforeObjectChange(Sender: Object; Args: IReportObjectChangeEventArgs);

		Begin

		    If Args.Type = TabObjectChangeType.Angle Then

		        Debug.WriteLine((Args As ReportBeforeObjectAngleChangeEventArgs).NewValue);

		    End If;

		End Sub UserOnBeforeObjectChange;

		// Вызываем пользовательский обработчик события OnBeforeObjectChange

		Sub UserProc;

		Var

		    Report: IPrxReport;

		    Sheet: IPrxSheet;

		    Tab: ITabSheet;

		    rObject: ITabObject;

		    Argument: ReportBeforeObjectAngleChangeEventArgs;

		Begin

		    Report := ReportBox1.Report.Report;

		    Sheet := Report.Sheets.Item(0);

		    Tab := (Sheet As IPrxTable).TabSheet;

		    rObject := Tab.Objects.Object("PrxShape1") As ITabObject;

		    Argument := New ReportBeforeObjectAngleChangeEventArgs.Create(ReportBox1, Sheet, rObject, TabObjectChangeType.Angle, 15, False);

		    ReportBox1.OnBeforeObjectChange(ReportBox1, Argument);

		End Sub UserProc;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnAfterObjectChange.


См. также:


[ReportBeforeObjectAngleChangeEventArgs](ReportBeforeObjectAngleChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
