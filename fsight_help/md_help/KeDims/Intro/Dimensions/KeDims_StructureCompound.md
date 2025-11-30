# Структура составного справочника

Структура составного справочника
-


# Структура составного справочника


Составной справочник фактов строится на основе зафиксированных измерений
 кубов-источников виртуального куба. Для работы с составным справочником
 фактов предназначен интерфейс [ICompoundDimension](../../interface/ICompoundDimension/ICompoundDimension.htm).
 Если в источниках зафиксированы календарные справочники, то в виртуальном
 кубе также создается составной календарный справочник. Для работы с составным
 календарным справочником предназначен интерфейс [ICompoundCalendar](../../interface/ICompoundCalendar/ICompoundCalendar.htm).
 Оба составных справочника имеют признак внутренних объектов ([IsInternal](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsInternal.htm)=True)
 и доступны в [списке
 объектов](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Dependencies.htm), от которых зависит виртуальный куб.


Пример доступа к структуре составного справочника фактов виртуального
 куба:


			Var

    //...

    MB: IMetabase;

    VCube: IVirtualCube;

    CompDim: ICompoundDimension;

    //...

Begin

    //...

    MB := MetabaseClass.Active;

    VCube := MB.ItemById("VCube_1").Edit As IVirtualCube;

    CompDim := VCube.FactDimension As ICompoundDimension;

    //...


В коллекцию источников, доступную в свойстве [Sources](../../interface/ICompoundDimension/ICompoundDimension.Sources.htm),
 включены источники, в которых зафиксировано хотя бы одно измерение. Элементы
 в составном справочнике фактов создаются динамически при открытии виртуального
 куба. Изменить структуру и наименования элементов составного справочника
 нельзя. Наименования формируются на основе наименований источников и наименований
 зафиксированных элементов в измерениях источников.


Если необходимо использовать свой набор элементов в составном справочнике
 фактов, то куб можно настроить на использование измерения фактов. Для
 этого предназначен метод [InitCustomContainer](../../interface/ICompoundDimension/ICompoundDimension.InitCustomContainer.htm).
 При выполнении данного метода в виртуальном кубе будет создано/обновлено
 [локальное измерение фактов](KeDims_StructureFacts.htm). После
 выполнения метода локальное измерение будет доступно в свойстве [CustomContainer](../../interface/ICompoundDimension/ICompoundDimension.CustomContainer.htm).
 В нем можно создать необходимую иерархию элементов и определить их привязку,
 задав значения соответствующих атрибутов.


См. также:


[Работа
 со структурой справочников](KeDims_StructureDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
