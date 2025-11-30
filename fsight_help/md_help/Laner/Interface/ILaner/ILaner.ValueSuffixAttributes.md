# ILaner.ValueSuffixAttributes

ILaner.ValueSuffixAttributes
-


# ILaner.ValueSuffixAttributes


## Синтаксис


ValueSuffixAttributes: [ILanerCellAttributes](../ILanerCellAttributes/ILanerCellAttributes.htm);


## Описание


Свойство ValueSuffixAttributes
 возвращает коллекцию атрибутов, используемых для формирования суффикса
 наблюдений ряда.


## Комментарии


Суффикс отображается справа от наблюдения ряда. Суффикс и наблюдение
 разделены пробелом. В качестве значения суффикса используется значение
 заданного атрибута. Если задано несколько атрибутов, то их значения отображаются
 через запятую.


Для задания атрибутов, используемых для формирования префикса и комментария
 наблюдений ряда, используйте свойства [ILaner.ValuePrefixAttributes](ILaner.ValuePrefixAttributes.htm)
 и [ILaner.CommentAttributes](ILaner.CommentAttributes.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором «WORKBOOK_SUFFIX», содержащей несколько рядов.
 Данная рабочая книга должна использовать в качестве источника данных базу
 данных временных рядов, содержащую обязательный атрибут рядов с идентификатором
 «INDICATOR».


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    SuffixAttr, CommentAttr: ILanerCellAttributes;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SUFFIX").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем коллекцию атрибутов суффикса

	    SuffixAttr := Laner.ValueSuffixAttributes;

	    // Очищаем коллекцию

	    SuffixAttr.Clear;

	    // Добавляем атрибут "INDICATOR" в коллекцию атрибутов суффикса

	    SuffixAttr.Add("INDICATOR", LnAttributeType.Fact);

	    // Получаем коллекцию атрибутов комментария

	    CommentAttr := Laner.CommentAttributes;

	    // Очищаем коллекцию

	    CommentAttr.Clear;

	    // Добавляем атрибут "DT" (дата) в коллекцию атрибутов комментария

	    CommentAttr.Add("DT", LnAttributeType.Value);

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера для наблюдений в рабочей книге будут
 добавлены:


	- Суффикс, определяемый пользовательским атрибутом рядов «INDICATOR».


	- Комментарий значения ряда, определяемый системным атрибутом
	 наблюдений «DT» (дата).


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
