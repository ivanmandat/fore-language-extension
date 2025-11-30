# MetaAttribute.updateContent

MetaAttribute.updateContent
-


# MetaAttribute.updateContent


## Синтаксис


updateContent ();


## Описание


Метод updateContent обновляет надпись на элементе навигационной цепочки (в зависимости от отметки в измерении атрибута).


## Пример


Для выполнения примера необходимо наличие на странице компонента [MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm), из которого получен атрибут с индесом 1, которому присвоено наименование «someMetaAttribute» и в обработчике события открытия документа добавить следующий код:


console.log("Обновляем надпись на элементе навигационной цепочки");
someMetaAttribute.updateContent();

После выполнения примера будет обновлена надпись на элементе навигационной цепочки, в консоль будет выведено соответствующее сообщение.


См. также:


[MetaAttribute](MetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
