# IMetaDictionaryTranslations.Locale

IMetaDictionaryTranslations.Locale
-


# IMetaDictionaryTranslations.Locale


## Синтаксис


Locale(i: Integer): [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm);


## Параметры


i.Индекс
 настройки в коллекции.


## Описание


Свойство Locale возвращает уникальный
 числовой идентификатор языка, для которого предназначена настройка с указанным
 индексом.


## Комментарии


Значение параметра i должно
 быть неотрицательным числом, но меньше значения свойства [IMetaDictionaryTranslations.LocalesCount](IMetaDictionaryTranslations.LocalesCount.htm).
 Индекс первого метода в коллекции - «0», последнего - «[IMetaDictionaryTranslations.LocalesCount](IMetaDictionaryTranslations.LocalesCount.htm)
 - 1». Нумерация индексов - сплошная.


Свойство доступно только для чтения.


## Пример


Использование свойства приведено в примере для [IMetaAttributeTranslations.Name](../IMetaAttributeTranslations/IMetaAttributeTranslations.Name.htm).


См. также:


[IMetaDictionaryTranslations](IMetaDictionaryTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
