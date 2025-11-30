# IMetabaseObjectDescriptor.Edit

IMetabaseObjectDescriptor.Edit
-


# IMetabaseObjectDescriptor.Edit


## Синтаксис


		Edit: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Описание


Метод Edit открывает объект
 на редактирование.


## Комментарии


После вызова метода будет доступна на редактирование как структура объекта,
 так и его описание.


Для сохранения изменений структуры объекта используется метод [IMetabaseObject.Save](../IMetabaseObject/IMetabaseObject.Save.htm).
 Для сохранения описания объекта используется метод [IMetabaseObjectDescriptor.SaveDescriptor](IMetabaseObjectDescriptor.SaveDescriptor.htm).
 При сохранении структуры объекта, также сохраняется и его описание.


Если текущий объект является [ярлыком](IMetabaseObjectDescriptor.IsShortcut.htm)
 на объект, то при редактировании ярлыка также будет открыт на редактирование
 соответствующий объект. Приведите результат выполнения метода Edit
 к интерфейсу, отвечающему за соответствующий тип объектов, чтобы изменить
 необходимые параметры или структуру. Если текущий объект является [ярлыком
 на объект из другого репозитория](IMetabaseObjectDescriptor.IsLink.htm), то редактирование ярлыка не позволит
 изменить структуру объекта в виду имеющихся особенностей реализации. При
 удалении ярлыка соответствующий объект репозитория не удаляется. Различные
 варианты работы с ярлыками смотрите в примерах в подразделе «[Работа
 с ярлыком](../../Examples/Work_with_Shortcut.htm)».


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)
 | [IMetabaseObjectDescriptor.EditDescriptor](IMetabaseObjectDescriptor.EditDescriptor.htm)
 | [IMetabaseObject.Save](../IMetabaseObject/IMetabaseObject.Save.htm)
 | [IMetabaseObjectDescriptor.SaveDescriptor](IMetabaseObjectDescriptor.SaveDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
