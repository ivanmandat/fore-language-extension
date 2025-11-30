# ReportBox.OnObjectMoving

ReportBox.OnObjectMoving
-


# ReportBox.OnObjectMoving


## Синтаксис


OnObjectMoving(Sender: Object; Agrs: [IReportObjectMovingEventArgs](../../Interface/IReportObjectMovingEventArgs/IReportObjectMovingEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnObjectMoving наступает
 во время перемещения объекта.


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


Указанная процедура должна быть назначена обработчиком события OnObjectMoving для компонента ReportBox1.


Добавьте ссылку на системную сборку Drawing.


	Sub ReportBox1OnObjectMoving(Sender: object; Args: IReportObjectMovingEventArgs);

	Begin

	    Debug.WriteLine("Объект:  " + Args.Object.Id +

	        " был перемещен с координатами: " + Args.Rect.Left.ToString +

	        ", отменено действие: " + Args.Cancel.ToString);

	End Sub ReportBox1OnObjectMoving;


В результате выполнения примера при перемещении фигуры в окно консоли
 будет выведено сообщение, содержащее идентификатор объекта, координата
 слева и было ли отменено перемещение.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
