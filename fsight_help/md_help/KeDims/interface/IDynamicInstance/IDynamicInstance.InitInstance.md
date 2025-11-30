# IDynamicInstance.InitInstance

IDynamicInstance.InitInstance
-


# IDynamicInstance.InitInstance


## Синтаксис


InitInstance(Src: [IDimInstance](../IDimInstance/IDimInstance.htm);
 op: [DynamicInstanceOperationsVisibility](../../Enums/DynamicInstanceOperationsVisibility.htm);
 Mark: Variant);


## Параметры


Src. Справочник;


op. Параметр определяет, на
 какие справочники распространяется выполняемая операция;


Mark. Множество, которому будет
 принадлежать справочник.


## Описание


Метод InitInstance инициализирует
 справочник.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с идентификатором «DYNDIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

    DimInst: IDimInstance;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("DYNDIM").Open(Null) As IDimInstance;

    Dim := New DynamicInstance.Create;

    // Инициализируем справочник

    Dim.InitInstance(DimInst, DynamicInstanceOperationsVisibility.Local, "Init");

    // Выведем наименование справочника - источника данных

    Debug.WriteLine("Наименование справочника: " + Dim.RootInstance.Name);

    // Выведем количество атрибутов родительского справочника

    Debug.WriteLine("Атрибутов в родительском справочнике: " +

        Dim.ParentInstance.AttributeCount.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименование
 справочника - источника данных, количество атрибутов в родительском справочнике.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
