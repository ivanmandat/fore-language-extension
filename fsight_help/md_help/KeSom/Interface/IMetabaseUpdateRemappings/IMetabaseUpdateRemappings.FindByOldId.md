# IMetabaseUpdateRemappings.FindByOldId

IMetabaseUpdateRemappings.FindByOldId
-


# IMetabaseUpdateRemappings.FindByOldId


## Синтаксис


FindByOldId(ClassId: Integer; Id: String): [IMetabaseUpdateRemapping](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.htm);


## Параметры


ClassId. Индекс класса, которому
 принадлежит элемент;


Id. Ключ элемента в обновлении.


## Описание


Метод FindByOldId выполняет
 поиск параметров сопоставления элемента по его идентификатору и классу
 в обновлении.


## Комментарии


Индексы классов элементов содержатся в перечислении [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


Если параметры не найдены, то метод вернёт значение Null.


## Пример


Пример является пользовательской процедурой, выполняющей поиск указанного
 элемента в коллекции повторных сопоставлений. Параметры процедуры:


	- UpdRemaps. Коллекция
	 повторных сопоставлений элементов в обновлении и в репозитории-приёмнике;


	- ClassId. Индекс класса
	 искомого элемента;


	- ObjId. Идентификатор
	 искомого элемента.


			Sub GetInfo(UpdRemaps: IMetabaseUpdateRemappings; ClassId: Integer; ObjId: String);

Var

    UpdRemap: IMetabaseUpdateRemapping;

Begin

    If Not UpdRemaps.IsEmpty Then

        // Выводим тип повторного сопоставления

        Debug.Write("Тип повторного сопоставления: ");

        Select Case UpdRemaps.Type

            Case MetabaseUpdateRemappingType.Unknown: Debug.WriteLine("неизвестный тип");

            Case MetabaseUpdateRemappingType.Object: Debug.WriteLine("объект репозитория");

            Case MetabaseUpdateRemappingType.Hierarchy: Debug.WriteLine("альтернативная иерархия");

            Case MetabaseUpdateRemappingType.MetafactsAttribute: Debug.WriteLine("атрибуты временных рядов");

            Case MetabaseUpdateRemappingType.MetavalsAttribute: Debug.WriteLine("атрибуты наблюдений");

            Case MetabaseUpdateRemappingType.None: Debug.WriteLine("тип не задан");

        End Select;

    End If;

    // Выполняем поиск повторного сопоставления

    UpdRemap := UpdRemaps.FindByOldId(ClassId, ObjId);

    // Проверяем, найдено ли сопоставление

    If UpdRemap <> Null Then

        // Если сопоставление найдено, то выводим информацию о нём в окно консоли

        Debug.WriteLine("Идентификатор нового объекта: " + UpdRemap.NewId);

        Debug.WriteLine("Идентификатор старого объекта: " + UpdRemap.OldId);

        Debug.WriteLine("Ключ нового объекта: " + UpdRemap.NewKey.ToString);

        Debug.WriteLine("Ключ старого объекта: " + UpdRemap.OldKey.ToString);

    End If;

End Sub GetInfo;


В результате выполнения примера будет выполнен поиск указанного элемента
 в коллекции повторных сопоставлений. Если элемент найден, то в окно консоли
 будет выведена информация о нём.


См. также:


[IMetabaseUpdateRemappings](IMetabaseUpdateRemappings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
