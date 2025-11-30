# ILanerAttributes.Add

ILanerAttributes.Add
-


# ILanerAttributes.Add


## Синтаксис


Add(Attribute: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm)):
 Integer;


## Параметры


Attribute. Добавляемый атрибут.


## Описание


Метод Add осуществляет добавление
 атрибута и возвращает его индекс в коллекции.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В репозитории должна присутствовать базы данных временных
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

	    LanerAttr: ILanerAttributes;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    Rubrikator := Laner.RubricatorInstance.Rubricator;

	    Attr := Rubrikator.Facts.Attributes;

	    LanerAttr := Laner.Attributes;

	    If LanerAttr.Count > 0 Then

	        LanerAttr.Clear;

	    End If;

	    LanerAttr.Add(Attr.FindById("REV"));

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера в таблице данных будет отображен дополнительный
 атрибут «Revision» (ревизия).


См. также:


[ILanerAttributes](ILanerAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
