# ILanerAttributeColumns.Column

ILanerAttributeColumns.Column
-


# ILanerAttributeColumns.Column


## Синтаксис


Column(Index: Integer): [ILanerColumn](../ILanerColumn/ILanerColumn.htm);


## Параметры


Index. Индекс атрибута.


## Описание


Свойство Column возвращает колонку
 боковика рабочей книги, отображающую указанный атрибут.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. Для рабочей книги должен быть включен режим редактирования
 данных.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Laner: ILaner;

	    Columns: ILanerAttributeColumns;

	    Col: ILanerColumn;

	    i: Integer;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Columns := Laner.AttributeColumns;

	    Debug.WriteLine(Columns.Count);

	    For i := 0 To Columns.Count - 1 Do

	        Col := Columns.Column(i);

	        If Col.Type <> LnColumnType.Inversion Then

	            Col.ReadOnly := False;

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера все столбцы боковика рабочей книги будут доступны
 для редактирования, кроме столбца, отображающего начальные преобразования
 над рядами данных.


См. также:


[ILanerAttributeColumns](ILanerAttributeColumns.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
