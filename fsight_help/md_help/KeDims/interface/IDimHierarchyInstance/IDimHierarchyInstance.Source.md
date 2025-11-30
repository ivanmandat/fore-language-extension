# IDimHierarchyInstance.Source

IDimHierarchyInstance.Source
-


# IDimHierarchyInstance.Source


## Синтаксис


Source: [IDimInstance](../IDimInstance/IDimInstance.htm);


## Описание


Свойство Source определяет данные
 справочника, являющегося источником альтернативной иерархии ([IDimHierarchy.Source](../IDimHierarchy/IDimHierarchy.Source.htm)).


## Комментарии


Если значение данного свойства не определено, то данные будут открываться
 с параметрами, заданными для справочника по умолчанию.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1» и компонент MetaAttributesBreadcrumb
 с идентификатором «MetaAttributesBreadcrumb1».


В репозитории должна присутствовать база данных временных рядов с идентификатором
 «DIM_HIERARCHY». В данной базе должен присутствовать пользовательский
 атрибут, ссылающийся на справочник с настроенной альтернативной иерархией.
 Для компонента «MetaAttributesBreadcrumb1» должен быть выбран хотя бы
 один элемент справочника.


Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылки на системные сборки «Metabase», «Dimensions», «Cubes».


			Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("DIM_HIERARCHY").Open(Null) As IRubricatorInstance;

    MetaAttributesBreadcrumb1.Rubricator := RubInst;

End Sub TESTFormOnCreate;

…

Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Items: IBreadcrumbItems;

    Item: IMetaAttributeBreadcrumbItem;

    Attr: IMetaAttribute;

    AttrS: IMetaAttributeSettings;

    AttrSett: IMetaAttributeSetting;

    DimInst, DimInstS: IDimInstance;

    DimHInst: IDimHierarchyInstance;

Begin

    Items := MetaAttributesBreadcrumb1.Items;

    Item := Items.Item(0) As IMetaAttributeBreadcrumbItem;

    Attr := Item.MetaAttribute;

    DimInst := Attr.ValuesObject.Open(Null) As IDimInstance;

    AttrS := MetaAttributesBreadcrumb1.MetaAttributeSettings;

    AttrSett := AttrS.FindByAttribute(Attr);

    AttrSett.DimHierarchy := DimInst.Hierarchies.Item(0);

    // Обращение к справочнику, являющимся источником альтернативной иерархии

    DimHInst := DimInst.Hierarchies.Item(0);

    Debug.WriteLine("Данные справочника-альтернативной иерархии");

    DimInstS := DimHInst.Source;

    Debug.Indent;

    Debug.WriteLine("Идентификатор справочника: " + DimInstS.Ident);

    Debug.WriteLine("Ключ справочника: " + DimInstS.Key.ToString);

    Debug.WriteLine("Наименование справочника: " + DimInstS.Name);

    Debug.Unindent;

End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены данные справочника,
 являющегося альтернативной иерархией: его идентификатор, ключ и наименование.


См. также:


[IDimHierarchyInstance](IDimHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
