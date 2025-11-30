# MetaAttribute.getAttributeId

MetaAttribute.getAttributeId
-


# MetaAttribute.getAttributeId


## Синтаксис


getAttributeId ();


## Описание


Метод getAttributeld вычисляет идентификатор атрибута иерархии.


## Пример


Для выполнения примера необходимо наличие на странице компонента [MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm), из которого получен атрибут с индесом 1, которому присвоено наименование «someMetaAttribute» и в обработчике события открытия документа добавить следующий код:


//Вычисляем идентификатор атрибута иерархии
var attributeId = someOtherMetaAttributeInstance.getAttributeId ();
console.log("Идентификатор атрибута:", attributeId);
//Добавляем обработчик события изменения отметки на сервере
someOtherMetaAttributeInstance.DimSelectionChanged.add(onDummyActionFactory("Произошло событие изменения отметки на сервере"));
//Вызываем событие изменения отметки на сервере
someOtherMetaAttributeInstance.DimSelectionChanged.fire(someOtherMetaAttributeInstance, {});

После выполнения примера в консоль будет выведен идентификатор первого атрибута иерархии и будет сгенерировано событие изменения отметки на сервере.


См. также:


[MetaAttribute](MetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
