# IEaxWorkbookRubricatorOptionsList.Remove

IEaxWorkbookRubricatorOptionsList.Remove
-


# IEaxWorkbookRubricatorOptionsList.Remove


## Синтаксис


Remove(RubricatorKey: Integer): Boolean;


## Параметры


RubricatorKey. Ключ базы данных
 временных рядов.


## Описание


Метод Remove удаляет настройки
 для указанной базы данных временных рядов.


## Комментарии


Если удаление выполнено успешно, то метод возвращает значение True, в противном случае - False. Для удаления всех настроек
 из коллекции используйте метод [IEaxWorkbookRubricatorOptionsList.Clear](IEaxWorkbookRubricatorOptionsList.Clear.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней компонента LanerBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1»,
 являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных
 рядов.


Добавьте ссылки на системные сборки: Express, Cubes.


	Sub UserProc;

	Var

	    Ea: IEaxAnalyzer;

	    Wb: IEaxWorkbook;

	    WbTree: IEaxWorkbookMetaAttributesTree;

	    Laner: ILaner;

	    Rub: IRubricator;

	    RubKey: Integer;

	    OpList: IEaxWorkbookRubricatorOptionsList;

	    Res: Boolean;

	Begin

	    // Получаем рабочую книгу

	    Ea := UiErAnalyzer1.ErAnalyzer;

	    Wb := Ea As IEaxWorkbook;

	    // Получаем параметры дерева объектов

	    WbTree := Wb.MetaAttributesTree;

	    Laner := Ea.Laner;

	    Rub := Laner.RubricatorInstance.Rubricator;

	    RubKey := (Rub As IMetabaseObjectDescriptor).Key;

	    // Получаем параметры каталогов, связанных с деревом показателей

	    OpList := WbTree.RubricatorsOptions;

	    Res := OpList.Remove(RubKey);

	    If Res Then

	        Debug.WriteLine("Удаление выполнено успешно");

	    Else

	        Debug.WriteLine("Настройки для указанной базы данных временных рядов отсутствуют");

	    End If;

	    (Ea As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут удалены настройки базы данных временных
 рядов для рабочей книги, загруженной в LanerBox.
 Результат удаления будет выведен в окно консоли.


См. также:


[IEaxWorkbookRubricatorOptionsList](IEaxWorkbookRubricatorOptionsList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
