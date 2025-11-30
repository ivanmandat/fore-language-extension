# IDtRecordsetConsumer.Put

IDtRecordsetConsumer.Put
-


# IDtRecordsetConsumer.Put


## Синтаксис


Put(Value: Array);


## Параметры


Value. Массив данных, который
 необходимо экспортировать.


## Описание


Метод Put осуществляет экспорт
 данных в соответствии с алгоритмом пользователя.


## Комментарии


Данный метод должен быть переопределен в пользовательском классе.


## Пример


	Class MyConsumer: Object, IDtRecordsetConsumer

	    Public Sub Put(Value: Array);

	    Var

	        TextFile: IFileInfo;

	        TextW: ITextWriter;

	        i, j: Integer;

	    Begin

	        TextFile := New FileInfo.Attach("c:\Out.txt");

	        If TextFile.Exists Then

	            TextW := TextFile.AppendText;

	        Else

	            TextFile.Open(FileOpenMode.Create, FileShare.Exclusive);

	            TextW := TextFile.AppendText;

	        End If;

	        TextW.Encoding := CodePage.UTF8;

	        For j := Value.GetLowerBound(2) To Value.GetUpperBound(2) Do

	            For i := Value.GetLowerBound(1) To Value.GetUpperBound(1) Do

	                If i = 0 Then

	                    TextW.WriteString(Value[i, j] + " ");

	                Else

	                    TextW.WriteLnDouble(Value[i, j]);

	                End If;

	            End For;

	        End For;

	        TextW.Flush;

	    End Sub Put;


	    Public Sub Clear;

	    Var

	        TextFile: IFileInfo;

	    Begin

	        TextFile := New FileInfo.Attach("c:\Out.txt");

	        TextFile.Open(FileOpenMode.Create, FileShare.DenyWrite);

	        Dispose TextFile;

	    End Sub Clear;

	End Class MyConsumer;


Данный пример является макросом, содержащим реализацию метода, осуществляющего
 экспорт данных по пользовательскому алгоритму. Для работы алгоритма предполагается
 поступление в качестве параметра массива, содержащего два столбца данных.
 Первый столбец содержит символьные данные, второй - вещественные числа.
 При экспорте будет производиться вывод данных в текстовый файл "c:\Out.txt".


См. также:


[IDtRecordsetConsumer](IDtRecordsetConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
