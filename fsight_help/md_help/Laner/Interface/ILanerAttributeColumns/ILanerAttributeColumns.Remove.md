# ILanerAttributeColumns.Remove

ILanerAttributeColumns.Remove
-


# ILanerAttributeColumns.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index.
 Индекс атрибута в коллекции.


## Описание


Метод Remove осуществляет удаление
 атрибута из коллекции по его индексу.


## Комментарии


Метод возвращает True в случае
 удачного удаления.


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

	    LanerAttr.Remove(0);

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера будет удален первый элемент из коллекции отображаемых
 атрибутов.


См. также:


[ILanerAttributeColumns](ILanerAttributeColumns.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
