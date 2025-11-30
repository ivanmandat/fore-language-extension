# IRubricatorFactorStorage

IRubricatorFactorStorage
-


# IRubricatorFactorStorage


## Описание


Интерфейс IRubricatorFactorStorage
 содержит свойства и методы для сохранения данных показателя.


## Комментарии


При сохранении данных базы данных временных рядов, если в [FactDataId](../IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm) указаны групповые атрибуты,
 то значения в матрице для сохранения должны содержаться в специальной
 координате (с исключенными координатами по свободным атрибутам группы).


Для работы с группой атрибутов предназначен интерфейс [IMetaAttributeGroup](KeRds.chm::/Interface/IMetaAttributeGroup/IMetaAttributeGroup.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CurrentRevision](IRubricatorFactorStorage.CurrentRevision.htm)
		 Свойство CurrentRevision
		 определяет ревизию, для сохранения данных.


		 ![](../../Property_Image.gif)
		 [DataOverwrite](IRubricatorFactorStorage.DataOverwrite.htm)
		 Свойство DataOverwrite
		 определяет, перезаписывать ли существующие данные.


		 ![](../../Property_Image.gif)
		 [EphemeralFacts](IRubricatorFactorStorage.EphemeralFacts.htm)
		 Свойство EphemeralFacts
		 определяет, сохранять ли новые показатели с признаком удаленности.


		 ![](../../Property_Image.gif)
		 [FactDataMatrix](IRubricatorFactorStorage.FactDataMatrix.htm)
		 Свойство FactDataMatrix
		 определяет сохраняемую матрицу данных.


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
		 [AsCubeStorage](IRubricatorFactorStorage.AsCubeStorage.htm)
		 Метод AsCubeStorage
		 позволяет сохранить данные показателя, как данные куба.


		 ![](../../Sub_Image.gif)
		 [OpenRevision](IRubricatorFactorStorage.OpenRevision.htm)
		 Метод OpenRevision
		 создает новую ревизию для сохранения данных.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
