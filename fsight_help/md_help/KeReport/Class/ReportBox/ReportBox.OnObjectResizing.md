# ReportBox.OnObjectResizing

ReportBox.OnObjectResizing
-


# ReportBox.OnObjectResizing


## Синтаксис


OnObjectResizing(Sender: Object; Agrs: [IReportObjectResizingEventArgs](../../Interface/IReportObjectResizingEventArgs/IReportObjectResizingEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnObjectResizing наступает
 во время изменения размеров объекта.


## Комментарии


Возникает перед событием [ReportBox.OnBeforeObjectChange](ReportBox.OnBeforeObjectChange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1
 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве OperationMode
 компонента UiReport1 установите значение Edit, в свойстве Active
 - True. UiReport1 должен содержать загруженный регламентный отчет с фигурами
 на активном листе.


Указанная процедура должна быть назначена обработчиком события OnObjectResizing для компонента
 ReportBox1.


Добавьте ссылку на системную сборку Drawing.


	Sub ReportBox1OnObjectResizing(Sender: object; Args: IReportObjectResizingEventArgs);

	Begin

	    Debug.WriteLine("Размеры объекта " + Args.Object.Id +

	        "
	 были изменены в отчёте: " + Args.Report.Report.Object.Name + " с листа: " + Args.Sheet.Name +

	        " со стороны:" + Args.Side.ToString + ", координаты:" + Args.Rect.Left.ToString +

	        ", действие
	 отменено:" + Args.Cancel.ToString);

	End Sub ReportBox1OnObjectResizing;


В результате выполнения примера при изменении размеров фигуры в окно
 консоли будет выведено сообщение, содержащее идентификатор объекта, наименование
 отчёта и листа, где было произведено действие, указана сторона, с которой
 было произведено действие, координата слева и было ли отменено изменение
 размеров.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
