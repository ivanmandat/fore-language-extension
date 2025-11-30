# ILanerNameColumn.Header

ILanerNameColumn.Header
-


# ILanerNameColumn.Header


## Синтаксис


Header: String;


## Описание


Свойство Header определяет
 наименование столбца.


## Комментарии


Доступность данных столбца для редактирования определяет свойство [ILanerColumn.ReadOnly](../ILanerColumn/ILanerColumn.ReadOnly.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


	Sub UserProc;

	Var

	    Laner: ILaner;

	    Columns: ILanerAttributeColumns;

	    Col: ILanerColumn;

	    ColName: ILanerNameColumn;

	    i: Integer;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Columns := Laner.AttributeColumns;

	    For i := 0 To Columns.Count - 1 Do

	        Col := Columns.Column(i);

	        If Col.Type = LnColumnType.Name Then

	            ColName := Col As ILanerNameColumn;

	            ColName.Header := "Наименование ряда";

	        End If;

	    End For;

	End Sub UserProc;


После выполнения процедуры для столбца с наименованиями рядов будет
 изменено наименование.


См. также:


[ILanerNameColumn](ILanerNameColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
