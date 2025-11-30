# IRdsAttribute

IRdsAttribute
-


# IRdsAttribute


Сборка: Rds;


## Описание


Интерфейс IRdsAttribute содержит
 свойства атрибута справочника НСИ.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IRdsAttribute


## Комментарии


Для работы с коллекцией атрибутов справочника НСИ используйте свойства
 и методы интерфейса [IRdsAttributes](../IRdsAttributes/IRdsAttributes.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Calculated](IRdsAttribute.Calculated.htm)
		 Свойство Calculated
		 определяет, является ли атрибут вычисляемым.


		 ![](../../Property_Image.gif)
		 [DataDomain](IRdsAttribute.DataDomain.htm)
		 Свойство DataDomain
		 определяет тип данных для хранения в атрибуте многобайтовой информации.


		 ![](../../Property_Image.gif)
		 [DataType](IRdsAttribute.DataType.htm)
		 Свойство DataType определяет
		 тип данных, которые могут содержаться в значениях элементов по
		 данному атрибуту.


		 ![](../../Property_Image.gif)
		 [DefaultExpression](IRdsAttribute.DefaultExpression.htm)
		 Свойство DefaultExpression
		 определяет выражение, по которому будет определяться значение
		 атрибута по умолчанию.


		 ![](../../Property_Image.gif)
		 [DefaultExpressionKind](IRdsAttribute.DefaultExpressionKind.htm)
		 Свойство DefaultExpressionKind
		 определяет момент вычисления значения атрибута по умолчанию .


		 ![](../../Property_Image.gif)
		 [Dictionary](IRdsAttribute.Dictionary.htm)
		 Свойство Dictionary
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [FieldName](IRdsAttribute.FieldName.htm)
		 Свойство FieldName
		 определяет наименование поля таблицы, в котором будут храниться
		 значения атрибута.


		 ![](../../Property_Image.gif)
		 [FieldPrecision](IRdsAttribute.FieldPrecision.htm)
		 Свойство FieldPrecision
		 определяет количество десятичных знаков поля таблицы, в котором
		 будут храниться значения атрибута.


		 ![](../../Property_Image.gif)
		 [FieldSize](IRdsAttribute.FieldSize.htm)
		 Свойство FieldSize
		 определяет общую длину поля таблицы, в котором будут храниться
		 значения атрибута.


		 ![](../../Property_Image.gif)
		 [HasHierarchy](IRdsAttribute.HasHierarchy.htm)
		 Свойство HasHierarchy
		 определяет, может ли атрибут использоваться для построения альтернативной
		 иерархии.


		 ![](../../Property_Image.gif)
		 [HasMultipleValues](IRdsAttribute.HasMultipleValues.htm)
		 Свойство HasMultipleValues
		 определяет, может ли элемент по данному атрибуту иметь множественные
		 значения.


		 ![](../../Property_Image.gif)
		 [Hidden](IRdsAttribute.Hidden.htm)
		 Свойство Hidden определяет,
		 является ли данный атрибут скрытым.


		 ![](../../Property_Image.gif)
		 [Kind](IRdsAttribute.Kind.htm)
		 Свойство Kind возвращает
		 вид атрибута.


		 ![](../../Property_Image.gif)
		 [Link](IRdsAttribute.Link.htm)
		 Свойство Link определяет
		 связь с другим справочником для данного атрибута.


		 ![](../../Property_Image.gif)
		 [Lookup](IRdsAttribute.Lookup.htm)
		 Свойство Lookup определяет
		 заимствованный атрибут справочника, с которым установлена связь
		 [Link](IRdsAttribute.Link.htm).


		 ![](../../Property_Image.gif)
		 [Nullable](IRdsAttribute.Nullable.htm)
		 Свойство Nullable определяет,
		 может ли элемент по данному атрибуту иметь пустое значение.


		 ![](../../Property_Image.gif)
		 [ObjectLinked](IRdsAttribute.ObjectLinked.htm)
		 Свойство ObjectLinked
		 определяет, является ли атрибут справочника НСИ ссылкой на объект
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Param](IRdsAttribute.Param.htm)
		 Свойство Param возвращает
		 ссылку на параметр справочника, если атрибут является параметрическим.


		 ![](../../Property_Image.gif)
		 [Predefined](IRdsAttribute.Predefined.htm)
		 Свойство Predefined
		 возвращает значение True,
		 если данный атрибут является системным.


		 ![](../../Property_Image.gif)
		 [PredefinedType](IRdsAttribute.PredefinedType.htm)
		 Свойство PredefinedType
		 возвращает тип системного атрибута.


		 ![](../../Property_Image.gif)
		 [Query](IRdsAttribute.Query.htm)
		 Свойство Query определяет
		 текст запроса, по которому рассчитывается значение вычисляемого
		 атрибута.


		 ![](../../Property_Image.gif)
		 [ReadAccess](IRdsAttribute.ReadAccess.htm)
		 Свойство ReadAccess
		 определяет значение метки безопасности (в десятичном виде), определяющей
		 пользователей, которые будут иметь право на чтение значений элементов
		 справочника по данному атрибуту.


		 ![](../../Property_Image.gif)
		 [ReadAccessStr](IRdsAttribute.ReadAccessStr.htm)
		 Свойство ReadAccessStr
		 определяет значение метки безопасности (в строковом виде), определяющей
		 пользователей, которые будут иметь право на чтение значений элементов
		 справочника по данному атрибуту.


		 ![](../../Property_Image.gif)
		 [Tag](IRdsAttribute.Tag.htm)
		 Свойство Tag не учитывается
		 компилятором, поэтому может быть использовано пользователем по
		 его усмотрению.


		 ![](../../Property_Image.gif)
		 [TimeDependent](IRdsAttribute.TimeDependent.htm)
		 Свойство TimeDependent
		 определяет, учитывать ли временную компоненту для атрибутов, имеющих
		 тип «DateTime».


		 ![](../../Property_Image.gif)
		 [Translations](IRdsAttribute.Translations.htm)
		 Свойство Translations
		 возвращает коллекцию настроек, содержащих параметры перевода наименования
		 атрибута справочника НСИ на различные языки.


		 ![](../../Property_Image.gif)
		 [Type](IRdsAttribute.Type.htm)
		 Свойство Type определяет
		 тип атрибута, используемый для описания данного атрибута.


		 ![](../../Property_Image.gif)
		 [VisibleForEdit](IRdsAttribute.VisibleForEdit.htm)
		 Свойство VisibleForEdit
		 определяет, доступно ли значение атрибута для редактирования в
		 карточке элемента справочника.


		 ![](../../Property_Image.gif)
		 [WriteAccess](IRdsAttribute.WriteAccess.htm)
		 Свойство WriteAccess
		 определяет значение метки безопасности (в десятичном виде),
		 определяющей пользователей, которые будут иметь право на изменение
		 значений элементов справочника по данному атрибуту.


		 ![](../../Property_Image.gif)
		 [WriteAccessStr](IRdsAttribute.WriteAccessStr.htm)
		 Свойство WriteAccessStr
		 определяет значение метки безопасности (в строковом виде), определяющей
		 пользователей, которые будут иметь право на изменение значений
		 элементов справочника по данному атрибуту.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
