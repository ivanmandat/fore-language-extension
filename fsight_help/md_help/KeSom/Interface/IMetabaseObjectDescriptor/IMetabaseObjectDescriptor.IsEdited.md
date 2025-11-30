# IMetabaseObjectDescriptor.IsEdited

IMetabaseObjectDescriptor.IsEdited
-


# IMetabaseObjectDescriptor.IsEdited


## Синтаксис


		IsEdited: Boolean;


## Описание


Свойство IsEdited возвращает
 признак редактирования описания объекта.


## Комментарии


Свойство вернет значение True
 после того, как был вызван метод [IMetabaseObjectDescriptor.EditDescriptor](IMetabaseObjectDescriptor.EditDescriptor.htm).
 После внесения необходимых изменений для сохранения описания вызовите
 метод [IMetabaseObjectDescriptor.SaveDescriptor](IMetabaseObjectDescriptor.SaveDescriptor.htm),
 при этом описание будет доступно для дальнейшего редактирования и свойство
 IsEdited все также вернет значение
 True. Сброс значения в False
 будет при обнулении ссылки на описание объекта.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
