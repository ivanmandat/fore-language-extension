# IEaxObject.Laner

IEaxObject.Laner
-


# IEaxObject.Laner


## Синтаксис


Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm);


## Описание


Свойство Laner определяет объект
 для работы с рабочей книгой базы данных временных рядов в рядном режиме.


## Комментарии


Для определения объекта, представляющего основу для построения таблицы
 с данными, используйте [IEaxObject.Pivot](IEaxObject.Pivot.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	Begin

	    MB := MetabaseClass.Active;

	    Analyzer := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    Slice := Analyzer.DataArea.Slices.Item(0);

	    If Slice.Views.Item(0).Laner = Null Then

	        Debug.WriteLine("Используется Pivot");

	    Else

	        Debug.WriteLine("Используется Laner");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен объект, использующийся
 в представлении данных.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
