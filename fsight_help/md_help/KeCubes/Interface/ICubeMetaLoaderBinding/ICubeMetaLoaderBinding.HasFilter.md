# ICubeMetaLoaderBinding.HasFilter

ICubeMetaLoaderBinding.HasFilter
-


# ICubeMetaLoaderBinding.HasFilter


## Синтаксис


HasFilter: Boolean;


## Описание


Свойство HasFilter возвращает признак наличия созданного фильтра по показателям атрибута.


## Комментарии


Свойство возвращает значение True, если для атрибута создан фильтр показателей и False, если фильтр отсутствует.


Для атрибутов, основанных на справочниках, можно использовать фильтрацию показателей. Для настройки фильтра используется свойство [Filter](ICubeMetaLoaderBinding.Filter.htm). По умолчанию фильтр не создается. Создание фильтра осуществляется при первом обращении к свойству [Filter](ICubeMetaLoaderBinding.Filter.htm). Если нет необходимости использовать фильтр, то необходимо избегать обращения в коде к свойству [Filter](ICubeMetaLoaderBinding.Filter.htm). Для проверки наличия созданного фильтра предназначено данное свойство.


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
