# Работа со справочниками в компонентах DimensionTree/DimensionCombo

Работа со справочниками в компонентах DimensionTree/DimensionCombo
-


# Работа со справочниками в компонентах DimensionTree/DimensionCombo


	Номер статьи: KB000018


## Общие сведения


	Связанные блоки:


		- [среда
		 разработки](Developer.chm::/About_Developing/Start_the_Development_Environment.htm)


## Описание


	Компоненты DimensionTree
	 и DimensionCombo предназначены
	 для отображения данных справочника. DimensionTree
	 отображает данные в виде дерева, а DimensionCombo
	 - в виде раскрывающегося списка. Источником данных для этих компонентов
	 является компонент UiDimension.


	Ниже приведен порядок работы со справочниками в компонентах DimensionTree/DimensionCombo


## Открытие параметрических справочников


	Компонент UiMetabaseObjectParams
	 используется для управления значениями параметров объектов репозитория.
	 При работе с UiDimension его
	 необходимо настроить на параметрический справочник. Выполните следующие
	 действия:


		- в UiDimension добавьте
		 необходимый параметрический справочник;


		- добавленный справочник укажите в свойстве UiObject
		 компонента UiMetabaseObjectParams;


		- добавьте компоненты, которые будут управлять значениями
		 параметров справочника;


		- привяжите добавленные компоненты к управляемым параметрам
		 в компоненте UiMetabaseObjectParams.


	Для применения параметров в процессе работы формы необходимо обновлять
	 справочник:


	UiDimension1.Active := False;

	UiDimension1.Active := True;


## Получение значений указанных атрибутов для отмеченных элементов
	 справочника


	Существует пользовательская форма, содержащая следующие компоненты:
	 Button (наименование «Button1»),
	 Memo (наименование «Memo1»),
	 DimensionTree (наименование
	 «DimensionTree1») и UiDimension,
	 являющийся источником данных для DimensionTree.


	В примере описано получение значений атрибута «NAME» для отмеченных
	 в «DimensionTree1» элементов справочника, загруженного в UiDimension.
	 Пример выполняется при нажатии кнопки «Button1».


		Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    DimInstance: IDimInstance;

		    SelectedElements: IDimElementArray; //коллекция отмеченных элементов

		    Attribute: IDimAttributeInstance; //атрибут, значение которого необходимо получить

		    ElementIndex, ElementCount: Integer;

		    DimensionElement: Integer;

		Begin

		    DimInstance := DimensionTree1.Dimension.DimInstance;

		    Attribute := DimInstance.Attributes.FindById("NAME");

		    SelectedElements := DimensionTree1.Selection.SelectedElementArray(NULL);

		    ElementCount := SelectedElements.Count - 1;

		    For ElementIndex := 0 To ElementCount Do

		        DimensionElement := SelectedElements.Element(ElementIndex);

		        Memo1.Lines.Add(Attribute.Value(DimensionElement) As String);

		    End For;

		End Sub Button1OnClick;


	После выполнения примера в компонент «Memo1» будет добавлено значение
	 атрибута «NAME» для каждого отмеченного элемента.


## Получение индекса элемента по указанному значению его атрибута


	Существует пользовательская форма, содержащая следующие компоненты:
	 Button (наименование «Button1»),
	 Memo (наименование «Memo1»),
	 DimensionTree (наименование
	 «DimensionTree1») и UiDimension,
	 являющийся источником данных для DimensionTree.


	В примере описано получение индекса элемента справочника, отображаемого
	 в компоненте «DimensionTree1». Индекс элемента будет получен по значению
	 указанного атрибута. Пример выполняется при нажатии кнопки «Button1».


		Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    DimInstance: IDimInstance;

		    Attributes: IDimAttributesInstance;

		    DimensionElement, //индекс найденного элемента справочника

		    AtIndex: Integer; //индекс атрибута, по которому будем искать

		    AtValue: Variant; //значение атрибута, по которому будем искать

		Begin

		    AtIndex := 1;

		    AtValue := "Пятый элемент";

		    DimInstance := DimensionTree1.Dimension.DimInstance;

		    Attributes := DimInstance.Attributes;

		    DimensionElement := Attributes.Item(AtIndex).LookupValue(AtValue);

		    Memo1.Lines.Add(DimensionElement.ToString);

		End Sub Button1OnClick;


	После выполнения примера в компонент «Memo1» будет добавлен индекс
	 элемента, у которого значение атрибута с индексом «1» равно «Пятый
	 элемент».


	Вместо Item(AtIndex) можно использовать FindById("NAME")
	 для поиска индекса элемента справочника по указанному значению атрибута
	 с идентификатором «NAME».


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


[DimensionTree](uidevenv.chm::/02_components_constructor_forms/03_components_of_the_access_to_data/dimensiontree.htm)
 | [DimensionCombo](uidevenv.chm::/02_components_constructor_forms/03_components_of_the_access_to_data/dimensioncombo.htm)
 | [UiDimension](uidevenv.chm::/02_components_constructor_forms/03_components_of_the_access_to_data/uidimension.htm)
 | [UiMetabaseObjectParams](uidevenv.chm::/02_components_constructor_forms/03_components_of_the_access_to_data/uimetabaseobjectparams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
