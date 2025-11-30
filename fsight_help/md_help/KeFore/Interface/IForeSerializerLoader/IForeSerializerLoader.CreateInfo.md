# IForeSerializerLoader.CreateInfo

IForeSerializerLoader.CreateInfo
-


# IForeSerializerLoader.CreateInfo


## Синтаксис


CreateInfo: [IMetabaseObjectCreateInfo](KeSom.chm::/Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm);


## Описание


Свойство CreateInfo возвращает
 информацию о загружаемом объекте.


## Комментарии


По умолчанию данное свойство возвращает параметры объекта, с которым
 связан данный загрузчик сборок/форм/модулей. В соответствии с данными
 параметрами в репозитории будет создаваться новый объект. Загрузка и сохранение
 осуществляется при вызове одного из методов: [LoadAssembly](IForeSerializerLoader.LoadAssembly.htm),
 [LoadForm](IForeSerializerLoader.LoadForm.htm), [LoadModule](IForeSerializerLoader.LoadModule.htm).
 При необходимости до загрузки в данном свойстве можно изменить параметры
 объекта, который будет создан в репозитории.


## Пример


Пример использования приведен в описании методов [LoadAssembly](IForeSerializerLoader.LoadAssembly.htm),
 [LoadForm](IForeSerializerLoader.LoadForm.htm), [LoadModule](IForeSerializerLoader.LoadModule.htm).


См. также:


[IForeSerializerLoader](IForeSerializerLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
