# IEaxDataAreaSlice.Type

IEaxDataAreaSlice.Type
-


# IEaxDataAreaSlice.Type


## Синтаксис


Type: [EaxDataAreaSliceType](../../Enums/EaxDataAreaSliceType.htm);


## Описание


Свойство Type возвращает тип
 среза аналитической области данных.


## Комментарии


Для добавления в аналитическую область среза данных необходимого типа
 используйте [IEaxDataAreaSlices.Add](../IEaxDataAreaSlices/IEaxDataAreaSlices.Add.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылку на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Выведем в окно консоли тип среза

	    Select Case Slice.Type As Integer

	        Case 1: Debug.WriteLine("Тип среза - Pivot");

	        Case 2: Debug.WriteLine("Тип среза - Laner");

	        Case 3: Debug.WriteLine("Тип среза - Relational");

	    End Select;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен тип указанного
 среза данных.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
