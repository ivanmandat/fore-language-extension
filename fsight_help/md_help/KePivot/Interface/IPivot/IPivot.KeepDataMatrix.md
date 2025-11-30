# IPivot.KeepDataMatrix

IPivot.KeepDataMatrix
-


# IPivot.KeepDataMatrix


## Синтаксис


KeepDataMatrix: Boolean;


## Описание


Свойство KeepDataMatrix определяет
 признак очистки матрицы с данными после извлечения из неё данных.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Очистка матрицы с данными будет происходить только при необходимости.


	- False. Очистка матрицы
	 с данными и её дальнейшее получение будет происходить каждый раз при
	 изменении свойств источника данных, например, при установке фильтрации,
	 сортировке, анализе Парето и т.д.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Pivot: IPivot;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Pivot := Expr.Pivot;

	    Pivot.KeepDataMatrix := False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера матрица с данными экспресс-отчёта будет очищаться
 каждый раз после извлечения данных из неё.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
