# ILanerCellAttribute.NamingFormat

ILanerCellAttribute.NamingFormat
-


# ILanerCellAttribute.NamingFormat


## Синтаксис


NamingFormat: String;


## Описание


Свойство NamingFormat
 определяет наименование атрибута.


## Комментарии


Для задания типа атрибута используйте свойство [ILanerCellAttribute.Type](ILanerCellAttribute.Type.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором «WORKBOOK_SUFFIX», содержащей несколько рядов.
 Также должны быть заданы атрибуты, для формирования комментариев к наблюдениям
 рядов. Данная рабочая книга должна использовать в качестве источника данных
 базу данных временных рядов, содержащую обязательный атрибут рядов с идентификатором
 «INDICATOR».


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    CommentAttr: ILanerCellAttributes;

	    CellAttr: ILanerCellAttribute;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SUFFIX").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем коллекцию атрибутов комментария

	    CommentAttr := Laner.CommentAttributes;

	    // Получаем первый атрибут из коллекции

	    CellAttr := CommentAttr.Item(0);

	    // Изменяем атрибут, используемый для комментария

	    CellAttr.NamingFormat := "INDICATOR";

	    CellAttr.Type := LnAttributeType.Fact;

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера будет изменен первый атрибут, используемый
 для формирования комментариев к наблюдениям рядов: комментарии будут формироваться
 по значению атрибута «INDICATOR».


См. также:


[ILanerCellAttribute](ILanerCellAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
