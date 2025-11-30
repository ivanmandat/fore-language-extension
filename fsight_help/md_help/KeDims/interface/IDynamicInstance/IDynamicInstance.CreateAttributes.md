# IDynamicInstance.CreateAttributes

IDynamicInstance.CreateAttributes
-


# IDynamicInstance.CreateAttributes


## Синтаксис


CreateAttributes: [IDimAttributes](../IDimAttributes/IDimAttributes.htm);


## Описание


Метод CreateAttributes возвращает
 коллекцию атрибутов справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с настроенной динамической загрузкой элементов и с идентификатором
 «DYNDIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

    Attributes: IDimAttributes;

    AttrsInst: IDimAttributesInstance;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemById("DYNDIM").Open(Null) As IDynamicInstance;

    // Получим коллекцию атрибутов справочника

    Attributes := Dim.CreateAttributes;

    // Получим коллекцию экземпляров атрибутов справочника

    AttrsInst := Dim.CreateAttributesInstance;

    // Выведем наименование атрибута и значение атрибута первого элемента

    Debug.WriteLine("Наименование атрибута: " + Attributes.Item(0).Name +

        "; Значение атрибута первого элемента: " + AttrsInst.Item(0).Value(0));

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено наименование
 атрибута и значение данного атрибута первого элемента.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
