# IMetabaseUpdateObjectNode.IncludeData

IMetabaseUpdateObjectNode.IncludeData
-


# IMetabaseUpdateObjectNode.IncludeData


## Синтаксис


IncludeData: Boolean;


## Описание


Свойство IncludeData определяет
 признак включения данных объекта в обновление.


## Комментарии


Если значение свойства True,
 то данные объекта будут включены в обновление, при значении False
 - нет.


Свойство актуально только для таблиц и справочников НСИ. При изменении
 значения данного свойства меняется значение свойства [NodeType](../IMetabaseUpdateNode/IMetabaseUpdateNode.NodeType.htm)
 с DataObject на Object
 (при изменении значения IncludeData
 с True на False)
 и наоборот. По умолчанию свойство имеет значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «Table».


			Sub UserProc;

Var

    Mb: IMetabase;

    Upd: IMetabaseUpdate;

    Node: IMetabaseUpdateObjectNode;

Begin

    Mb := MetabaseClass.Active;

    Upd := Mb.CreateUpdate;

    Node := Upd.RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    Node.Object := Mb.ItemById("Table");

    Node.IncludeData := False;

    Upd.SaveToFileNF("c:\temp\Update1.pefx");

End Sub UserProc;


При выполнении примера будет создано новое обновление. В обновление
 будет включена таблица, данные таблицы при этом в обновление не включаются.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)
 | [MetabaseUpdateNodeType](../../Enums/MetabaseUpdateNodeType.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
