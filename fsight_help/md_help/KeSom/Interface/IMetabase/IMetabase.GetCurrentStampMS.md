# IMetabase.GetCurrentStampMS

IMetabase.GetCurrentStampMS
-


# IMetabase.GetCurrentStampMS


## Синтаксис


		GetCurrentStampMS: DatetTime;


## Описание


Метод GetCurrentStampMS возвращает
 текущую дату и время сервера СУБД, на котором расположен репозиторий,
 с точностью до миллисекунд.


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

		    d := Mb.GetCurrentStampMS;

		    Debug.WriteLine(CI.FormatTimeEx(d, "H:mm:s.fff"));

		End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведено текущее
 время сервера СУБД с точностью до миллисекунд.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
