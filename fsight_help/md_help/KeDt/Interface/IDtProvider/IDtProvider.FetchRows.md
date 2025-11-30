# IDtProvider.FetchRows

IDtProvider.FetchRows
-


# IDtProvider.FetchRows


## Синтаксис


FetchRows(Count: Integer; Var Values: Array): Integer;


## Параметры


Count. Количество записей,
 данные которых необходимо считать;


Values. Двумерный массив, в
 который будут помещены считанные значения.


## Описание


Метод FetchRows осуществляет
 чтение данных указанного количества записей из источника данных и возвращает
 количество фактически считанных записей.


## Комментарии


Чтение данных осуществляется в массив, передаваемый по ссылке в параметре
 Values.


Если объем загружаемых данных известен (известно количество записей
 и количество столбцов, в которых находятся данные каждой записи), то в
 качестве значения параметра Values
 можно указать массив, размер которого больше или равен размеру объему
 данных.


Если объем загружаемых данных не известен, то в качестве параметра Values необходимо указать переменную,
 соответствующую пустому динамическому массиву. При выполнении метода FetchRows массив будет инициализирован
 автоматически, в соответствии с вычисленным объемом загружаемых данных.


Примечание.
 При многократном чтении данных для повторного использования одной и той
 же переменной-массива перед вызовом метода FetchRows
 переменную необходимо обнулять, либо инициализировать новый массив необходимого
 размера.


После чтения данных курсор в источнике перемещается на следующую запись.


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 Microsoft Excel «D:\Work\Data.xlsx».


В репозитории предполагается наличие таблицы с идентификатором T_DATA.
 Структура таблицы должна содержать поле KEY, а также структура должна
 соответствовать данным в файле Microsoft Excel.


Добавьте ссылки на системные сборки: Db, Dt, Metabase.


	Sub LoadData;

	Var

	    Mb: IMetabase;

	    ExcelProviderEx: IDtExcelProviderEx;

	    MbConsumer: IDtMetabaseConsumer;

	    v: Array;

	    Sub ShowArray(Data: Array);

	    Var

	        i, j: Integer;

	    Begin

	        For j := Data.GetLowerBound(2) To Data.GetUpperBound(2) Do

	            For i := Data.GetLowerBound(1) To Data.GetUpperBound(1) Do

	                Debug.Write(Data[i, j] + " ");

	            End For;

	            Debug.WriteLine("");

	        End For;

	    End Sub ShowArray;

	Begin

	    Mb := MetabaseClass.Active;

	    // Источник данных

	    ExcelProviderEx := New DtExcelProviderEx.Create;

	    ExcelProviderEx.File := "D:\Work\Data.xlsx";

	    ExcelProviderEx.Sheet := "Лист1";

	    ExcelProviderEx.HasHeader := False;

	    ExcelProviderEx.HeaderRow := 0;

	    ExcelProviderEx.Format := "XLSX";

	    ExcelProviderEx.DataRow := 1;

	    ExcelProviderEx.Open;

	    // Считывание первого блока данных

	    Debug.WriteLine("Первый массив данных:");

	    ExcelProviderEx.FetchRows(5, v);

	    ShowArray(v);

	    // Приёмник данных

	    MBConsumer := New DtMetabaseConsumer.Create;

	    MBConsumer.Dataset := Mb.ItemById("T_DATA").Bind As IDatasetModel;

	    MBConsumer.Open;

	    MBConsumer.KeyFieldNames := "KEY";

	    // Запись первого блока данных в приёмник

	    MBConsumer.Put(v);

	    MBConsumer.Close;

	    // Считывание второго блока данных

	    v := Null;

	    Debug.WriteLine("Второй массив данных:");

	    ExcelProviderEx.FetchRows(10, v);

	    ShowArray(v);

	    ExcelProviderEx.Close;

	End Sub LoadData;


При выполнении примера будет создан новый источник данных, осуществляющий
 импорт данных из файла Micsosoft Excel. Из файла в две итерации будут
 считаны данные, первый блок данных будет записан в таблицу репозитория.
 Также все считанные данные будут выведены в консоль среды разработки.


См. также:


[IDtProvider](IDtProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
