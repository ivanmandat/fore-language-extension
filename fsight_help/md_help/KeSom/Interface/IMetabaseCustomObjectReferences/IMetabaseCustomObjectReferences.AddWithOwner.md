# IMetabaseCustomObjectReferences.AddWithOwner

IMetabaseCustomObjectReferences.AddWithOwner
-


# IMetabaseCustomObjectReferences.AddWithOwner


## Синтаксис


AddWithOwner(Object: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);
 Owner: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
 [IMetabaseCustomObjectReference](../IMetabaseCustomObjectReference/IMetabaseCustomObjectReference.htm);


## Параметры


Object. Объект репозитория,
 от которого зависит объект пользовательского класса;


Owner. Объект репозитория,
 являющийся родителем для объекта, который указан в параметре Object.


## Описание


Метод AddWithOwner добавляет
 зависимость от объекта и его родителя.


## Комментарии


Для добавления зависимости только от объекта используйте метод [IMetabaseCustomObjectReferences.Add](IMetabaseCustomObjectReferences.Add.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие объекта
 пользовательского класса с идентификатором «CUSTOM_CLASS_OBJ», объекта
 с идентификатором «MDM_HIE_INDICATOR_D», являющегося дочерним для объекта
 с идентификатором «MDM_INDICATOR_D».


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    pMb: IMetabase;

	    pObject: IMetabaseObject;

	    pCustomObject: IMetabaseCustomObject;

	    pWriter: IMetabaseCustomObjectWriter;

	    pReferences: IMetabaseCustomObjectReferences;

	    pRef: IMetabaseCustomObjectReference;

	Begin

	    // Получаем текущий репозиторий

	    pMb := MetabaseClass.Active;

	    // Получаем объект пользовательского класса

	    pObject := pMb.ItemById("CUSTOM_CLASS_OBJ").Edit;

	    pCustomObject := pObject As IMetabaseCustomObject;

	    // Создаем объект, позволяющий писать данные в объект пользовательского класса

	    pWriter := pCustomObject.CreateWriter;

	    // Получаем коллекцию зависимостей объекта

	    pReferences := pWriter.References;

	    // Очищаем коллекцию зависимостей объекта

	    pReferences.Clear;

	    // Добавляем в коллекцию объект MDM_HIE_INDICATOR_D с его родителем MDM_INDICATOR_D

	    pRef := pReferences.AddWithOwner(pMb.ItemById("MDM_HIE_INDICATOR_D"), pMb.ItemById("MDM_INDICATOR_D"));

	    // Выводим информацию об этом в окно консоли

	    Debug.WriteLine("Объект '" + pRef.Object.Id + "' с родителем '" + pRef.Owner.Id + "' добавлены");

	    // Сохраняем изменения

	    pWriter.Save;

	    pObject.Save;

	End Sub UserProc;


В результате выполнения для объекта пользовательского класса будет добавлена
 зависимость от объекта «MDM_HIE_INDICATOR_D» и его родителя.


См. также:


[IMetabaseCustomObjectReferences](IMetabaseCustomObjectReferences.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
