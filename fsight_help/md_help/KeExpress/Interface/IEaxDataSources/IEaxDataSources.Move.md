# IEaxDataSources.Move

IEaxDataSources.Move
-


# IEaxDataSources.Move


## Синтаксис


Move(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom. Индекс позиции перемещаемого
 источника данных.


IndexTo. Индекс позиции, в
 которую необходимо источник данных.


## Описание


Метод Move осуществляет перемещение
 источника данных в коллекции.


## Комментарии


Перемещение источника данных выполняется из позиции с индексом IndexFrom в позицию с индексом
 IndexTo.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT. Данный экспресс-отчёт должен содержать
 больше одного источника данных.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    ExpDs: IEaxDataSources;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    ExpDs.Move(0, 1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, первый источник будет перемещен на вторую
 позицию коллекции источников данных экспресс-отчёта.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
