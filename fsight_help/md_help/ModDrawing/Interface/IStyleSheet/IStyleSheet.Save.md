# IStyleSheet.Save

IStyleSheet.Save
-


# IStyleSheet.Save


## Синтаксис


Save(Element: [IXMLDOMElement](modxml.chm::/develop.htm));


## Параметры


Element. XML-элемент, в который
 выполняется сохранение таблицы стилей.


## Описание


Метод Save сохраняет таблицу
 стилей в виде XML-кода.


## Комментарии


Для загрузки таблицы стилей из XML-кода используйте метод [IStyleSheet.Load](IStyleSheet.Load.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 стилей с идентификатором STYLE_TB.


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

	    styleSheet := mb.ItemById("STYLE_TB").Bind As IStyleSheet;

	    // Выгружаем таблицу стилей в XML-файл

	    Doc := New FreeThreadedDOMDocument60.Create;

	    Element := Doc.createElement("StyleSheet");

	    styleSheet.Save(Element);

	    Doc.appendChild(Element);

	    Doc.save("C:\StyleSheet.xml");

	End Sub UserProc;


В результате выполнения примера таблица стилей будет сохранена в файл
 «C:\StyleSheet.xml».


См. также:


[IStyleSheet](IStyleSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
