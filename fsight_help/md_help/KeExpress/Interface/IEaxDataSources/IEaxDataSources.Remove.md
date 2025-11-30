# IEaxDataSources.Remove

IEaxDataSources.Remove
-


# IEaxDataSources.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс источника данных.


## Описание


Метод Remove осуществляет удаление
 источника данных.


## Комментарии


Допустимые значения:


	- True. Удаление выполнено
	 успешно;


	- False. Удаление выполнено
	 с ошибками.


Индекс источника данных передаётся посредством параметра Index.


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

	    Res: Boolean;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    Res := ExpDs.Remove(0);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, будет удален первый источник из коллекции
 источников данных экспресс-отчёта. Переменная Res будет хранить результат
 удаления.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
