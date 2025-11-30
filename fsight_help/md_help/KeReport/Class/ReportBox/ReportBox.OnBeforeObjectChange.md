# ReportBox.OnBeforeObjectChange

ReportBox.OnBeforeObjectChange
-


# ReportBox.OnBeforeObjectChange


## Синтаксис


OnBeforeObjectChange (Sender: Object; Args:
[IReportObjectChangeEventArgs](../../Interface/IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.htm));


## Параметры


Sender.
 Компонент, сгенерировавший событие;


Args. Параметры объекта, в
 котором произошло событие.


## Описание


Событие OnBeforeObjectChange
 наступает перед изменением объекта.


## Комментарии


Параметры объекта можно привести к различным интерфейсам в зависимости
 от типа изменения, которое произошло с объектом. Для этого используйте
 значение свойства [IReportObjectChangeEventArgs.Type](../../Interface/IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Type.htm),
 возвращаемое параметром Args:


	- TabObjectChangeType.Angle.
	 Объект будут вращать. Для получения параметров вращения приведите
	 значение параметра Args к
	 интерфейсу [IReportBeforeObjectAngleChangeEventArgs](../../Interface/IReportBeforeObjectAngleChangeEventArgs/IReportBeforeObjectAngleChangeEventArgs.htm);


	- TabObjectChangeType.Rect.
	 Объект будут перемещать или изменять его размеры. Для получения параметров
	 перемещения или изменения размеров приведите значение параметра Args к интерфейсу [IReportBeforeObjectRectChangeEventArgs](../../Interface/IReportBeforeObjectRectChangeEventArgs/IReportBeforeObjectRectChangeEventArgs.htm).


После изменения объекта наступает событие [OnAfterObjectChange](ReportBox.OnAfterObjectChange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве OperationMode
 компонента UiReport1 установите значение Edit, в свойстве Active - True.
 UiReport1 должен содержать загруженный регламентный отчет с фигурами на
 активном листе.


Указанная процедура должна быть назначена обработчиком события OnBeforeObjectChange для компонента
 ReportBox1.


Добавьте ссылки на системные сборки: Drawing, Report, Tab.


					Sub ReportBox1OnBeforeObjectChange(Sender: Object; Args: IReportObjectChangeEventArgs);

		Var

		    Rect: IReportBeforeObjectRectChangeEventArgs;

		    Angle: IReportBeforeObjectAngleChangeEventArgs;

		    RectPos: IGxRectF;

		Begin

		    Select Case Args.Type

		        // Если объект повернули более, чем на 90 градусов, то отменяем вращение

		        Case TabObjectChangeType.Angle:

		            Angle := Args As IReportBeforeObjectAngleChangeEventArgs;

		            If Angle.NewValue > 90 Then

		                Angle.Cancel := True;

		            End If;

		        // Если нижняя граница объекта переместилась ниже 100 пикселей, то отменяем перемещение

		        Case TabObjectChangeType.Rect:

		            Rect := Args As IReportBeforeObjectRectChangeEventArgs;

		            RectPos := Rect.NewValue;

		            If RectPos.Bottom > 100 Then

		                Rect.Cancel := True;

		            End If;

		    End Select;

		End Sub ReportBox1OnBeforeObjectChange;


В результате выполнения примера для всех фигур на листе будет отменяться
 вращение более, чем на 90 градусов и перемещение нижней границы ниже 100
 пикселей.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
