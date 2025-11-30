# IDimSelection

IDimSelection
-


# IDimSelection


Сборка: Dimensions;


## Описание


Интерфейс IDimSelection используется
 для работы с отметкой справочника.


## Иерархия наследования


IDimSelection


## Комментарии


Для отметки справочников доступны следующие операции сравнения: сравнение
 на равенство и на неравенство. Данные виды сравнения могут применяться
 для:


	- сравнения по отметке;


	- сравнения с числом.
	 Выполняется по ключу элемента в справочнике;


	- сравнения со строкой.
	 Выполняется по строковому представлению ключа элемента в справочнике.


С примерами сравнения отметки вы можете ознакомиться в разделе «[Сравнение
 отметок справочников](../../Samples/CompareDimSelection.htm)».


Примечание.
 Работа с данным интерфейсом не является потокобезопасной. Если предполагается
 использование его в потоках, описываемых интерфейсом [IForeThread](KeFore.chm::/Interface/IForeThread/IForeThread.htm),
 то на прикладном уровне должна осуществляться блокировка/разблокировка
 доступа. Для этого используются критические секции, описываемые интерфейсом
 [IForeCriticalSection](KeFore.chm::/Interface/IForeCriticalSection/IForeCriticalSection.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalHierarchies](IDimSelection.AdditionalHierarchies.htm)
		 Свойство AdditionalHierarchies
		 возвращает объект для работы с дополнительными альтернативными
		 иерархиями.


		 ![](../../Property_Image.gif)
		 [AdditionalHierarchy](IDimSelection.AdditionalHierarchy.htm)
		 Свойство AdditionalHierarchy
		 возвращает объект для работы с альтернативной иерархией.


		 ![](../../Property_Image.gif)
		 [AllowChangeElementGroup](IDimSelection.AllowChangeElementGroup.htm)
		 Свойство AllowChangeElementGroup
		 управляет возможностью установки группы элементов как через контекстное
		 меню справочника, так и через язык Fore.


		 ![](../../Property_Image.gif)
		 [ApplySelectionSchemaOnlyOnce](IDimSelection.ApplySelectionSchemaOnlyOnce.htm)
		 Свойство ApplySelectionSchemaOnlyOnce
		 определяет признак применения выбранной схемы отметки только при
		 открытии отчета.


		 ![](../../Property_Image.gif)
		 [ApplySelectionSchemaOnRebuild](IDimSelection.ApplySelectionSchemaOnRebuild.htm)
		 Свойство ApplySelectionSchemaOnRebuild
		 определяет, применять ли схему отметки только при перестроении
		 измерения.


		 ![](../../Property_Image.gif)
		 [Dimension](IDimSelection.Dimension.htm)
		 Свойство Dimension
		 возвращает объект, содержащий элементы справочника.


		 ![](../../Property_Image.gif)
		 [Element](IDimSelection.Element.htm)
		 Свойство Element возвращает
		 индекс элемента в справочнике по индексу элемента в отметке.


		 ![](../../Property_Image.gif)
		 [ElementGroup](IDimSelection.ElementGroup.htm)
		 Свойство ElementGroup
		 определяет группу элементов измерения, включающую элементы, которые
		 должны присутствовать в списке доступных.


		 ![](../../Property_Image.gif)
		 [FirstDimElement](IDimSelection.FirstDimElement.htm)
		 Свойство FirstDimElement
		 возвращает первый выделенный элемент справочника.


		 ![](../../Property_Image.gif)
		 [Group](IDimSelection.Group.htm)
		 Свойство Group определяет
		 группу элементов справочника, которая установлена в отметке.


		 ![](../../Property_Image.gif)
		 [Hierarchy](IDimSelection.Hierarchy.htm)
		 Свойство Hierarchy
		 определяет данные альтернативной иерархии элементов справочника.


		 ![](../../Property_Image.gif)
		 [Iterator](IDimSelection.Iterator.htm)
		 Свойство Iterator проверяет
		 наличие элементов и возвращает итератор, содержащий общие элементы.


		 ![](../../Property_Image.gif)
		 [LastDimElement](IDimSelection.LastDimElement.htm)
		 Свойство LastDimElement
		 возвращает последний выделенный элемент справочника.


		 ![](../../Property_Image.gif)
		 [MultiSelect](IDimSelection.MultiSelect.htm)
		 Свойство MultiSelect
		 определяет, есть ли возможность выделения более одного элемента
		 в отметке.


		 ![](../../Property_Image.gif)
		 [PredefinedSchema](IDimSelection.PredefinedSchema.htm)
		 Свойство PredefinedSchema
		 возвращает объект для работы с предопределенной схемой отметки
		 измерения.


		 ![](../../Property_Image.gif)
		 [SelectedCount](IDimSelection.SelectedCount.htm)
		 Свойство SelectedCount
		 возвращает количество элементов в отметке.


		 ![](../../Property_Image.gif)
		 [SelectedElementArray](IDimSelection.SelectedElementArray.htm)
		 Свойство SelectedElementArray
		 проверяет наличие элементов и возвращает массив, содержащий общие
		 элементы.


		 ![](../../Property_Image.gif)
		 [SelectHierarchy](IDimSelection.SelectHierarchy.htm)
		 Свойство SelectHierarchy
		 определяет и добавляет альтернативную иерархию в отметку справочника.


		 ![](../../Property_Image.gif)
		 [SelectionSchema](IDimSelection.SelectionSchema.htm)
		 Свойство SelectionSchema
		 определяет схему отметки элементов справочника.


		 ![](../../Property_Image.gif)
		 [SelectionSchemaOnceApplied](IDimSelection.SelectionSchemaOnceApplied.htm)
		 Свойство SelectionSchemaOnceApplied
		 определяет признак того, что выбранная схема отметки применялась
		 хотя бы раз.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AttributeToVariant](IDimSelection.AttributeToVariant.htm)
		 Метод AttributeToVariant
		 формирует значение отметки по значениям указанного атрибута элементов.


		 ![](../../Sub_Image.gif)
		 [AttributeToVariantOI](IDimSelection.AttributeToVariantOI.htm)
		 Метод AttributeToVariantOI
		 формирует значение отметки по значениям указанного атрибута элементов,
		 если связь пользовательской иерархии и исходного справочника установлена.


		 ![](../../Sub_Image.gif)
		 [ChildrenCount](IDimSelection.ChildrenCount.htm)
		 Метод ChildrenCount
		 для указанного элемента справочника возвращает количество дочерних
		 элементов входящих в отметку.


		 ![](../../Sub_Image.gif)
		 [Compare](IDimSelection.Compare.htm)
		 Метод Compare осуществляет
		 сравнение отметок.


		 ![](../../Sub_Image.gif)
		 [CopyTo](IDimSelection.CopyTo.htm)
		 Метод CopyTo осуществляет
		 копирование отметки, схем отметки или групп элементов измерения-источника
		 в измерение-приёмник.


		 ![](../../Sub_Image.gif)
		 [CopyToEx](IDimSelection.CopyToEx.htm)
		 Метод CopyToEx осуществляет
		 копирование опции, выбранной посредством параметра Options,
		 из измерения-источника в измерение-приёмник.


		 ![](../../Sub_Image.gif)
		 [CreateCopy](IDimSelection.CreateCopy.htm)
		 Метод CreateCopy создает
		 копию отметки справочника.


		 ![](../../Sub_Image.gif)
		 [DeselectAll](IDimSelection.DeselectAll.htm)
		 Метод DeselectAll осуществляет
		 удаление из отметки всех элементов справочника.


		 ![](../../Sub_Image.gif)
		 [DeselectChildren](IDimSelection.DeselectChildren.htm)
		 Метод DeselectChildren
		 осуществляет удаление дочерних элементов из отметки.


		 ![](../../Sub_Image.gif)
		 [DeselectElement](IDimSelection.DeselectElement.htm)
		 Метод DeselectElement
		 осуществляет удаление элемента из отметки.


		 ![](../../Sub_Image.gif)
		 [DeselectParent](IDimSelection.DeselectParent.htm)
		 Метод DeselectParent
		 осуществляет снятие отметки с родительских элементов.


		 ![](../../Sub_Image.gif)
		 [DeselectSiblings](IDimSelection.DeselectSiblings.htm)
		 Метод DeselectSiblings
		 осуществляет удаление из отметки элементов уровня в рамках одного
		 родительского элемента.


		 ![](../../Sub_Image.gif)
		 [ExternalLoad](IDimSelection.ExternalLoad.htm)
		 Метод ExternalLoad
		 загружает отметку в XML-виде из строки.


		 ![](../../Sub_Image.gif)
		 [ExternalSave](IDimSelection.ExternalSave.htm)
		 Метод ExternalSave
		 сохраняет отметку в XML-виде в строку.


		 ![](../../Sub_Image.gif)
		 [ForceHierarchy](IDimSelection.ForceHierarchy.htm)
		 Метод ForceHierarchy
		 устанавливает альтернативную иерархию в отметке.


		 ![](../../Sub_Image.gif)
		 [InitAdditionalHierarchy](IDimSelection.InitAdditionalHierarchy.htm)
		 Метод InitAdditionalHierarchy
		 инициализирует альтернативную иерархию.


		 ![](../../Sub_Image.gif)
		 [IntersectWith](IDimSelection.IntersectWith.htm)
		 Метод IntersectWith
		 оставляет отмеченными только те элементы, которые входят в пересечение
		 с переданной отметкой.


		 ![](../../Sub_Image.gif)
		 [InvertAll](IDimSelection.InvertAll.htm)
		 Метод InvertAll осуществляет
		 инверсию отметки справочника.


		 ![](../../Sub_Image.gif)
		 [IsAnyChildSelected](IDimSelection.IsAnyChildSelected.htm)
		 Метод IsAnyChildSelected
		 проверяет, входят ли дочерние объекты элемента в отметку.


		 ![](../../Sub_Image.gif)
		 [IsElementSelected](IDimSelection.IsElementSelected.htm)
		 Метод IsElementSelected
		 проверяет, входит ли элемент справочника в отметку.


		 ![](../../Sub_Image.gif)
		 [LimitToGroup](IDimSelection.LimitToGroup.htm)
		 Метод LimitToGroup
		 изменяет отметку элементов, оставляя отмеченными только те элементы,
		 которые содержатся в указанной группе элементов справочника.


		 ![](../../Sub_Image.gif)
		 [LimitToHierarchy](IDimSelection.LimitToHierarchy.htm)
		 Метод LimitToHierarchy
		 оставляет отмеченными в отметке только те элементы, которые входят
		 в указанную альтернативную иерархию.


		 ![](../../Sub_Image.gif)
		 [Parse](IDimSelection.Parse.htm)
		 Метод Parse восстанавливает
		 отметку из указанного значения.


		 ![](../../Sub_Image.gif)
		 [ParseAttribute](IDimSelection.ParseAttribute.htm)
		 Метод ParseAttribute
		 восстанавливает отметку из указанного значения.


		 ![](../../Sub_Image.gif)
		 [ParseAttributeOI](IDimSelection.ParseAttributeOI.htm)
		 Метод ParseAttributeOI
		 восстанавливает отметку исходной иерархии, если связь между пользовательской
		 иерархией и исходным справочником не установлена.


		 ![](../../Sub_Image.gif)
		 [SaveElementDependencies](IDimSelection.SaveElementDependencies.htm)
		 Метод SaveElementDependencies
		 осуществляет сохранение коллекции зависимостей от элементов, содержащихся
		 в отметке.


		 ![](../../Sub_Image.gif)
		 [SelectAll](IDimSelection.SelectAll.htm)
		 Метод SelectAll осуществляет
		 добавление в отметку всех элементов справочника.


		 ![](../../Sub_Image.gif)
		 [SelectAttributeRange](IDimSelection.SelectAttributeRange.htm)
		 Метод SelectAttributeRange
		 изменяет отметку справочника в соответствии с диапазоном значений
		 атрибута.


		 ![](../../Sub_Image.gif)
		 [SelectChildren](IDimSelection.SelectChildren.htm)
		 Метод SelectChildren
		 осуществляет добавление дочерних элементов в отметку.


		 ![](../../Sub_Image.gif)
		 [SelectElement](IDimSelection.SelectElement.htm)
		 Метод SelectElement
		 осуществляет добавление элемента в отметку.


		 ![](../../Sub_Image.gif)
		 [SelectElementWithoutExcep](IDimSelection.SelectElementWithoutExcep.htm)
		 Метод SelectElementWithoutExcep
		 добавляет указанный элемент в отметку без вывода сообщений о возможных
		 исключительных ситуациях.


		 ![](../../Sub_Image.gif)
		 [SelectLevel](IDimSelection.SelectLevel.htm)
		 Метод SelectLevel добавляет
		 уровень измерения в отметку.


		 ![](../../Sub_Image.gif)
		 [SelectParent](IDimSelection.SelectParent.htm)
		 Метод SelectParent
		 осуществляет добавление родительских элементов в отметку.


		 ![](../../Sub_Image.gif)
		 [SelectSiblings](IDimSelection.SelectSiblings.htm)
		 Метод SelectSiblings
		 осуществляет добавление в отметку элементов уровня в рамках одного
		 родительского элемента.


		 ![](../../Sub_Image.gif)
		 [ToString](IDimSelection.ToString.htm)
		 Метод ToString формирует
		 значение отметки в строковом виде в соответствии с установленными
		 параметрами.


		 ![](../../Sub_Image.gif)
		 [ToVariant](IDimSelection.ToVariant.htm)
		 Метод ToVariant формирует
		 значение отметки по значениям атрибута Идентификатор.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
