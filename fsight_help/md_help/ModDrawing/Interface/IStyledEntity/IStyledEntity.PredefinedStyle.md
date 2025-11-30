# IStyledEntity.PredefinedStyle

IStyledEntity.PredefinedStyle
-


# IStyledEntity.PredefinedStyle


## Синтаксис


PredefinedStyle(Index: Integer): [IXmlDomElement](modxml.chm::/develop.htm);


## Параметры


Index. Индекс стандартного
 стиля.


## Описание


Свойство PredefinedStyle возвращает
 стандартный стиль в формате XML.


## Комментарии


Для получения индекса стандартного стиля используйте свойство [IStyledEntity.PredefinedStyleIndex](IStyledEntity.PredefinedStyleIndex.htm).


## Пример


Для выполнения примера предполагается наличие
 экспресс-отчёта с идентификатором EAX_STYLE.


Добавьте ссылки на системные сборки: Drawing,
 Express, Metabase, Xml.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IEaxAnalyzer;

	    Entity: IStyledEntity;

	    Index: Integer;

	    Img: IGxImage;

	    Style: IXMLDOMElement;

	    Doc: FreeThreadedDOMDocument60;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Получаем экспресс-отчёт

	    Report := Mb.ItemById("EAX_STYLE").Edit As IEaxAnalyzer;

	    // Получаем стиль таблицы

	    Entity := report.Grid.Style.InternalStyle As IStyledEntity;

	    // Выводим количество стандартных стилей в окно консоли

	    Debug.WriteLine("Количество стандартных стилей: " + entity.PredefinedStyleCount.ToString);

	    // Определяем индекс стандартного стиля

	    Index := 4;

	    Entity.PredefinedStyleIndex := Index;

	    // Получаем изображение, используемое для предварительного просмотра стандартного стиля

	    Img := Entity.PredefinedStylePreview(Index);

	    // Сохраняем изображение, используемое для предварительного просмотра стандартного стиля, в файл формата EMF

	    Img.SaveToFile("C:\Style.emf");

	    // Получаем стандартный стиль в формате XML

	    Style := Entity.PredefinedStyle(Index);

	    // Создаем XML-документ

	    Doc := New FreeThreadedDOMDocument60.Create;

	    // Добавляем стандартный стиль в формате XML в XML-документ

	    Doc.appendChild(Style);

	    // Сохраняем XML-документ

	    Doc.save("C:\Style.xml");

	End Sub


В результате выполнения примера:


	- количество стандартных стилей будет выведено в окно консоли;


	- изображение, используемое для предварительного просмотра стандартного
	 стиля с индексом «4», будет сохранено в файл «C:\Style.emf»;


	- стандартный стиль в формате XML будет сохранён в файл «C:\Style.xml».


См. также:


[IStyledEntity](IStyledEntity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
