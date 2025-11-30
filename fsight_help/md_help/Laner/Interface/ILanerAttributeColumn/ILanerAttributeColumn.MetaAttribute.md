# ILanerAttributeColumn.MetaAttribute

ILanerAttributeColumn.MetaAttribute
-


# ILanerAttributeColumn.MetaAttribute


## Синтаксис


MetaAttribute: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);


## Описание


Свойство MetaAttribute возвращает
 отображаемый атрибут.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 Memo, TabSheetBox, UiErAnalyzer с наименованиями Button1, Memo1, TabSheetBox1
 и UiErAnalyzer1 соответственно. UiErAnalyzer1 является источником данных
 для TabSheetBox1. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Collections, Express, ExtCtrls,
 Forms, Laner, Rds, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanerAttr: ILanerAttributeColumns;

	    LanerA: ILanerAttributeColumn;

	    i: Integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    LanerAttr := Laner.AttributeColumns;

	    If LanerAttr.Count = 0

	        Then

	        Memo1.Lines.Add("Для рядов не определены дополнительные отображаемые атрибуты");

	        Else

	        For i := 0 To LanerAttr.Count - 1 Do

	            LanerA := LanerAttr.Item(i);

	            Memo1.Lines.Add("Наименование атрибута: " + LanerA.MetaAttribute.Name);

	            Memo1.Lines.Add("    Атрибут только для чтения: " + LanerA.ReadOnly.ToString);

	        End For;

	    End If;

	End Sub Button1OnClick;


После выполнения примера в компонент Memo будут выведены наименования
 дополнительных отображаемых атрибутов и их доступность для редактирования.


См. также:


[ILanerAttributeColumn](ILanerAttributeColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
