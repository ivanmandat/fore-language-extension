# UpdateReflectObjectsRightsType

UpdateReflectObjectsRightsType
-


# UpdateReflectObjectsRightsType


## Описание


Перечисление UpdateReflectObjectsRightsType определяет метод переноса прав на объекты репозитория при обновлении.


Используется следующим свойством:


-
[IMetabaseUpdate.ReflectObjectsRights](../Interface/IMetabaseUpdate/IMetabaseUpdate.ReflectObjectsRights.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 AfterAll. Переносить права после выполнения всего обновления.


 1
 Ask. Запрашивать в диалоге после выполнения всего обновления. При обновлении через язык Fore будет генерироваться событие [IMetabaseUpdateProgress.OnAskReflectRights](../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnAskReflectRights.htm), в котором следует обработать конкретные ситуации.


 2
 AfterEach. Переносить права после обновления каждого объекта.


 4
 Never. Не переносить права.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
