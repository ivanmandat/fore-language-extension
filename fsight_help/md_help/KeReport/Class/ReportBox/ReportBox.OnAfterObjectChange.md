# ReportBox.OnAfterObjectChange

ReportBox.OnAfterObjectChange
-


# ReportBox.OnAfterObjectChange


## Синтаксис


OnAfterObjectChange (Sender: Object; Args:
[IReportObjectChangeEventArgs](../../Interface/IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры объекта, в
 котором произошло событие.


## Описание


Событие OnAfterObjectChange
 наступает после изменения объекта.


## Комментарии


Перед изменением объекта наступает событие [OnBeforeObjectChange](ReportBox.OnBeforeObjectChange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 ReportBox с наименованием ReportBox1 и UiReport с наименованием UiReport1,
 являющийся источником данных для ReportBox1. В свойстве OperationMode
 компонента UiReport1 установите значение Edit, в свойстве Active - True.
 UiReport1 должен содержать загруженный регламентный отчет с фигурами на
 активном листе.


Указанная процедура должна быть назначена обработчиком события OnAfterObjectChange для компонента
 ReportBox1.


Добавьте ссылку на системную сборку Metabase.


					Sub ReportBox1OnAfterObjectChange(Sender: Object; Args: IReportObjectChangeEventArgs);

		Begin

		    Debug.WriteLine("Был изменен объект: " + Args.Object.Id +

		        " в отчёте: " + Args.Report.Report.Object.Name + " с листа: " + Args.Sheet.Name + " способом:" + Args.Type.ToString);

		End Sub ReportBox1OnAfterObjectChange;


В результате выполнения примера после изменения размера, перемещения
 или вращения объекта в окно консоли будет выведено сообщение, содержащее
 идентификатор объекта и описание действия, которое с ним было произведено,
 наименование отчёта и листа, где было произведено действие.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
