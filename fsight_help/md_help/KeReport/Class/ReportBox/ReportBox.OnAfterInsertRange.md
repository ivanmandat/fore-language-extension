# ReportBox.OnAfterInsertRange

ReportBox.OnAfterInsertRange
-


# ReportBox.OnAfterInsertRange


## Синтаксис


OnAfterInsertRange(Sender: Object; Args: [IReportRangeInsertEventArgs](../../Interface/IReportRangeInsertEventArgs/IReportRangeInsertEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnAfterInsertRange наступает
 после добавления диапазонов/строк/столбцов.


## Комментарии


Перед добавлением диапазонов/строк/столбцов наступает событие [ReportBox.OnBeforeInsertRange](ReportBox.OnBeforeInsertRange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ReportBox с идентификатором «ReportBox1» и компонент UiReport с идентификатором
 «UiReport1». Укажите компонент «UiReport1» в качестве источника данных
 для компонента «ReportBox1». В свойстве [OperationMode](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.OperationMode.htm)
 компонента «UiReport1» укажите «Edit».


	Sub ReportBox1OnAfterInsertRange(Sender: Object; Args: IReportRangeInsertEventArgs);

	Begin

	    Debug.WriteLine("Был добавлен диапазон: " + Args.Range.Address +

	        " способом: " + Args.ShiftDirection.ToString + " на лист: " + Args.Sheet.Name);

	End Sub ReportBox1OnAfterInsertRange;


В результате выполнения примера при каждом добавлении диапазона/строк/столбцов
 в таблицу в окно консоли будет выводиться сообщение с информацией:


	- результат выполняемого действия;


	- адрес добавляемого диапазона;


	- способ добавления диапазонов/строк/столбцов;


	- лист, на которой были добавлены диапазоны/строки/столбцы.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
