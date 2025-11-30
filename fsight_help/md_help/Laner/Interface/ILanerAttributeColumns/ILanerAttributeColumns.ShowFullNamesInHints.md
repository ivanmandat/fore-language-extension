# ILanerAttributeColumns.ShowFullNamesInHints

ILanerAttributeColumns.ShowFullNamesInHints
-


# ILanerAttributeColumns.ShowFullNamesInHints


## Синтаксис


ShowFullNamesInHints: Boolean;


## Описание


Свойство ShowFullNamesInHints
 определяет, показывать ли иерархию значений атрибута.


## Комментарии


Иерархия отображается во всплывающей подсказке при наведении указателя
 мыши на ячейку со значением атрибута.


Допустимые значения:


	- True. Отображать иерархию
	 значений атрибута во всплывающей подсказке;


	- False. Не отображать
	 иерархию значений атрибута во всплывающей подсказке.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В компоненте LanerBox должен быть отображен один или
 несколько атрибутов ряда.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    Laner: ILaner;

	    AttrCols: ILanerAttributeColumns;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := Analyzer.Laner;

	    AttrCols := Laner.AttributeColumns;

	    AttrCols.ShowFullNamesInHints := True;

	End Sub Button1OnClick;


После выполнения примера в рабочей книге будет отображаться иерархия
 значений атрибута во всплывающей подсказке.


См. также:


[ILanerAttributeColumns](ILanerAttributeColumns.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
