# ILanerAttributes.FindById

ILanerAttributes.FindById
-


# ILanerAttributes.FindById


## Синтаксис


FindById(Id: String): [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);


## Параметры


Id. Идентификатор атрибута.


## Описание


Метод FindById осуществляет
 поиск атрибута в коллекции по идентификатору и возвращает объект, содержащий
 атрибут в случае удачного поиска.


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

	    LanerAttr: ILanerAttributes;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    Rubrikator := Laner.RubricatorInstance.Rubricator;

	    Attr := Rubrikator.Facts.Attributes;

	    LanerAttr := Laner.Attributes;

	    If LanerAttr.FindById("REV") <> Null Then

	        LanerAttr.Add(Attr.FindById("REV"));

	    End If;

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера будет отображен дополнительный атрибут «Revision»
 (ревизия), если в данный момент он не отображается.


См. также:


[ILanerAttributes](ILanerAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
