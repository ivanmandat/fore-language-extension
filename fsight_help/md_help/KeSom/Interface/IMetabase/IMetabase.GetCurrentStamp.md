# IMetabase.GetCurrentStamp

IMetabase.GetCurrentStamp
-


# IMetabase.GetCurrentStamp


## Синтаксис


GetCurrentStamp: DateTime;


## Описание


Метод GetCurrentStamp возвращает
 текущую дату и время сервера СУБД, на котором расположен репозиторий.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CI: ICultureInfo;

	    d: DateTime;

	Begin

	    Mb := MetabaseClass.Active;

	    CI := CultureInfo.Current;

	    d := Mb.GetCurrentStamp;

	    Debug.WriteLine(CI.FormatDateTime(d));

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены текущие
 дата и время сервера СУБД.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
