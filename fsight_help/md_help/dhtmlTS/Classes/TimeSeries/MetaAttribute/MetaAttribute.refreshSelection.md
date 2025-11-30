# MetaAttribute.refreshSelection

MetaAttribute.refreshSelection
-


# MetaAttribute.refreshSelection


## Синтаксис


refreshSelection ();


## Описание


Метод refreshSelection обновляет выделение в дереве измерений атрибута.


## Пример


Для выполнения примера необходимо наличие на странице компонента [MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm), из которого получен атрибут с индесом 1, которому присвоено наименование «someMetaAttribute» и в обработчике события открытия документа добавить следующий код:


	console.log("Обновлено выделение в дереве измерений атрибута");
	someMetaAttribute.refreshSelection();

После выполнения примера будет обновлено дерево измерений атрибута, а в консоль браузера будет выведено соответствующее сообщение.


См. также:


[MetaAttribute](MetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
