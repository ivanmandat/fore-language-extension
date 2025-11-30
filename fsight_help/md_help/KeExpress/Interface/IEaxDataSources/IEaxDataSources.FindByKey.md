# IEaxDataSources.FindByKey

IEaxDataSources.FindByKey
-


# IEaxDataSources.FindByKey


## Синтаксис


FindByKey(Key: Integer): [IEaxDataSource](../IEaxDataSource/IEaxDataSource.htm);


## Параметры


Key. Ключ
 источника данных.


## Описание


Метод FindByKey осуществляет
 поиск источника по ключу в коллекции источников данных.


## Комментарии


В результате выполнения метода возвращается объект, содержащий источник
 данных экспресс-отчёта.


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

	    Res: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    Exp := ExpDs.FindByKey(3);

	    If Exp <> Null

	    Then Res := "Find";

	    Else Res := "Don't find";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, в переменной Res будет содержаться «Find»,
 если в коллекции источников данных экспресс-отчёта существует источник
 с ключом «3».


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
