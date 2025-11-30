# MetaAttributeTag

MetaAttributeTag
-


# MetaAttributeTag


## Описание


Перечисление MetaAttributeTag
 содержит виды атрибута системного справочника.


Используется следующими свойствами:


	- [IMetaAttribute.Tag](../Interface/IMetaAttribute/IMetaAttribute.Tag.htm);


	- [IRubricatorCreatorBinding.Tag](KeCubes.chm::/Interface/IRubricatorCreatorBinding/IRubricatorCreatorBinding.Tag.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Вид не определен.


		 1
		 Key. Ключ.


		 2
		 Index. Ключ для множественных
		 значений.


		 3
		 Revision. Ключ ревизии.


		 4
		 Factor. Фактор.


		 5
		 CalendarLevel. Уровень
		 календаря.


		 6
		 CalendarDate. Дата.


		 7
		 Scenario. Сценарий.


		 8
		 Unit. Единицы измерения.


		 9
		 Value. Значение.


		 10
		 Name. Наименование.


		 11
		 User. Пользователь.


		 12
		 Object. Объект.


		 13
		 Comment. Комментарий.


		 14
		 ID. Идентификатор (мнемоника).


		 15
		 SD. Ключ дескриптора
		 безопасности.


		 16
		 Kind. Признак (метка
		 ревизии).


		 17
		 DeleteMark. Атрибут,
		 предназначенный для пометки удаленного ряда.


		 18
		 Parent. Владелец дочерних.


		 19
		 ByScenario. Признак
		 правила, рассчитанного в измерении сценариев.


		 20
		 EmptyMark. Признак
		 пустого ряда.


## Комментарии


EmptyMark. Если у показателя
 все значения в БД на актуальную ревизию являются пустыми (отсутствуют
 или равны Null), то у него может
 быть установлен признак пустоты. Новый показатель считается пустым, пока
 в него не сохранили данные. В базе данных временных рядов присутствует
 признак пустоты, если [IRubricator.HasEmptyAttribute](KeCubes.chm::/Interface/IRubricator/IRubricator.HasEmptyAttribute.htm)
 = True. Для обновления признака пустоты показателей используйте
 метод [IRubricatorInstance.RegenerateEmpty](KeCubes.chm::/Interface/IRubricatorInstance/IRubricatorInstance.RegenerateEmpty.htm).


См. также:


[Перечисления сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
