# ILaner.UsedRubricators

ILaner.UsedRubricators
-


# ILaner.UsedRubricators


## Синтаксис


UsedRubricators: [IRubricatorInstanceList](KeCubes.chm::/Interface/IRubricatorInstanceList/IRubricatorInstanceList.htm);


## Описание


Свойство UsedRubricators возвращает
 коллекцию баз данных временных рядов, являющихся источниками данных рабочей
 книги.


## Комментарии


Если источниками данных для рабочей книги являются несколько баз данных
 временных рядов, то свойство [ILaner.RubricatorInstance](ILaner.RubricatorInstance.htm)
 вернет последний элемент коллекции UsedRubricators.


## Пример


Для выполнения примера предполагается наличие на форме компонентом Button,
 LanerBox UiErAnalyzer и с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов в рядном режиме.


Добавьте ссылки на системные сборки: Cubes, Metabase.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Laner: ILaner;

	    RubList: IRubricatorInstanceList;

	    i: Integer;

	    RubrInst: IRubricatorInstance;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    RubList := Laner.UsedRubricators;

	    For i := 0 To RubList.Count - 1 Do

	        RubrInst := RubList.Item(i);

	        Debug.WriteLine((RubrInst.Rubricator As IMetabaseObject).Name);

	    End For;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены наименования
 баз данных временных рядов, являющихся источниками данных для загруженной
 рабочей книги.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
