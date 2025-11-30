# ILanerAttributeColumns.Move

ILanerAttributeColumns.Move
-


# ILanerAttributeColumns.Move


## Синтаксис


Move(IndexFrom: Integer, IndexTo: Integer);


## Параметры


IndexFrom.
 Индекс позиции атрибута, который необходимо переместить.


IndexTo.
 Индекс позиции, в которую необходимо переместить атрибут.


## Описание


Метод Move осуществляет перемещение
 атрибута в коллекции.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. Для рядов рабочей области должно быть настроено отображение
 нескольких дополнительных атрибутов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanerAttr: ILanerAttributeColumns;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    LanerAttr := Laner.AttributeColumns;

	    LanerAttr.Move(0, LanerAttr.Count - 1);

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера первый элемент из коллекции отображаемых атрибутов
 будет перемещен в конец коллекции.


См. также:


[ILanerAttributeColumns](ILanerAttributeColumns.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
