# ILanerTable.SeriesList

ILanerTable.SeriesList
-


# ILanerTable.SeriesList


## Синтаксис


SeriesList: [ILanerSerieList](../ILanerSerieList/ILanerSerieList.htm);


## Описание


Свойство SeriesList возвращает
 коллекцию рядов рабочей книги.


## Комментарии


В возвращаемой коллекции отсутствует возможность добавления и удаления
 элементов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES, содержащей несколько рядов.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Table: ILanerTable;

	    SeriesList: ILanerSerieList;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Bind;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем таблицу данных

	    Table := Laner.Execute;

	    // Получаем коллекцию рядов

	    SeriesList := Table.SeriesList;

	    // Выводим количество столбцов в коллекции

	    Debug.WriteLine("Количество рядов в рабочей книге «" +

	        WbkObj.Name + "»: " + SeriesList.Count.ToString);

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено количество
 рядов в рабочей книге WORKBOOK_SERIES.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
