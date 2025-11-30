# IRubricatorFactorExecutor

IRubricatorFactorExecutor
-


# IRubricatorFactorExecutor


Сборка: Cubes;


## Описание


Интерфейс IRubricatorFactorExecutor
 содержит свойства и методы для расчета временных рядов.


## Иерархия наследования


           [IRubricatorFactorIO](../IRubricatorFactorIO/IRubricatorFactorIO.htm)


           IRubricatorFactorExecutor


## Комментарии


При извлечении данных из базы данных временных рядов, если в [FactDataId](../IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm) указаны групповые атрибуты,
 то значения для них при получении из матрицы-результата (интерфейс [IRubricatorExecuteResult](../IRubricatorExecuteResult/IRubricatorExecuteResult.htm)) берутся
 из специальной координаты (с исключенными координатами по свободным атрибутам
 группы). Аналогично при присваивании значения в матрицу это значение должно
 попадать в специальную координату.


Для работы с группой атрибутов предназначен интерфейс [IMetaAttributeGroup](KeRds.chm::/Interface/IMetaAttributeGroup/IMetaAttributeGroup.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [PreferredMatrixType](IRubricatorFactorExecutor.PreferredMatrixType.htm)


		 Свойство PreferredMatrixType
		 определяет тип результирующей матрицы.


		 ![](../../Property_Image.gif)
		 [UseDeduplication](IRubricatorFactorExecutor.UseDeduplication.htm)


		 Свойство UseDeduplication
		 определяет, поддерживает ли база данных временных рядов [дедупликацию](UiNav.chm::/Glossary.htm#deduplicatio).


		 ![](../../Property_Image.gif)
		 [UseDwarf](IRubricatorFactorExecutor.UseDwarf.htm)


		 Свойство UseDwarf определяет,
		 использовать ли оптимизацию при загрузке данных базы данных временных
		 рядов в память.


		 ![](../../Property_Image.gif)
		 [WhereIsDeleted](IRubricatorFactorExecutor.WhereIsDeleted.htm)


		 Свойство WhereIsDeleted
		 определяет, извлекать ли данные удаленных рядов.


		 ![](../../Property_Image.gif)
		 [WhereIsEmpty](IRubricatorFactorExecutor.WhereIsEmpty.htm)


		 Свойство WhereIsEmpty
		 определяет, извлекать ли данные пустых рядов.


## Свойства, унаследованные от [IRubricatorFactorIO](../IRubricatorFactorIO/IRubricatorFactorIO.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalendarSubstituteKey](../IRubricatorFactorIO/IRubricatorFactorIO.CalendarSubstituteKey.htm)


		 Свойство CalendarSubstituteKey
		 определяет ключ календарного справочника, используемого для извлечения/сохранения
		 данных.


		 ![](../../Property_Image.gif)
		 [Dependencies](../IRubricatorFactorIO/IRubricatorFactorIO.Dependencies.htm)


		 Свойство Dependencies
		 определяет, сохранять/извлекать ли данные по зависимостям показателей.


		 ![](../../Property_Image.gif)
		 [FactDataId](../IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm)


		 Свойство FactDataId
		 определяет идентификаторы атрибутов показателей, значения по которым
		 необходимо загрузить либо сохранить.


		 ![](../../Property_Image.gif)
		 [FactDataKind](../IRubricatorFactorIO/IRubricatorFactorIO.FactDataKind.htm)


		 Свойство FactDataKind
		 определяет тип атрибута показателей, значения по которому необходимо
		 загрузить либо сохранить.


		 ![](../../Property_Image.gif)
		 [Factor](../IRubricatorFactorIO/IRubricatorFactorIO.Factor.htm)


		 Свойство Factor возвращает
		 данные показателя. Свойство не поддерживается.


		 ![](../../Property_Image.gif)
		 [MultipleFactors](../IRubricatorFactorIO/IRubricatorFactorIO.MultipleFactors.htm)


		 Свойство MultipleFactors
		 определяет возможность сохранения или извлечения данных по нескольким
		 показателям.


		 ![](../../Property_Image.gif)
		 [Rubricator](../IRubricatorFactorIO/IRubricatorFactorIO.Rubricator.htm)


		 Свойство Rubricator
		 возвращает данные базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [ScenarioSubstituteKey](../IRubricatorFactorIO/IRubricatorFactorIO.ScenarioSubstituteKey.htm)


		 Свойство ScenarioSubstituteKey
		 определяет ключ сценария, используемого для извлечения/сохранения
		 данных.


		 ![](../../Property_Image.gif)
		 [ValidationExecKey](../IRubricatorFactorIO/IRubricatorFactorIO.ValidationExecKey.htm)


		 Свойство ValidationExecKey
		 определяет ключ выполнения валидации.


		 ![](../../Property_Image.gif)
		 [ValidationValues](../IRubricatorFactorIO/IRubricatorFactorIO.ValidationValues.htm)


		 Свойство ValidationValues
		 определяет возможность сохранения или извлечения данных по валидациям.


		 ![](../../Property_Image.gif)
		 [ValidationValuesByScenario](../IRubricatorFactorIO/IRubricatorFactorIO.ValidationValuesByScenario.htm)


		 Свойство ValidationValuesByScenario
		 определяет возможность сохранения/извлечения данных по
		 валидациям в измерении сценариев.


		 ![](../../Property_Image.gif)
		 [ValueId](../IRubricatorFactorIO/IRubricatorFactorIO.ValueId.htm)


		 Свойство ValueId определяет
		 идентификаторы атрибутов наблюдений, значения по которым необходимо
		 загрузить либо сохранить.


		 ![](../../Property_Image.gif)
		 [ValueKind](../IRubricatorFactorIO/IRubricatorFactorIO.ValueKind.htm)


		 Свойство ValueKind
		 определяет тип атрибута наблюдений, значения по которому необходимо
		 загрузить либо сохранить.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AsCubeExecutor](IRubricatorFactorExecutor.AsCubeExecutor.htm)


		 Метод AsCubeExecutor
		 позволяет произвести расчет временного ряда, как матрицы куба.


		 ![](../../Sub_Image.gif)
		 [SetAttrCombination](IRubricatorFactorExecutor.SetAttrCombination.htm)


		 Метод SetAttrCombination
		 задает сочетание атрибутов, по которым будет проходить извлечение
		 данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [SetCompoundFactorKeys](IRubricatorFactorExecutor.SetCompoundFactorKeys.htm)


		 Метод SetCompoundFactorKeys
		 задает составные ключи для временных рядов, которые должны быть
		 рассчитаны.


		 ![](../../Sub_Image.gif)
		 [SetFactorKeys](IRubricatorFactorExecutor.SetFactorKeys.htm)


		 Метод SetFactorKeys
		 определяет ключи временных рядов, которые должны быть рассчитаны.


		 ![](../../Sub_Image.gif)
		 [WhereRevisionBetween](IRubricatorFactorExecutor.WhereRevisionBetween.htm)


		 Метод WhereRevisionBetween
		 осуществляет расчет временных рядов, между двумя ревизиями.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
