# Проверка структуры файла формата XLS

Проверка структуры файла формата XLS
-


# Проверка структуры файла формата XLS


Ниже представлены примеры для проверки структуры XLS-файла: наименования
 полей и их данных.


## Пример


Для выполнения примера необходимо наличие файла XLS-файла с наименованием
 «Data» в корне диска C. Документ должен содержать лист с наименованием
 «ByRow».


[![](../opened.gif)![](../closed.gif)Примерное содержание
 файла](javascript:TextPopup(this))


			 Country Code
			 Country
			 Indicator Code
			 Indicator Name
			 Units
			 Scale
			 Year
			 Value


			 512


			 Afghanistan
			 BCA
			 Broad money
			 US Dollars
			 Billions
			 2000
			 1


			 512


			 Afghanistan
			 BCA
			 Broad money
			 US Dollars
			 Billions
			 2001
			 2


			 512


			 Afghanistan
			 BCA
			 Broad money
			 US Dollars
			 Billions
			 2002
			 3


			 512


			 Afghanistan
			 BCA
			 Broad money
			 US Dollars
			 Billions
			 2003
			 4


			 512


			 Afghanistan
			 FMB
			 Broad money
			 National Currency
			 Billions
			 2004
			 57,174


			 512


			 Afghanistan
			 FMB
			 Broad money
			 National Currency
			 Billions
			 2005
			 -0,379


Добавьте ссылки на системные сборки: Dal, Dt, Metabase, Ui.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dtxlsprov: IDtExcelProvider;

	    Fields: IDtFieldDefinitions;

	    Field: IDtFieldDefinition;

	    namField, Val: string;

	    v: Array;

	    i: Integer;

	    s: double;

	    rez: boolean;

	Begin


	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Создадим объект для импорта данных из файла XLS

	    Try

	        dtxlsprov := New DtExcelProvider.Create;

	        // Укажем источник данных

	        dtXlsProv.File := "C:\Data.xls";

	        // Запрос у источника данных из листа «ByRow»

	        dtXlsProv.Query := "select * from [" + "ByRaw" + "$]";

	        // Включим режим импорта из столбцов, содержащих разные типы данных

	        dtXlsProv.ImexMode := 1 As DtExcelImexMode;

	        dtXlsProv.CheckFieldName := True;


	        // Откроем источник данных

	        dtXlsProv.Open;

	        // Выведем в окно консоли количество полей открытого источника

	        Fields := dtXlsProv.Fields;

	        Debug.WriteLine("Документ открыт = " + dtXlsProv.Active.ToString);

	        Debug.WriteLine("Количество полей = " + Fields.Count.ToString);

	        // Выведем в окно консоли наименования полей источника

	        namField := "Наименования полей - ";

	        For Each Field In Fields Do

	            namField := namField + Field.Name + "|" + Field.DataType.ToString + "; "

	        End For;


	        Debug.WriteLine(namField);

	        // Выведем в окно консоли данные полей источника

	        Debug.WriteLine("Данные:");

	    Except On e: exception Do

	        WinApplication.InformationBox("Ошибка. Данные не прочитаны");

	    End Try;

	    While Not dtXlsProv.Eof Do

	        Val := "";

	        dtXlsProv.Fetch(v);


	        For i := 0 To v.Length - 1 Do

	            val := val + v[i] + " ; ";

	        End For;

	        Debug.WriteLine(val);

	    End While;

	    // Закрываем источник данных

	    dtXlsProv.Close;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация по
 данным, содержащимся в файле. Будет выведено:


	- количество полей;


	- наименования полей;


	- данные полей указанного файла.


Если данные указанного файла окажутся заданными некорректно и не будут
 прочитаны, то будет выведено сообщение об ошибке.


См. также:


[IDtExcelProvider](../Interface/IDtExcelProvider/IDtExcelProvider.htm)
 | [Примеры](Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
