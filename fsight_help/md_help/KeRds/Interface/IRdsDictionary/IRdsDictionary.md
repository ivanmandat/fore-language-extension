# IRdsDictionary

IRdsDictionary
-


# IRdsDictionary


Сборка: Rds;


## Описание


Интерфейс IRdsDictionary содержит
 свойства и методы объекта репозитория «[Справочник НСИ](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Master_RDS.htm)».


## Иерархия наследования


IRdsDictionary


## Комментарии


С системными подчиненными объектами справочника НСИ (основная таблица
 НСИ, процедуры) запрещается выполнять прикладные операции, например, вручную
 добавлять/удалять поля в таблице базы данных. Подобные действия могут
 повлиять на функциональность справочника НСИ. Прикладные операции с дочерними
 объектами справочника НСИ приводят его в неработоспособное состояние и
 справочник перестает поддерживаться.


В справочниках НСИ поддерживаются ключи элементов, входящие в диапазон
 от 0 до 2 млрд.


[![](../../opened.gif)![](../../closed.gif)Ограничения
 справочника НСИ](javascript:TextPopup(this))


		- недоступны:


		-


			- автоматическое обновление;


			- просмотр информации о ссылках на элемент справочника;


			- создание типизированного атрибута справочника.


		- связь по атрибутам может быть
		 создана только с другим справочником НСИ.


[![](../../opened.gif)![](../../closed.gif)Интерфейсы,
 доступные для работы со справочником НСИ](javascript:TextPopup(this))


	с ограничениями:


		- [IRdsDictionaryInstance](../IRdsDictionaryInstance/IRdsDictionaryInstance.htm).
		 Работа с данными справочника;


		- [IRdsDictionaryElements](../IRdsDictionaryElements/IRdsDictionaryElements.htm).
		 Работа с коллекцией элементов справочника;


		- [IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm).
		 Работа с элементом справочника.


	без ограничений:


		- [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm).
		 Доступ к данным атрибутов элемента справочника;


		- [IRdsAttributeInstance](../IRdsAttributeInstance/IRdsAttributeInstance.htm).
		 Работа с атрибутом открытого справочника;


		- [IRdsAttributesInstance](../IRdsAttributesInstance/IRdsAttributesInstance.htm).
		 Работа с коллекцией атрибутов открытого справочника;


		- [IRdsLinksInstance](../IRdsLinksInstance/IRdsLinksInstance.htm).
		 Работа с коллекцией связей открытого справочника;


		- [IRdsLinkInstance](../IRdsLinkInstance/IRdsLinkInstance.htm).
		 Работа со связью открытого справочника;


		- [IRdsDictionaryElementsSearch](../IRdsDictionaryElementsSearch/IRdsDictionaryElementsSearch.htm).
		 Поиск элементов справочника с расширенными настройками поиска.


При создании нового справочника НСИ, справочник создается сразу рабочим
 и готов к использованию.


При создании нового справочника НСИ может потребоваться указание в свойстве
 [Database](IRdsDictionary.Database.htm) базы данных, в которой
 будет создана таблица для справочника. По умолчанию используется база
 данных, которая для репозитория задана в качестве [базы
 данных по-умолчанию](KeSom.chm::/Interface/IMetabase/IMetabase.SpecialObject.htm).


Различные свойства интерфейса IRdsDictionary позволяют расширить функциональность
 создаваемых справочников.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AbacSecured](IRdsDictionary.AbacSecured.htm)
		 Свойство AbacSecured
		 определяет, имеют ли элементы справочника НСИ атрибутные права
		 доступа.


		 ![](../../Property_Image.gif)
		 [Attributes](IRdsDictionary.Attributes.htm)
		 Свойство Attributes
		 возвращает коллекцию атрибутов справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Compound](IRdsDictionary.Compound.htm)
		 Свойство Compound возвращает
		 признак составного справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Database](IRdsDictionary.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой хранятся данные справочника.


		 ![](../../Property_Image.gif)
		 [DatabaseInstance](IRdsDictionary.DatabaseInstance.htm)
		 Свойство DatabaseInstance
		 возвращает содержимое базы данных, в которой хранятся данные справочника
		 НСИ.


		 ![](../../Property_Image.gif)
		 [DefaultElementKey](IRdsDictionary.DefaultElementKey.htm)
		 Свойство DefaultElementKey
		 определяет элемент по умолчанию по его ключу.


		 ![](../../Property_Image.gif)
		 [DerivedFrom](IRdsDictionary.DerivedFrom.htm)
		 Свойство находится в стадии разработки.


		 ![](../../Property_Image.gif)
		 [Distributed](IRdsDictionary.Distributed.htm)
		 Свойство Distributed
		 определяет признак наличия атрибута, содержащего уникальный идентификатор
		 элементов в справочнике НСИ.


		 ![](../../Property_Image.gif)
		 [DynamicDimInstance](IRdsDictionary.DynamicDimInstance.htm)
		 Свойство DynamicDimInstance
		 определяет, используется ли динамическая загрузка элементов справочника
		 НСИ.


		 ![](../../Property_Image.gif)
		 [EditElementCallbackFore](IRdsDictionary.EditElementCallbackFore.htm)
		 Свойство EditElementCallbackFore
		 устанавливает метод для замены стандартного вида диалога «[Свойства
		 элемента справочника](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Element_Card.htm)»
		 на пользовательский в настольном приложении.


		 ![](../../Property_Image.gif)
		 [EditElementCallbackJS](IRdsDictionary.EditElementCallbackJS.htm)
		 Свойство EditElementCallbackJS
		 устанавливает JS-функцию для замены стандартного вида диалога
		 «[Свойства
		 элемента справочника](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Element_Card.htm)»
		 на пользовательский в веб-приложении.


		 ![](../../Property_Image.gif)
		 [ExportSchemas](IRdsDictionary.ExportSchemas.htm)
		 Свойство ExportSchemas
		 возвращает коллекцию схем экспорта справочника НСИ.


		 ![](../../Property_Image.gif)
		 [HasDimMultipleValues](IRdsDictionary.HasDimMultipleValues.htm)
		 Свойство HasDimMultipleValues
		 определяет, будут ли загружаться множественные значения в [IDimAttributeInstance](KeDims.chm::/interface/IDimAttributeInstance/IDimAttributeInstance.htm).


		 ![](../../Property_Image.gif)
		 [HasMandatoryAccess](IRdsDictionary.HasMandatoryAccess.htm)
		 Свойство HasMandatoryAccess
		 определяет, используется ли мандатный контроль доступа для элементов
		 справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Hierarchical](IRdsDictionary.Hierarchical.htm)
		 Свойство Hierarchical
		 определяет признак иерархического справочника.


		 ![](../../Property_Image.gif)
		 [ImportSchema](IRdsDictionary.ImportSchema.htm)
		 Свойство ImportSchema
		 возвращает первую схему импорта из коллекции.


		 ![](../../Property_Image.gif)
		 [ImportSchemas](IRdsDictionary.ImportSchemas.htm)
		 Свойство ImportSchemas
		 возвращает коллекцию схем импорта справочника НСИ.


		 ![](../../Property_Image.gif)
		 [IsBigDictionary](IRdsDictionary.IsBigDictionary.htm)
		 Свойство IsBigDictionary
		 определяет, поддерживает ли справочник большое количество элементов.


		 ![](../../Property_Image.gif)
		 [Levels](IRdsDictionary.Levels.htm)
		 Свойство Levels возвращает
		 коллекцию уровней справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Links](IRdsDictionary.Links.htm)
		 Свойство Links возвращает
		 коллекцию связей справочника НСИ.


		 ![](../../Property_Image.gif)
		 [ManageVisibility](IRdsDictionary.ManageVisibility.htm)
		 Свойство ManageVisibility
		 определяет признак скрытости элементов справочника НСИ.


		 ![](../../Property_Image.gif)
		 [NonUniqueKeys](IRdsDictionary.NonUniqueKeys.htm)
		 Свойство NonUniqueKeys
		 возвращает коллекцию неуникальных ключей справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Params](IRdsDictionary.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров справочника НСИ.


		 ![](../../Property_Image.gif)
		 [RdsDatabaseInstance](IRdsDictionary.RdsDatabaseInstance.htm)
		 Свойство RdsDatabaseInstance
		 возвращает данные репозитория НСИ, в котором хранится справочник.


		 ![](../../Property_Image.gif)
		 [Secured](IRdsDictionary.Secured.htm)
		 Свойство Secured определяет
		 признак управления правами доступа к элементам справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Segments](IRdsDictionary.Segments.htm)
		 Свойство Segments возвращает
		 коллекцию сегментов справочника НСИ.


		 ![](../../Property_Image.gif)
		 [TableName](IRdsDictionary.TableName.htm)
		 Свойство TableName
		 определяет наименование таблицы, в которой хранятся данные справочника.


		 ![](../../Property_Image.gif)
		 [TimeDependency](IRdsDictionary.TimeDependency.htm)
		 Свойство TimeDependency
		 определяет режим, в котором будет формироваться период действия
		 элементов.


		 ![](../../Property_Image.gif)
		 [TimeDependent](IRdsDictionary.TimeDependent.htm)
		 Свойство TimeDependent
		 определяет признак изменения элементов справочника во времени.


		 ![](../../Property_Image.gif)
		 [Translations](IRdsDictionary.Translations.htm)
		 Свойство Translations
		 возвращает коллекцию настроек, содержащих параметры перевода справочники
		 НСИ на различные языки.


		 ![](../../Property_Image.gif)
		 [Type](IRdsDictionary.Type.htm)
		 Свойство Type возвращает
		 тип справочника НСИ.


		 ![](../../Property_Image.gif)
		 [UniqueKeys](IRdsDictionary.UniqueKeys.htm)
		 Свойство UniqueKeys
		 возвращает коллекцию уникальных ключей справочника НСИ.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AssignStructure](IRdsDictionary.AssignStructure.htm)
		 Метод AssignStructure
		 осуществляет установку структуры справочника НСИ в соответствии
		 со структурой указанного справочника.


		 ![](../../Sub_Image.gif)
		 [HasDefaultElement](IRdsDictionary.HasDefaultElement.htm)
		 Метод HasDefaultElement
		 устанавливает наличие элемента по умолчанию в справочнике НСИ.


		 ![](../../Sub_Image.gif)
		 [Open](IRdsDictionary.Open.htm)
		 Метод Open открывает
		 справочник НСИ.


		 ![](../../Sub_Image.gif)
		 [ResetDefaultElement](IRdsDictionary.ResetDefaultElement.htm)
		 Метод ResetDefaultElement
		 сбрасывает установку элемента по умолчанию.


		 ![](../../Sub_Image.gif)
		 [UpdateElementDependencies](IRdsDictionary.UpdateElementDependencies.htm)
		 Метод UpdateElementDependencies
		 обновляет ссылку на элемент «Связь» по ключу.


		 ![](../../Sub_Image.gif)
		 [UpdateElementsDependencies](IRdsDictionary.UpdateElementsDependencies.htm)
		 Метод UpdateElementsDependencies
		 обновляет все ссылки на элемент «Связь».


		 ![](../../Sub_Image.gif)
		 [UpdateSequence](IRdsDictionary.UpdateSequence.htm)
		 Метод UpdateSequence
		 обновляет сиквенс.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm) | [Справочник НСИ](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Master_RDS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
