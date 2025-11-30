# IStyleSheet.Load

IStyleSheet.Load
-


# IStyleSheet.Load


## Синтаксис


Load(Element: [IXMLDOMElement](modxml.chm::/develop.htm));


## Параметры


Element. XML-элемент, в который
 выполняется сохранение таблицы стилей.


## Описание


Метод Load загружает таблицу
 стилей из XML-кода.


## Комментарии


Для сохранения таблицы стилей в XML-код используйте метод [IStyleSheet.Save](IStyleSheet.Save.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие пустой таблицы
 стилей с идентификатором STYLE_TB_NEW. В файловой системе предполагается
 наличие файла «C:\StyleSheet.xml», содержащего таблицу стилей в виде XML-кода.


Добавьте ссылки на системные сборки: Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    styleSheet: IStyleSheet;

	    Doc: FreeThreadedDOMDocument60;

	    Element: IXmlDomElement;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем таблицу стилей

	    styleSheet := mb.ItemById("STYLE_TB_NEW").Edit As IStyleSheet;

	    // Выгружаем таблицу стилей в XML-файл

	    Doc := New FreeThreadedDOMDocument60.Create;

	    Doc.load("C:\StyleSheet.xml");

	    Element := Doc.documentElement;

	    styleSheet.Load(Element);

	    (styleSheet As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера таблица стилей будет загружена из файла
 «C:\StyleSheet.xml».


См. также:


[IStyleSheet](IStyleSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
