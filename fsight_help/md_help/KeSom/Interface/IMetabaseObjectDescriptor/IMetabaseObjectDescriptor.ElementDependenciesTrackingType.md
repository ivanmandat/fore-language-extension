# IMetabaseObjectDescriptor.ElementDependenciesTrackingType

IMetabaseObjectDescriptor.ElementDependenciesTrackingType
-


# IMetabaseObjectDescriptor.ElementDependenciesTrackingType


## Синтаксис


		ElementDependenciesTrackingType: [MbElementDependenciesTrackingType](../../Enums/MbElementDependenciesTrackingType.htm);


## Описание


Свойство ElementDependenciesTrackingType
 определяет тип отслеживания связей.


## Комментарии


В качестве значения свойства необходимо указать одно значение, либо
 комбинацию значений перечислимого типа [MbElementDependenciesTrackingType](../../Enums/MbElementDependenciesTrackingType.htm).


Изменение данного свойства приведет к автоматическому изменению свойств
 [IMetabaseObjectDescriptor.TrackElementDependencies](IMetabaseObjectDescriptor.TrackElementDependencies.htm)
 и [IMetabaseObjectDescriptor.TrackElementDependents](IMetabaseObjectDescriptor.TrackElementDependents.htm).


## Пример


Пример использования свойства приведен в примере для конструктора [MbElementDependencyTemplateClass.Create](../../Class/MbElementDependencyTemplateClass/MbElementDependencyTemplateClass.Create.htm).


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
