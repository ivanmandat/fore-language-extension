# ILanerAttributeColumns.Clear

ILanerAttributeColumns.Clear
-


# ILanerAttributeColumns.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех атрибутов из коллекции.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Rds, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Rubrikator: IRubricator;

	    Attr: IMetaAttributes;

	    LanerAttr: ILanerAttributeColumns;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    Rubrikator := Laner.RubricatorInstance.Rubricator;

	    LanerAttr := Laner.AttributeColumns;

	    If LanerAttr.Count > 0 Then

	        LanerAttr.Clear;

	    End If;

	    // Отображение дополнительного атрибута

	    Attr := Rubrikator.Facts.Attributes;

	    LanerAttr.Add(Attr.FindById("REV"));

	    Laner.EndUpdate;

	End Sub Button1OnClick;


Пример будет выполняться при нажатии на кнопку. Если в коллекции отображаемых
 атрибутов ряда есть элементы, то она будет очищена. Затем в нее будет
 добавлен атрибут «Ревизия».


См. также:


[ILanerAttributeColumns](ILanerAttributeColumns.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
