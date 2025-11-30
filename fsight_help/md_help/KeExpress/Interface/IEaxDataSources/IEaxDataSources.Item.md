# IEaxDataSources.Item

IEaxDataSources.Item
-


# IEaxDataSources.Item


## Синтаксис


Item(Index: Integer): [IEaxDataSource](../IEaxDataSource/IEaxDataSource.htm);


## Параметры


Index. Индекс источника данных.


## Описание


Свойство Item возвращает объект,
 содержащий источник данных экспресс-отчёта.


## Комментарии


Индекс экспресс-отчёта передаётся параметром Index.


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

	    Exp: IEaxDataSource;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    Exp := ExpDs.Item(0);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, в переменной Exp будет храниться объект, содержащий
 источник данных экспресс-отчёта.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
