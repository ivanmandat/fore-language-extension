# ReportBox.OnBeforeDeleteRange

ReportBox.OnBeforeDeleteRange
-


# ReportBox.OnBeforeDeleteRange


## Синтаксис


OnBeforeDeleteRange(Sender: Object; Args: [IReportRangeDeleteEventArgs](../../Interface/IReportRangeDeleteEventArgs/IReportRangeDeleteEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeDeleteRange
 наступает перед удалением диапазонов/строк/столбцов.


## Комментарии


После удаления диапазонов/строк/столбцов наступает событие [ReportBox.OnAfterDeleteRange](ReportBox.OnAfterDeleteRange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ReportBox с идентификатором «ReportBox1» и компонент UiReport с идентификатором
 «UiReport1». Укажите компонент «UiReport1» в качестве источника данных
 для компонента «ReportBox1». В свойстве [OperationMode](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.OperationMode.htm)
 компонента «UiReport1» укажите «Edit».


	Sub ReportBox1OnBeforeDeleteRange(Sender: Object; Args: IReportRangeDeleteEventArgs);

	Begin

	    Debug.WriteLine("Будет удален диапазон: " + Args.Range.Address +

	        " способом: " + Args.ShiftDirection.ToString + " с листа: " + Args.Sheet.Name);

	End Sub ReportBox1OnBeforeDeleteRange;


В результате выполнения примера при каждом добавлении диапазона/строк/столбцов
 в таблицу в окно консоли будет выводиться сообщение с информацией:


	- результат выполняемого действия;


	- адрес удаляемого диапазона;


	- способ удаления диапазонов/строк/столбцов;


	- лист, с которого требуется удалить диапазоны/строки/столбцы.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
