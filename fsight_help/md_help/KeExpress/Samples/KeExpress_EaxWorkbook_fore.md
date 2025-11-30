# Сохранение и загрузка настроек дерева объектов рабочей книги

Сохранение и загрузка настроек дерева объектов рабочей книги
-


# Сохранение и загрузка настроек дерева объектов рабочей книги


Для рабочей книги базы данных временных рядов доступна загрузка и сохранение
 ее настроек и настроек [дерева
 показателей](UiDw.chm::/Purpose/UiDw_Purpose_Object.htm).


Сохраняются/загружаются следующие настройки:


	- атрибуты и их порядок;


	- параметры фильтрации каждого атрибута;


	- порядок сортировки для каждого атрибута;


	- наименование уровней для измерений атрибутов;


	- установленная альтернативная иерархия;


	- параметры панели «[Результаты
	 вычислений](UiDw.chm::/Workbook/UiDw_Description.htm)».


Настройки сохраняются только для тех баз данных временных рядов, ряды
 которых используются в рабочей книге.


## Описание примера


Для выполнения примера требуется форма, на которой расположены:


	- кнопка «Сохранить» с
	 идентификатором «SaveButton»;


	- кнопка «Загрузить» с
	 идентификатором «LoadButton»;


	- компонент LanerBox;


	- компонент LanerResultsBox;


	- компонент UiErAnalyzer с наименованием «UiErAnalyzer1». В данный
	 компонент загружена рабочая книга базы данных временных рядов и он
	 является источником данных для компонентов LanerBox и LanerResultsBox;


	- компонент MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
	 Данный компонент должен использовать ту же базу данных временных рядов,
	 что и рабочая книга, загруженная в «UiErAnalyzer1»;


	- компонент MetaAttributesTreeList, связанный с «MetaAttributesBreadcrumb1».


Добавьте ссылки на системные сборки: Metabase, Express, Xml, Cubes.


При нажатии кнопки «Сохранить»
 будет выполняться сохранение настроек рабочей книги, а при нажатии кнопки
 «Загрузить» - загрузка настроек.


## Процедура сохранения настроек


Данная процедура является обработчиком события OnClick для кнопки «SaveButton».


	Sub SaveButtonOnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Doc: FreeThreadedDOMDocument60;

	    Element: IXmlDomElement;

	    Ea: IEaxAnalyzer;

	    Wb: IEaxWorkbook;

	    WbTree: IEaxWorkbookMetaAttributesTree;

	    Rub: IRubricator;

	    OpList: IEaxWorkbookRubricatorOptionsList;

	    Options: IEaxWorkbookRubricatorOptions;

	    Statistics: IEaxWorkbookStatistics;

	Begin

	    // Сохраняем настройки MetaAttributesBreadcrumb1 в XML

	    Doc := New FreeThreadedDOMDocument60.Create;

	    Element := Doc.createElement("Breadcrumb");

	    MetaAttributesBreadcrumb1.SaveState(Element);

	    Doc.appendChild(Element);

	    // Получаем рабочую книгу

	    Ea := UiErAnalyzer1.ErAnalyzer;

	    Wb := Ea As IEaxWorkbook;

	    // Получаем параметры дерева объектов

	    WbTree := Wb.MetaAttributesTree;

	    Rub := MetaAttributesBreadcrumb1.Rubricator.Rubricator;

	    // Получаем параметры каталога, связанного с деревом объектов

	    OpList := WbTree.RubricatorsOptions;

	    // Очищаем параметры

	    OpList.Clear;

	    If Options = Null Then

	        Options := OpList.Add(Rub As IMetabaseObjectDescriptor);

	        Debug.WriteLine("База данных временных рядов: " + Options.RubricatorObject.Name);

	    End If;

	    // Устанавливаем параметры дерева показателей

	    Options.HierarchyAttributes := Doc.xml;

	    // Задаем параметры панели "Результаты расчёта"

	    Statistics := Wb.Statistics;

	    Statistics.Enabled := True;

	    Statistics.Visible := False;

	    // Сохраняем рабочую книгу

	    (Ea As IMetabaseObject).Save;

	End Sub SaveButtonOnClick;


После выполнения примера сохраняются все настройки, установленные для
 рабочей книги, загруженной в LanerBox.


## Процедура загрузки настроек


Данная процедура является обработчиком события OnClick для кнопки «LoadButton».


	Sub LoadButtonOnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Rub: IRubricator;

	    RubKey: Integer;

	    Doc: FreeThreadedDOMDocument60;

	    Element: IXmlDomElement;

	    Ea: IEaxAnalyzer;

	    Wb: IEaxWorkbook;

	    WbTree: IEaxWorkbookMetaAttributesTree;

	    OpList: IEaxWorkbookRubricatorOptionsList;

	    Options: IEaxWorkbookRubricatorOptions;

	Begin

	    // Получаем базу данных временных рядов,

	    // связанную с MetaAttributesBreadcrumb1

	    Rub := MetaAttributesBreadcrumb1.Rubricator.Rubricator;

	    RubKey := (Rub As IMetabaseObjectDescriptor).Key;

	    // Получаем рабочую книгу

	    Ea := UiErAnalyzer1.ErAnalyzer;

	    Wb := Ea As IEaxWorkbook;

	    // Получаем параметры дерева объектов

	    WbTree := Wb.MetaAttributesTree;

	    // Получаем параметры каталога, связанного с деревом объектов

	    OpList := WbTree.RubricatorsOptions;

	    Options := OpList.Item(RubKey);

	    // Загружаем из рабочей книги сохраненные параметры MetaAttributesBreadcrumb1

	    If Options <> Null Then

	        Doc := New FreeThreadedDOMDocument60.Create;

	        If (Doc.loadXML(Options.HierarchyAttributes)) Then

	            Element := Doc.selectSingleNode("Breadcrumb") As IXmlDomElement;

	            If (Element <> Null) Then

	                MetaAttributesBreadcrumb1.LoadState(Element);

	            End If;

	        Else

	            Debug.WriteLine("Ошибка при загрузке xml");

	        End If;

	    End If;

	    // Загружаем из рабочей книги сохраненные параметры панели "Результаты расчёта"

	    LanerResultsBox1.ContainerVisible(LanerBoxContainerType.Results) := Wb.Statistics.Visible;

	End Sub LoadButtonOnClick;


После выполнения примера для рабочей книги, загруженной в LanerBox,
 загружаются все сохраненные настройки.


См. также:


[Примеры](Example_main.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
