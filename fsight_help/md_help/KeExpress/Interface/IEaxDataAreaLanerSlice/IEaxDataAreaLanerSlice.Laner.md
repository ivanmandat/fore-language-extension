# IEaxDataAreaLanerSlice.Laner

IEaxDataAreaLanerSlice.Laner
-


# IEaxDataAreaLanerSlice.Laner


## Синтаксис


Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm);


## Описание


Свойство Laner возвращает рабочую
 книгу базы данных временных рядов в рядном режиме.


## Комментарии


Рядный режим для рабочей книги базы данных временных рядов устанавливается
 в свойстве [IEaxAnalyzeCore.Mode](../IEaxAnalyzeCore/IEaxAnalyzeCore.Mode.htm)
 переключением значения [EaxMode.MultiDimension](../../Enums/EaxMode.htm)
 в [EaxMode.Series](../../Enums/EaxMode.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором WORKBOOK.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    LanerSlice: IEaxDataAreaLanerSlice;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("WORKBOOK").Bind As IEaxAnalyzer;

	    LanerSlice := Express.DataArea.Slices.Item(0) As IEaxDataAreaLanerSlice;

	    Debug.WriteLine("Дата начала - " + LanerSlice.Laner.StartDate.ToString);

	    Debug.WriteLine("Дата окончания - " + LanerSlice.Laner.EndDate.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены даты начала и
 окончания отображаемых значений.


См. также:


[IEaxDataAreaLanerSlice](IEaxDataAreaLanerSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
