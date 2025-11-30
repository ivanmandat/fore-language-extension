# IDimHierarchyInstance.Original

IDimHierarchyInstance.Original
-


# IDimHierarchyInstance.Original


## Синтаксис


Original: [IDimInstance](../IDimInstance/IDimInstance.htm);


## Описание


Свойство Original возвращает
 данные основного справочника.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button» и справочника НСИ с идентификатором
 «DICT», для которого настроена [альтернативная
 иерархия](UiNavObj.chm::/reference_book/UiMd_reference_book_Hierarchy.htm). Справочник НСИ располагается в репозитории
 в идентификатором «NSI».


Добавьте ссылки на системные сборки «Metabase», «Dimensions».


Пример является обработчиком события OnClick для компонента «Button1».


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    mb: IMetabase;

    DimInstObj, DimInst: IDimInstance;

    DimHInst: IDimHierarchyInstance;

    DimH: IDimHierarchy;

Begin

    mb := MetabaseClass.Active;

    DimInstObj := mb.ItemByIdNamespace("DICT", mb.GetObjectKeyById("NSI")).Open(Null) As IDimInstance;

    DimHInst := DimInstObj.Hierarchies.Item(0);

    Debug.WriteLine("Данные основного справочника");

    DimInst := DimHInst.Original;

    Debug.Indent;

    Debug.WriteLine("Идентификатор справочника: " + DimInst.Ident);

    Debug.WriteLine("Ключ справочника: " + DimInst.Key.ToString);

    Debug.WriteLine("Наименование справочника: " + DimInst.Name);

    Debug.Unindent;

    Debug.WriteLine("Альтернативная иерархия справочника");

    DimH := DimHInst.Hierarchy;

    Debug.Indent;

    Debug.WriteLine("Идентификатор справочника: " + DimH.Id);

    Debug.WriteLine("Ключ справочника: " + DimH.Key.ToString);

    Debug.WriteLine("Наименование справочника: " + DimH.Name);

    Debug.Unindent;

End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены данные по основному
 справочнику и альтернативной иерархии справочника: идентификатор, ключ
 и наименование.


См. также:


[IDimHierarchyInstance](IDimHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
