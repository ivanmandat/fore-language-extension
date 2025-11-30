# ILanerColumn.CustomTitle

ILanerColumn.CustomTitle
-


# ILanerColumn.CustomTitle


## Синтаксис


CustomTitle: String;


## Описание


Свойство CustomTitle определяет
 пользовательское наименование столбца.


## Комментарии


По умолчанию пользовательское наименование не задано.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. Для компонента LanerBox1 должен быть включен режим редактирования
 данных


	Sub UserProc;

	Var

	    Laner: ILaner;

	    Columns: ILanerAttributeColumns;

	    Col: ILanerColumn;

	    i: Integer;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Columns := Laner.AttributeColumns;

	    For i := 0 To Columns.Count - 1 Do

	        Col := Columns.Column(i);

	        Debug.WriteLine(Col.Type);

	        If Col.Type = LnColumnType.Name Then

	            Col.ReadOnly := False;

	            Col.CustomTitle := "Наименование";

	        End If;

	    End For;

	    UiErAnalyzer1.ErAnalyzer.RefreshAll;

	End Sub UserProc;


После выполнения примера будет изменено название столбца, содержащего
 наименования рядов. Наименования рядов будут доступны для редактирования.


См. также:


[ILanerColumn](ILanerColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
