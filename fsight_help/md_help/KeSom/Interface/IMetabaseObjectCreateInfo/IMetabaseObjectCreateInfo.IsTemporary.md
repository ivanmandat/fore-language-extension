# IMetabaseObjectCreateInfo.IsTemporary

IMetabaseObjectCreateInfo.IsTemporary
-


# IMetabaseObjectCreateInfo.IsTemporary


## Синтаксис


IsTemporary: Boolean;


## Описание


Свойство IsTemporary определяет
 признак создания временного объекта репозитория.


## Комментарии


Допустимые значения:


	- True. Создаваемый объект
	 будет являться временным объектом. Его будет невозможно сохранить
	 в репозитории. Объект можно будет редактировать, осуществить какие-либо
	 настройки и вычисления;


	- False. По умолчанию.
	 Тип создаваемого объекта определяется свойством [IMetabaseObjectCreateInfo.Permanent](IMetabaseObjectCreateInfo.Permanent.htm).


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
