# ICubeMetaUpdateAdditionalObjectDataSettings.UpdateRdsSequence

ICubeMetaUpdateAdditionalObjectDataSettings.UpdateRdsSequence
-


# ICubeMetaUpdateAdditionalObjectDataSettings.UpdateRdsSequence


## Синтаксис


UpdateRdsSequence: Boolean;


## Описание


Свойство UpdateRdsSequence определяет признак обновления системной последовательности, которая используется для генерации ключей элементов в справочниках НСИ.


## Комментарии


По умолчанию свойству установлено значение False, при этом системная последовательность не обновляется. Если свойству установить значение True, то при копировании справочников НСИ будет обновлено значение системной последовательности. Обновление осуществляется по следующему алгоритму:


-
Определяется максимальное значение ключа элементов справочника НСИ.


-
Определяется максимальное значение версии элементов справочника НСИ.


-
Выбирается максимальное из полученных значений и сравнивается с текущим значением системной последовательности репозитория.


-
Если значение системной последовательности меньше, то оно будет заменено на выбранное максимальное значение.


## Пример


Пример использования данного свойства приведен в примере для свойства [PrerequisiteObjects](../ICubeMetaUpdateEx/ICubeMetaUpdateEx.PrerequisiteObjects.htm).


См. также:


[ICubeMetaUpdateAdditionalObjectDataSettings](ICubeMetaUpdateAdditionalObjectDataSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
