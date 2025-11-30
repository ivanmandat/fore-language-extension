# ILanerSerie.UserName

ILanerSerie.UserName
-


# ILanerSerie.UserName


## Синтаксис


UserName: Boolean;


## Описание


Свойство UserName определяет,
 задал ли пользователь наименование временного ряда.


## Комментарии


Допустимые значения:


	- True. Наименование временного
	 ряда задано пользователем;


	- False. Наименование
	 временного ряда сгенерировано автоматически.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WBK.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Eax: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    i: Integer;

	    Serie: ILanerSerie;

	Begin

	    mb := MetabaseClass.Active;

	    Eax := mb.ItemById("WBK").Bind As IEaxAnalyzer;

	    Laner := Eax.Laner;

	    Series := Laner.Series;

	    Debug.WriteLine("Наименования рядов:");

	    For i := 0 To Series.Count - 1 Do

	        Serie := Series.Item(i);

	        Debug.Write(Serie.Name);

	        If Serie.UserName Then

	            Debug.WriteLine(" (задано пользователем)");

	        Else

	            Debug.WriteLine(" (сгенерировано автоматически)");

	        End If;

	    End For;

	End Sub UserProc;


Результат выполнения примера: в окно консоли выведены наименования рядов
 рабочей книги и способ создания наименования.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
