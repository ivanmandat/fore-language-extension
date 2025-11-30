# WbkDataView.refreshMetaAttribute

WbkDataView.refreshMetaAttribute
-


# WbkDataView.refreshMetaAttribute


## Синтаксис


refreshMetaAttribute ();


## Описание


Метод refreshMetaAttribute обновляет компоненты, отображающие информацию об атрибутах ([дерево рядов](../MetaAttributeTree/MetaAttributeTree.htm) и [навигационную цепочку](../MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm)).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm) c наименованием «wbkDataBox» (см. «[Конструктор WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


console.log("Обновляем компонент, отображающий информацию об атрибутах (дерево рядов и навигационную цепочку)");
wbkDataBox.refreshMetaAttribute()

После выполнения примера будут обновлены компоненты, отображающие информацию об атрибутах (дерево рядов и навигационная цепочка).


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
