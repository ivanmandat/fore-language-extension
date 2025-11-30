# ILaner.ObservationAttributeInComment

ILaner.ObservationAttributeInComment
-


# ILaner.ObservationAttributeInComment


## Синтаксис


ObservationAttributeInComment: String;


## Описание


Свойство ObservationAttributeInComment
 определяет наименование атрибута наблюдения, отображаемого в примечании
 к значениям ряда.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    Laner: ILaner;

	    Tbl: ILanerTable;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := Analyzer.Laner;

	    Laner.BeginUpdate;

	    Laner.ObservationAttributeInComment := "CMT";

	    Tbl := Laner.Execute;

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера в качестве примечания к значениям ряда будет
 отображаться значение атрибута наблюдения «CMT».


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
