# IEaxDataSources.RemoveByKey

IEaxDataSources.RemoveByKey
-


# IEaxDataSources.RemoveByKey


## Синтаксис


RemoveByKey(Key: Integer): Boolean;


## Параметры


Key. Ключ источника данных.


## Описание


Метод RemoveByKey осуществляет
 удаление источника данных по ключу из коллекции источников данных экспресс-отчёта.


## Комментарии


Допустимые значения:


	- True. Удаление выполнено
	 успешно;


	- False. Удаление выполнено
	 с ошибками.


Ключ источника данных передаётся посредством параметра Key.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    ExpDs: IEaxDataSources;

	    Res: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    If ExpDs.RemoveByKey(3)

	    Then Res :="Remove";

	    Else Res :="Don't remove";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, в переменной Res будет содержаться «Remove»,
 если удаление источника данных экспресс-отчёта с ключом «3» прошло удачно.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
