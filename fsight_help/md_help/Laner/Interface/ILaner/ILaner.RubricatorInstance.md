# ILaner.RubricatorInstance

ILaner.RubricatorInstance
-


# ILaner.RubricatorInstance


## Синтаксис


RubricatorInstance: [IRubricatorInstance](KeCubes.chm::/Interface/IRubricatorInstance/IRubricatorInstance.htm);


## Описание


Свойство RubricatorInstance
 определяет данные базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Metabase, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Rub: IMetabaseObject;

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    RubInstance: IRubricatorInstance;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    RubInstance := Laner.RubricatorInstance;

	    Rub := RubInstance.Rubricator As IMetabaseObject;

	    Debug.WriteLine(Rub.Name);

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено наименование
 базы данных временных рядов, которому принадлежит рабочая область.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
