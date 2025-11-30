# IDimInstance.NewElementsOrderSetup

IDimInstance.NewElementsOrderSetup
-


# IDimInstance.NewElementsOrderSetup


## Синтаксис


NewElementsOrderSetup: [IDimElementsOrderSetup](../IDimElementsOrderSetup/IDimElementsOrderSetup.htm);


## Описание


Метод NewElementsOrderSetup
 возвращает настройки пользовательской сортировки элементов справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с идентификатором «DIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    OrderSetup: IDimElementsOrderSetup;

    Attribute : IDimAttribute;

    AttrInst: IDimAttributeInstance;

    Iterator: IDimTreeIterator;

    DimInst: IDimInstance;

Begin

    MB := MetabaseClass.Active;

    DimInst := MB.ItemById("DIM").Open(Null) As IDimInstance;

    OrderSetup := DimInst.NewElementsOrderSetup;

    AttrInst := DimInst.Attributes.Item(1);

    Attribute := AttrInst.Attribute;

    // Добавим атрибут в список сортировки

    OrderSetup.Add(Attribute, False);

    Debug.WriteLine("Количество атрибутов
 сортировки: " + OrderSetup.Count.ToString);

    Debug.WriteLine("Сортировка по атрибуту " + Attribute.Name + ", ключ атрибута: "

        + OrderSetup.AttributeKey(0).ToString);

    // Получим итератор на дерево, построенное с учетом сортировки

    Iterator := DimInst.ElementsByOrder(OrderSetup);

    // Определим направление сортировки

    If OrderSetup.ReverseOrder(0) Then

        Debug.WriteLine("Сортировка по убыванию");

        Else

            Debug.WriteLine("Сортировка по возрастанию");

    End If;

    // Выведем элементы
 справочника с учетом сортировки

    While Iterator.HasNext >= 0 Do

        Debug.WriteLine(DimInst.Elements.AttributeValueO(Iterator.GetElement, AttrInst));

    // Если у элемента есть владелец, выведем индекс владельца

        If Iterator.GetParent >= 0 Then

            Debug.WriteLine("Индекс владельца элемента: " + Iterator.GetParent.ToString);

        End If;

    End While;

    // Осуществим переход на начало итератора

    Iterator.ResetIterator;

End Sub UserProc;


В результате выполнения примера будет настроена сортировка элементов
 справочника, после чего будет получен итератор на построенное дерево.
 В окно консоли будет выведена информация о параметрах сортировки и отсортированные
 элементы справочника.


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
