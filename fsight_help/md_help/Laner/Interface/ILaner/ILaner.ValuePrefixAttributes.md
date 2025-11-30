# ILaner.ValuePrefixAttributes

ILaner.ValuePrefixAttributes
-


# ILaner.ValuePrefixAttributes


## Синтаксис


ValuePrefixAttributes: [ILanerCellAttributes](../ILanerCellAttributes/ILanerCellAttributes.htm);


## Описание


Свойство ValuePrefixAttributes
 возвращает коллекцию атрибутов, используемых для формирования префикса
 наблюдений ряда.


## Комментарии


Префикс отображается слева от наблюдения ряда. Префикс и наблюдение
 разделены пробелом. В качестве значения префикса используется значение
 заданного атрибута. Если задано несколько атрибутов, то их значения отображаются
 через запятую.


Для задания атрибутов, используемых для формирования суффикса и комментария
 наблюдений ряда, используйте свойства [ILaner.ValueSuffixAttributes](ILaner.ValueSuffixAttributes.htm)
 и [ILaner.CommentAttributes](ILaner.CommentAttributes.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором «WORKBOOK_PREFIX», содержащей несколько рядов.
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

	    PrefixAttr: ILanerCellAttributes;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_PREFIX").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем коллекцию атрибутов префикса

	    PrefixAttr := Laner.ValuePrefixAttributes;

	    // Очищаем коллекцию

	    PrefixAttr.Clear;

	    // Добавляем атрибут "INDICATOR" в коллекцию атрибутов префикса

	    PrefixAttr.Add("INDICATOR", LnAttributeType.Fact);

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера для наблюдений в рабочей книге будет
 добавлен префикс, определяемый пользовательским атрибутом рядов «INDICATOR».


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
